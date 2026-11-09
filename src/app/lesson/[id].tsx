import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Avatar } from '../../components/Avatar';
import { Bar, Btn, Card, Gap, Row, Screen, Stars, T } from '../../components/ui';
import { CompanionSays, MicButton, PhraseView, PlayButton, ScoreView } from '../../components/voice';
import { PHRASE, UNIT, UNITS } from '../../data/curriculum';
import { LANG, LangCode } from '../../data/languages';
import { Step, buildPractice, buildUnitLesson, sameText } from '../../lib/lesson';
import { BLOCK_MESSAGE, DISTRESS_MESSAGE, moderate } from '../../lib/safety/filter';
import { ScoreResult, scoreAttempt } from '../../lib/scoring';
import { speak, speakCoach, stopSpeaking } from '../../lib/speech';
import { dueCards } from '../../lib/srs';
import { romanText, scriptText } from '../../lib/text';
import { useRecognizer } from '../../lib/useRecognizer';
import { useStore } from '../../lib/store';
import { C, F, R } from '../../theme';

const PRACTICE_TITLES: Record<string, string> = {
  review: 'Révisions du jour', listen: 'Écoute active', speak: 'Atelier de prononciation', write: 'Dictée et écriture',
};

export default function Lesson() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const store = useStore();
  const { profile, companion, band, progress, unitState } = store;
  const lang = profile?.targetLang ?? 'en';
  const ref = profile?.refLang ?? 'fr';
  const unit = UNIT[id ?? ''];
  const started = useRef(Date.now());

  const steps: Step[] = useMemo(() => {
    if (!profile) return [];
    const openIds = UNITS.filter((u) => ['open', 'done'].includes(unitState(u))).flatMap((u) => u.phrases);
    const pool = openIds.length ? openIds : UNITS[1].phrases;
    if (unit) return buildUnitLesson(unit.id, lang, band, pool);
    if (id === 'review') {
      const due = dueCards(progress.cards);
      return buildPractice('review', due.length ? due : Object.keys(progress.cards).length ? Object.keys(progress.cards) : pool, lang, pool);
    }
    const done = UNITS.filter((u) => progress.units[u.id]).flatMap((u) => u.phrases);
    return buildPractice(id as 'listen' | 'speak' | 'write', done.length ? done : pool, lang, pool);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, profile?.id, lang]);

  const [i, setI] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [finished, setFinished] = useState<null | { avg: number; stars: number; xp: number }>(null);

  useEffect(() => () => {
    stopSpeaking();
    const minutes = Math.round((Date.now() - started.current) / 60000);
    if (minutes > 0) store.addMinutes(minutes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!profile) return null;
  if (store.timeLeft === 0) {
    return (
      <Screen>
        <Gap h={40} />
        <CompanionSays companion={companion} text="C’est tout pour aujourd’hui ! Le temps fixé par tes parents est écoulé. À demain 🌙" />
        <Gap h={20} />
        <Btn title="Retour" onPress={() => router.back()} />
      </Screen>
    );
  }
  if (!steps.length) {
    return (
      <Screen>
        <Gap h={40} />
        <CompanionSays companion={companion} text="Rien à réviser pour l’instant : termine d’abord une leçon du parcours." />
        <Gap h={20} />
        <Btn title="Retour" onPress={() => router.back()} />
      </Screen>
    );
  }

  const step = steps[i];
  const title = unit ? unit.title : PRACTICE_TITLES[id ?? ''] ?? 'Entraînement';

  const done = (score: number) => {
    const next = [...scores, score];
    setScores(next);
    if (step.kind !== 'discover') {
      store.record({ kind: step.kind === 'order' ? 'order' : step.kind === 'speak' ? 'speak' : step.kind === 'write' ? 'write' : 'listen', phraseId: step.pid, score });
    }
    if (i + 1 < steps.length) { setI(i + 1); return; }
    const graded = steps.map((s, k) => (s.kind === 'discover' ? null : next[k])).filter((v): v is number => v !== null);
    const avg = Math.round(graded.reduce((a, b) => a + b, 0) / Math.max(1, graded.length));
    let res = { avg, stars: avg >= 90 ? 3 : avg >= 75 ? 2 : 1, xp: graded.length * 5 };
    if (unit) { const r = store.completeUnit(unit.id, avg); res = { avg, ...r }; }
    setFinished(res);
    if (profile.settings.coachVoice) speakCoach(companion.cheers[0], companion.voice.gender, companion.voice.pitch);
  };

  if (finished) {
    return (
      <Screen>
        <Gap h={30} />
        <View style={{ alignItems: 'center' }}>
          <Avatar spec={companion.avatar} size={140} mood="wow" />
          <Gap />
          <T v="title" style={{ textAlign: 'center' }}>{finished.avg >= 75 ? 'Leçon réussie !' : 'Leçon terminée'}</T>
          <Gap h={8} />
          <Stars n={finished.stars} size={34} />
          <Gap h={8} />
          <T style={{ color: C.sub }}>Score moyen {finished.avg}/100 · +{finished.xp} XP</T>
        </View>
        <Gap h={20} />
        <CompanionSays companion={companion}
          text={finished.avg >= 75 ? companion.cheers[1] : `${companion.nudges[0]} Les phrases difficiles reviendront dans tes révisions.`} />
        <Gap h={24} />
        {unit ? <Btn title="Jouer le dialogue avec mon compagnon" icon="💬" onPress={() => router.replace(`/dialogue/${unit.id}`)} /> : null}
        <Gap h={10} />
        <Btn title="Retour au parcours" variant="ghost" onPress={() => router.replace('/(tabs)')} />
      </Screen>
    );
  }

  return (
    <Screen>
      <Row>
        <Pressable onPress={() => router.back()} accessibilityRole="button" accessibilityLabel="Quitter la leçon"><Text style={{ fontSize: 26, color: C.sub }}>✕</Text></Pressable>
        <View style={{ flex: 1 }}><Bar value={i / steps.length} color={C.accent} height={10} /></View>
        <T v="small">{i + 1}/{steps.length}</T>
      </Row>
      <Gap h={6} />
      <T v="small">{title}</T>
      <Gap h={14} />
      <StepView key={i} step={step} lang={lang} refLang={ref} onDone={done} />
    </Screen>
  );
}

// ─────────────────────────────────────────────────────────────────

function StepView({ step, lang, refLang, onDone }: { step: Step; lang: LangCode; refLang: LangCode; onDone: (score: number) => void }) {
  switch (step.kind) {
    case 'discover': return <Discover pid={step.pid} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'meaning': return <Meaning pid={step.pid} audio={step.audio} options={step.options} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'pick': return <Pick pid={step.pid} options={step.options} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'order': return <Order pid={step.pid} tiles={step.tiles} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'speak': return <Speak pid={step.pid} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'write': return <Write pid={step.pid} lang={lang} refLang={refLang} onDone={onDone} />;
  }
}

type P = { pid: string; lang: LangCode; refLang: LangCode; onDone: (score: number) => void };

function useAutoPlay(text: string, lang: LangCode, enabled = true) {
  const { profile, companion } = useStore();
  useEffect(() => {
    if (!enabled || !profile?.settings.autoPlay) return;
    const t = setTimeout(() => speak(text, lang, { slow: profile.settings.slowAudio, gender: companion.voice.gender, pitch: companion.voice.pitch }), 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, lang]);
}

function Discover({ pid, lang, refLang, onDone }: P) {
  const { companion, profile } = useStore();
  const p = PHRASE[pid];
  const text = p.t[lang]!;
  const [speaking, setSpeaking] = useState(false);
  useAutoPlay(text, lang);
  return (
    <View>
      <CompanionSays companion={companion} speaking={speaking}
        text={p.role === 'c' ? 'Écoute ce que je vais te dire dans la conversation :' : 'Voici ce que tu vas dire. Écoute bien :'} />
      <Gap h={18} />
      <Card>
        <PhraseView phrase={p} lang={lang} refLang={refLang} showRoman={profile?.settings.showRomanization} />
        <Gap h={16} />
        <Row style={{ justifyContent: 'center', gap: 24 }}>
          <PlayButton text={text} lang={lang} companion={companion} label="Écouter" onState={setSpeaking} />
          <PlayButton text={text} lang={lang} companion={companion} slow label="Lentement" onState={setSpeaking} />
        </Row>
      </Card>
      <Gap h={20} />
      <Btn title="J’ai compris" onPress={() => onDone(100)} />
    </View>
  );
}

function Feedback({ ok, answer, onNext }: { ok: boolean; answer?: React.ReactNode; onNext: () => void }) {
  const { companion, profile } = useStore();
  const msg = ok ? companion.cheers[Math.floor(Math.random() * companion.cheers.length)] : companion.nudges[Math.floor(Math.random() * companion.nudges.length)];
  useEffect(() => {
    if (profile?.settings.coachVoice) speakCoach(msg, companion.voice.gender, companion.voice.pitch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{ marginTop: 16, backgroundColor: ok ? C.okSoft : C.badSoft, borderRadius: R.m, padding: 14 }}>
      <Text style={{ fontWeight: '800', color: ok ? C.ok : C.bad, fontSize: 16 }}>{ok ? '✓ ' : '✗ '}{msg}</Text>
      {answer ? <View style={{ marginTop: 6 }}>{answer}</View> : null}
      <Gap h={12} />
      <Btn title="Continuer" variant={ok ? 'ok' : 'danger'} onPress={onNext} />
    </View>
  );
}

function Meaning({ pid, audio, options, lang, refLang, onDone }: P & { audio: boolean; options: string[] }) {
  const { companion, profile } = useStore();
  const p = PHRASE[pid];
  const [chosen, setChosen] = useState<string | null>(null);
  useAutoPlay(p.t[lang]!, lang, audio);
  return (
    <View>
      <T v="h2">{audio ? 'Écoutez et choisissez le sens' : 'Que signifie cette phrase ?'}</T>
      <Gap />
      <Card>
        {audio ? (
          <Row style={{ justifyContent: 'center', gap: 24 }}>
            <PlayButton text={p.t[lang]!} lang={lang} companion={companion} size={64} label="Écouter" />
            <PlayButton text={p.t[lang]!} lang={lang} companion={companion} slow label="Lentement" />
          </Row>
        ) : <PhraseView phrase={p} lang={lang} refLang={refLang} showTranslation={false} showRoman={profile?.settings.showRomanization} />}
      </Card>
      <Gap />
      {options.map((o) => {
        const isRight = o === pid;
        const state = chosen ? (isRight ? 'right' : o === chosen ? 'wrong' : 'idle') : 'idle';
        return (
          <Pressable key={o} disabled={!!chosen} onPress={() => setChosen(o)} accessibilityRole="button"
            style={{ backgroundColor: state === 'right' ? C.okSoft : state === 'wrong' ? C.badSoft : C.card, borderRadius: R.m, padding: 14,
              marginBottom: 8, borderWidth: 2, borderColor: state === 'right' ? C.ok : state === 'wrong' ? C.bad : C.line }}>
            <Text style={{ fontSize: 16, color: C.ink, writingDirection: LANG[refLang].rtl ? 'rtl' : 'ltr' }}>{PHRASE[o].t[refLang]}</Text>
          </Pressable>
        );
      })}
      {chosen ? <Feedback ok={chosen === pid} onNext={() => onDone(chosen === pid ? 100 : 0)}
        answer={audio ? <Text style={{ color: C.ink }}>{scriptText(p, lang)}</Text> : undefined} /> : null}
    </View>
  );
}

function Pick({ pid, options, lang, refLang, onDone }: P & { options: string[] }) {
  const { companion, profile } = useStore();
  const p = PHRASE[pid];
  const [chosen, setChosen] = useState<string | null>(null);
  useAutoPlay(p.t[lang]!, lang);
  return (
    <View>
      <T v="h2">Écoutez et choisissez ce que vous entendez</T>
      <Gap />
      <Row style={{ justifyContent: 'center', gap: 24 }}>
        <PlayButton text={p.t[lang]!} lang={lang} companion={companion} size={64} label="Écouter" />
        <PlayButton text={p.t[lang]!} lang={lang} companion={companion} slow label="Lentement" />
      </Row>
      <Gap />
      {options.map((o) => {
        const isRight = o === pid;
        const state = chosen ? (isRight ? 'right' : o === chosen ? 'wrong' : 'idle') : 'idle';
        const rom = romanText(PHRASE[o], lang);
        return (
          <Pressable key={o} disabled={!!chosen} onPress={() => setChosen(o)} accessibilityRole="button"
            style={{ backgroundColor: state === 'right' ? C.okSoft : state === 'wrong' ? C.badSoft : C.card, borderRadius: R.m, padding: 14,
              marginBottom: 8, borderWidth: 2, borderColor: state === 'right' ? C.ok : state === 'wrong' ? C.bad : C.line }}>
            <Text style={{ fontSize: 19, color: C.ink, writingDirection: LANG[lang].rtl ? 'rtl' : 'ltr', textAlign: LANG[lang].rtl ? 'right' : 'left' }}>{scriptText(PHRASE[o], lang)}</Text>
            {profile?.settings.showRomanization && rom ? <Text style={[F.small, { fontStyle: 'italic' }]}>{rom}</Text> : null}
          </Pressable>
        );
      })}
      {chosen ? <Feedback ok={chosen === pid} onNext={() => onDone(chosen === pid ? 100 : 0)}
        answer={<Text style={{ color: C.ink }}>{p.t[refLang]}</Text>} /> : null}
    </View>
  );
}

function Order({ pid, tiles, lang, refLang, onDone }: P & { tiles: string[] }) {
  const p = PHRASE[pid];
  const [picked, setPicked] = useState<number[]>([]);
  const [checked, setChecked] = useState<null | boolean>(null);
  const answer = picked.map((k) => tiles[k]).join(' ');
  const rtl = LANG[lang].rtl;
  return (
    <View>
      <T v="h2">Remettez les mots dans l’ordre</T>
      <T v="small" style={{ marginTop: 4, fontSize: 15 }}>{p.t[refLang]}</T>
      <Gap />
      <View style={{ minHeight: 70, borderBottomWidth: 2, borderColor: C.line, flexDirection: rtl ? 'row-reverse' : 'row', flexWrap: 'wrap', gap: 8, paddingBottom: 10 }}>
        {picked.map((k) => (
          <Pressable key={k} disabled={checked !== null} onPress={() => setPicked(picked.filter((x) => x !== k))} style={tile}>
            <Text style={{ fontSize: 17, color: C.ink }}>{tiles[k]}</Text>
          </Pressable>
        ))}
      </View>
      <Gap />
      <View style={{ flexDirection: rtl ? 'row-reverse' : 'row', flexWrap: 'wrap', gap: 8 }}>
        {tiles.map((t, k) => (
          <Pressable key={k} disabled={picked.includes(k) || checked !== null} onPress={() => setPicked([...picked, k])}
            style={[tile, picked.includes(k) && { opacity: 0.25 }]}>
            <Text style={{ fontSize: 17, color: C.ink }}>{t}</Text>
          </Pressable>
        ))}
      </View>
      <Gap h={18} />
      {checked === null
        ? <Btn title="Vérifier" disabled={picked.length !== tiles.length} onPress={() => setChecked(sameText(answer, p.t[lang]!, lang))} />
        : <Feedback ok={checked} onNext={() => onDone(checked ? 100 : 30)} answer={<Text style={{ color: C.ink }}>{p.t[lang]}</Text>} />}
    </View>
  );
}

function Speak({ pid, lang, refLang, onDone }: P) {
  const { companion, profile, age, band } = useStore();
  const p = PHRASE[pid];
  const target = p.t[lang]!;
  const rec = useRecognizer(lang);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [blocked, setBlocked] = useState<string | null>(null);
  const [tries, setTries] = useState(0);
  const micOff = profile?.parental && !profile.parental.micAllowed;
  const selfAssess = micOff || rec.state === 'unavailable';

  useEffect(() => {
    if (rec.state !== 'done') return;
    const heard = rec.alternatives.length ? rec.alternatives : [rec.transcript];
    const m = moderate(heard.join(' '), { age, langs: [lang] });
    if (!m.ok || m.distress) { setBlocked(m.distress ? DISTRESS_MESSAGE : BLOCK_MESSAGE[band]); setResult(null); return; }
    const rom = romanText(p, lang);
    const r = scoreAttempt({ heard, target, lang, alternatives: rom && lang !== 'ber' ? [rom] : [], durationMs: rec.durationMs });
    setResult(r);
    setTries((t) => t + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rec.state]);

  return (
    <View>
      <T v="h2">À vous de parler</T>
      <T v="small" style={{ marginTop: 4, fontSize: 15 }}>Écoutez {companion.name}, puis répétez la phrase.</T>
      <Gap />
      <Card>
        <PhraseView phrase={p} lang={lang} refLang={refLang} showRoman={profile?.settings.showRomanization} />
        <Gap h={12} />
        <Row style={{ justifyContent: 'center', gap: 24 }}>
          <PlayButton text={target} lang={lang} companion={companion} label="Modèle" />
          <PlayButton text={target} lang={lang} companion={companion} slow label="Lentement" />
        </Row>
      </Card>

      {selfAssess ? (
        <View>
          <Gap />
          <Card tone={C.goldSoft}>
            <T style={{ fontSize: 14 }}>
              {micOff ? 'Le micro est désactivé dans l’espace parent.'
                : lang === 'ber' ? 'Pas encore d’analyse vocale pour l’amazigh sur cet appareil.'
                : 'La reconnaissance vocale n’est pas disponible ici (Expo Go, navigateur sans Web Speech, ou langue non installée).'}
              {' '}Répétez la phrase à voix haute, puis évaluez-vous honnêtement.
            </T>
          </Card>
          <Gap />
          <Row>
            <Btn style={{ flex: 1 }} title="À retravailler" variant="ghost" onPress={() => onDone(50)} />
            <Btn style={{ flex: 1 }} title="Bien dit !" variant="ok" onPress={() => onDone(85)} />
          </Row>
        </View>
      ) : (
        <View>
          <MicButton listening={rec.state === 'listening'} volume={rec.volume}
            onPress={() => { setBlocked(null); if (rec.state === 'listening') rec.stop(); else { setResult(null); rec.start([target]); } }} />
          <T v="small" style={{ textAlign: 'center' }}>
            {rec.state === 'listening' ? (rec.transcript ? `« ${moderate(rec.transcript, { age, langs: [lang] }).masked} »` : 'Je vous écoute…')
              : rec.state === 'denied' ? 'Autorisez le micro dans les réglages de l’appareil.'
              : rec.state === 'error' ? `Erreur : ${rec.error ?? 'inconnue'}` : 'Touchez le micro et parlez'}
          </T>
          {blocked ? <Card tone={C.badSoft} style={{ marginTop: 12 }}><T>{blocked}</T></Card> : null}
          {result ? <><Gap /><ScoreView result={result} lang={lang} spoken /></> : null}
          <Gap />
          {result ? (
            <Row>
              <Btn style={{ flex: 1 }} title="Réessayer" variant="ghost" onPress={() => { setResult(null); rec.reset(); }} />
              <Btn style={{ flex: 1 }} title="Continuer" onPress={() => onDone(result.score)} />
            </Row>
          ) : tries === 0 && rec.state !== 'listening' ? (
            <Btn title="Passer" variant="ghost" small onPress={() => onDone(0)} />
          ) : null}
        </View>
      )}
    </View>
  );
}

function Write({ pid, lang, refLang, onDone }: P) {
  const { age, band, profile } = useStore();
  const p = PHRASE[pid];
  const [text, setText] = useState('');
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [blocked, setBlocked] = useState<string | null>(null);
  const rom = romanText(p, lang);
  const nonLatin = ['ar', 'zh', 'ja', 'fa', 'hi', 'ber'].includes(lang);
  const check = () => {
    const m = moderate(text, { age, langs: [lang] });
    if (!m.ok || m.distress) { setBlocked(m.distress ? DISTRESS_MESSAGE : BLOCK_MESSAGE[band]); setText(m.masked); return; }
    setBlocked(null);
    setResult(scoreAttempt({ heard: text, target: p.t[lang]!, lang, alternatives: rom ? [rom] : [] }));
  };
  return (
    <View>
      <T v="h2">Écrivez en {LANG[lang].name.toLowerCase()}</T>
      <Gap h={8} />
      <Card tone={C.primarySoft}><Text style={{ fontSize: 18, color: C.ink, writingDirection: LANG[refLang].rtl ? 'rtl' : 'ltr' }}>{p.t[refLang]}</Text></Card>
      <Gap />
      <TextInput value={text} onChangeText={setText} editable={!result} multiline autoCorrect={false} autoCapitalize="none"
        placeholder={nonLatin ? `Écriture ${LANG[lang].native} ou ${LANG[lang].romanization}` : 'Votre réponse'}
        style={{ backgroundColor: C.card, borderRadius: R.m, borderWidth: 1.5, borderColor: C.line, padding: 14, fontSize: 18, minHeight: 90,
          textAlign: LANG[lang].rtl ? 'right' : 'left', color: C.ink }} />
      {nonLatin ? <T v="small" style={{ marginTop: 6 }}>Astuce : la transcription latine ({LANG[lang].romanization}) est acceptée, sans les accents.</T> : null}
      {blocked ? <Card tone={C.badSoft} style={{ marginTop: 12 }}><T>{blocked}</T></Card> : null}
      <Gap />
      {result ? (
        <>
          <ScoreView result={result} lang={lang} />
          {profile?.settings.showRomanization && rom ? <T v="small" style={{ marginTop: 6 }}>Transcription : {rom}</T> : null}
          <Gap />
          <Btn title="Continuer" onPress={() => onDone(result.score)} />
        </>
      ) : (
        <Row>
          <Btn style={{ flex: 1 }} title="Je ne sais pas" variant="ghost" onPress={() => setResult(scoreAttempt({ heard: '', target: p.t[lang]!, lang }))} />
          <Btn style={{ flex: 1 }} title="Vérifier" disabled={!text.trim()} onPress={check} />
        </Row>
      )}
    </View>
  );
}

const tile = { backgroundColor: C.card, borderRadius: 12, borderWidth: 1.5, borderColor: C.line, paddingVertical: 9, paddingHorizontal: 13, borderBottomWidth: 3 } as const;
