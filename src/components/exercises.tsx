import React, { useEffect, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { Text, TextInput } from './Text';
import { CircleCheckBig, CircleX, Lightbulb, Search } from 'lucide-react-native';
import { Picto } from './icons';
import { Btn, Card, Gap, Row, T } from './ui';
import { CompanionSays, MicButton, PhraseView, PlayButton, ScoreView } from './voice';
import type { CoachCat } from '../data/coachLines';
import { PHRASE, UNIT } from '../data/curriculum';
import { LANG, LangCode } from '../data/languages';
import { LANG_TIPS, PICTO, UNIT_NOTES } from '../data/pedagogyContent';
import { VOCAB_BY_ID } from '../data/vocab';
import { VOCAB_IMG } from '../data/vocabImages';
import type { Step } from '../lib/lesson';
import { sameText } from '../lib/lesson';
import { BLOCK_MESSAGE, DISTRESS_MESSAGE, moderate } from '../lib/safety/filter';
import { ScoreResult, scoreAttempt } from '../lib/scoring';
import { speak, speakCoach, stopSpeaking } from '../lib/speech';
import { line, speaks, verdictOf } from '../lib/teacher';
import { romanText, scriptText } from '../lib/text';
import { useRecognizer } from '../lib/useRecognizer';
import { useStore } from '../lib/store';
import { C, F, R } from '../theme';

// Exercices partagés par les leçons, les entraînements et le vocabulaire illustré.

/** Illustration d'un mot du vocabulaire (Fluent Emoji 3D). */
export function VocabImage({ pid, size = 120 }: { pid: string; size?: number }) {
  const v = VOCAB_BY_ID[pid];
  const src = v ? VOCAB_IMG[v.img] : undefined;
  if (!src) return null;
  return <Image source={src} style={{ width: size, height: size }} resizeMode="contain" accessibilityIgnoresInvertColors />;
}

/** Tutoiement pour les enfants et les ados, vouvoiement pour les adultes. */
export function useTv() {
  const { band } = useStore();
  return (tu: string, vous: string) => (band === 'adult' ? vous : tu);
}

/** Répliques du compagnon selon l'âge et le mode professeur. */
export function useCoach() {
  const { band, teacher, companion, profile } = useStore();
  const get = (cat: CoachCat) => line(band, teacher, cat);
  const say = (cat: CoachCat, text = get(cat), onDone?: () => void) => {
    if (profile?.settings.coachVoice && speaks(teacher, cat, 0)) speakCoach(text, companion.voice.gender, companion.voice.pitch, onDone);
    else onDone?.();
    return text;
  };
  return { get, say, teacher, chatty: teacher.intensity >= 2 };
}

// ─────────────────────────────────────────────────────────────────

export function StepView({ step, lang, refLang, onDone }: { step: Step; lang: LangCode; refLang: LangCode; onDone: (score: number | null) => void }) {
  switch (step.kind) {
    case 'discover': return <Discover pid={step.pid} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'meaning': return <Meaning pid={step.pid} audio={step.audio} options={step.options} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'pick': return <Pick pid={step.pid} options={step.options} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'picture': return <Picture pid={step.pid} options={step.options} recall={step.recall} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'grammar': return <Grammar unitId={step.unitId} mode={step.mode} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'order': return <Order pid={step.pid} tiles={step.tiles} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'speak': return <Speak pid={step.pid} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'write': return <Write pid={step.pid} lang={lang} refLang={refLang} onDone={onDone} />;
    case 'name': return <Name pid={step.pid} options={step.options} lang={lang} refLang={refLang} onDone={onDone} />;
  }
}

type P = { pid: string; lang: LangCode; refLang: LangCode; onDone: (score: number | null) => void };

function useAutoPlay(text: string, lang: LangCode, enabled = true, pid?: string, onDone?: () => void) {
  const { profile, companion } = useStore();
  useEffect(() => {
    if (!enabled || !profile?.settings.autoPlay) return;
    const t = setTimeout(() => speak(text, lang, { pid, gender: companion.voice.gender, pitch: companion.voice.pitch, onDone }), 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, lang]);
}

/** Bulle de consigne du compagnon (masquée en intensité « un peu »). */
function Instruction({ cat }: { cat: CoachCat }) {
  const { companion } = useStore();
  const coach = useCoach();
  const [text] = useState(() => coach.get(cat));
  if (!coach.chatty) return null;
  return <><CompanionSays companion={companion} text={text} size={56} /><Gap /></>;
}

function Discover({ pid, lang, refLang, onDone }: P) {
  const { companion, profile, pedagogy } = useStore();
  const tv = useTv();
  const p = PHRASE[pid];
  const text = p.t[lang]!;
  const [speaking, setSpeaking] = useState(false);
  const [heard, setHeard] = useState(!pedagogy.audioFirst);
  useAutoPlay(text, lang, true, pid, () => setHeard(true));
  useEffect(() => {
    if (heard || !pedagogy.audioFirst) return;
    const t = setTimeout(() => setHeard(true), 6000); // filet de sécurité si l'audio ne se lance pas
    return () => clearTimeout(t);
  }, [heard, pedagogy.audioFirst]);
  return (
    <View>
      <Instruction cat="discover" />
      <T v="small" style={{ marginBottom: 8 }}>
        {VOCAB_BY_ID[pid] ? (VOCAB_BY_ID[pid].group ? 'Groupe de mots' : 'Nouveau mot')
          : p.role === 'c' ? tv('Ce que ton interlocuteur va dire :', 'Ce que votre interlocuteur va dire :') : tv('Ce que tu vas dire :', 'Ce que vous allez dire :')}
      </T>
      <Card>
        {VOCAB_BY_ID[pid] ? <View style={{ alignItems: 'center', marginBottom: 12 }}><VocabImage pid={pid} size={VOCAB_BY_ID[pid].group ? 96 : 140} /></View>
          : PICTO[pid] && pedagogy.pictureCards ? <View style={{ alignItems: 'center', marginBottom: 12 }}><Picto names={PICTO[pid]} size={52} /></View> : null}
        {heard ? <PhraseView phrase={p} lang={lang} refLang={refLang} showRoman={profile?.settings.showRomanization} /> : (
          <Pressable onPress={() => setHeard(true)} accessibilityRole="button">
            <T style={{ textAlign: 'center', color: C.sub }}>{tv('Écoute d’abord… (touche pour voir le texte)', 'Écoutez d’abord… (touchez pour afficher le texte)')}</T>
          </Pressable>
        )}
        <Gap h={16} />
        <Row style={{ justifyContent: 'center', gap: 24 }}>
          <PlayButton pid={p.id} text={text} lang={lang} companion={companion} label="Écouter" onState={(v) => { setSpeaking(v); if (!v) setHeard(true); }} />
          <PlayButton pid={p.id} text={text} lang={lang} companion={companion} slow label="Lentement" onState={setSpeaking} />
        </Row>
      </Card>
      <Gap h={20} />
      <Btn title={tv('J’ai compris', 'J’ai compris')} disabled={!heard || speaking} onPress={() => onDone(null)} />
    </View>
  );
}

export function Feedback({ ok, answer, onNext }: { ok: boolean; answer?: React.ReactNode; onNext: () => void }) {
  const coach = useCoach();
  const [msg] = useState(() => coach.get(ok ? 'cheer' : 'nudge'));
  const [extra] = useState(() => (ok && speaks(coach.teacher, 'extra') ? coach.get('extra') : null));
  useEffect(() => {
    coach.say(ok ? 'cheer' : 'nudge', msg, extra ? () => coach.say('extra', extra) : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{ marginTop: 16, backgroundColor: ok ? C.okSoft : C.badSoft, borderRadius: R.m, padding: 14 }}>
      <Row gap={8}>
        {ok ? <CircleCheckBig size={22} color={C.ok} strokeWidth={2.4} /> : <CircleX size={22} color={C.bad} strokeWidth={2.4} />}
        <Text style={{ fontWeight: '800', color: ok ? C.ok : C.bad, fontSize: 16, flex: 1 }}>{msg}</Text>
      </Row>
      {extra ? <Row gap={8} style={{ marginTop: 8, alignItems: 'flex-start' }}><Lightbulb size={17} color={C.warn} style={{ marginTop: 2 }} /><Text style={{ color: C.ink, flex: 1 }}>{extra}</Text></Row> : null}
      {answer ? <View style={{ marginTop: 6 }}>{answer}</View> : null}
      <Gap h={12} />
      <Btn title="Continuer" variant={ok ? 'ok' : 'danger'} onPress={() => { stopSpeaking(); onNext(); }} />
    </View>
  );
}

function Picture({ pid, options, recall, lang, onDone }: P & { options: string[]; recall?: boolean }) {
  const { companion } = useStore();
  const tv = useTv();
  const p = PHRASE[pid];
  const [chosen, setChosen] = useState<string | null>(null);
  useAutoPlay(p.t[lang]!, lang, true, pid);
  return (
    <View>
      <Instruction cat="listen" />
      <T v="h2">{recall ? tv('Tu te souviens ? Écoute et touche l’image', 'Vous en souvenez-vous ? Écoutez et touchez l’image') : tv('Écoute et touche la bonne image', 'Écoutez et touchez la bonne image')}</T>
      <Gap />
      <Row style={{ justifyContent: 'center', gap: 24 }}>
        <PlayButton pid={p.id} text={p.t[lang]!} lang={lang} companion={companion} size={70} label="Écouter" />
        <PlayButton pid={p.id} text={p.t[lang]!} lang={lang} companion={companion} slow label="Lentement" />
      </Row>
      <Gap />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {options.map((o) => {
          const state = chosen ? (o === pid ? 'right' : o === chosen ? 'wrong' : 'idle') : 'idle';
          return (
            <Pressable key={o} disabled={!!chosen} onPress={() => setChosen(o)} accessibilityRole="button" accessibilityLabel="Image" 
              style={{ width: '46%', aspectRatio: 1.3, borderRadius: R.l, alignItems: 'center', justifyContent: 'center', borderWidth: 3,
                backgroundColor: state === 'right' ? C.okSoft : state === 'wrong' ? C.badSoft : C.card,
                borderColor: state === 'right' ? C.ok : state === 'wrong' ? C.bad : C.line }}>
              {VOCAB_BY_ID[o] ? <VocabImage pid={o} size={84} /> : <Picto names={PICTO[o]} size={40} color={state === 'right' ? C.ok : state === 'wrong' ? C.bad : C.primary} />}
            </Pressable>
          );
        })}
      </View>
      {chosen ? <Feedback ok={chosen === pid} onNext={() => onDone(chosen === pid ? 100 : 0)}
        answer={<Text style={{ color: C.ink, fontSize: 17 }}>{scriptText(p, lang)}</Text>} /> : null}
    </View>
  );
}

function Grammar({ unitId, mode, lang, refLang, onDone }: { unitId: string; mode: 'guided' | 'explicit'; lang: LangCode; refLang: LangCode; onDone: (s: number | null) => void }) {
  const { companion, profile } = useStore();
  const note = UNIT_NOTES[unitId];
  const unit = UNIT[unitId];
  return (
    <View>
      <T v="label">Point de langue</T>
      <T v="h2" style={{ marginTop: 4 }}>{unit.grammar}</T>
      <Gap />
      {mode === 'explicit'
        ? <Card>{note.explicit.map((e, k) => <Text key={k} style={{ fontSize: 15, color: C.ink, lineHeight: 22, marginBottom: 6 }}>• {e}</Text>)}</Card>
        : <Card tone={C.goldSoft}><Row style={{ alignItems: 'flex-start' }} gap={10}><Search size={19} color={C.warn} style={{ marginTop: 2 }} /><Text style={{ fontSize: 16, color: C.ink, flex: 1 }}>{note.guided}</Text></Row></Card>}
      <Gap />
      <T v="label">À observer</T>
      <Gap h={8} />
      {note.focus.filter((id) => PHRASE[id]?.t[lang]).map((id) => (
        <Card key={id} style={{ marginBottom: 8 }}>
          <Row style={{ alignItems: 'flex-start' }}>
            <View style={{ flex: 1 }}><PhraseView phrase={PHRASE[id]} lang={lang} refLang={refLang} big={false} showRoman={profile?.settings.showRomanization} /></View>
            <PlayButton pid={id} text={PHRASE[id].t[lang]!} lang={lang} companion={companion} size={40} />
          </Row>
        </Card>
      ))}
      {LANG_TIPS[lang] && mode === 'explicit' ? <Row gap={8} style={{ marginTop: 4, alignItems: 'flex-start' }}><Lightbulb size={16} color={C.warn} /><T v="small" style={{ flex: 1 }}>{LANG_TIPS[lang][0]}</T></Row> : null}
      <Gap h={18} />
      <Btn title="Continuer" onPress={() => onDone(null)} />
    </View>
  );
}

function Meaning({ pid, audio, options, lang, refLang, onDone }: P & { audio: boolean; options: string[] }) {
  const { companion, profile } = useStore();
  const p = PHRASE[pid];
  const [chosen, setChosen] = useState<string | null>(null);
  const tv = useTv();
  useAutoPlay(p.t[lang]!, lang, audio, pid);
  return (
    <View>
      <Instruction cat="listen" />
      <T v="h2">{audio ? tv('Écoute et choisis le sens', 'Écoutez et choisissez le sens') : 'Que signifie cette phrase ?'}</T>
      <Gap />
      <Card>
        {audio ? (
          <Row style={{ justifyContent: 'center', gap: 24 }}>
            <PlayButton pid={p.id} text={p.t[lang]!} lang={lang} companion={companion} size={64} label="Écouter" />
            <PlayButton pid={p.id} text={p.t[lang]!} lang={lang} companion={companion} slow label="Lentement" />
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
  const tv = useTv();
  const p = PHRASE[pid];
  const [chosen, setChosen] = useState<string | null>(null);
  useAutoPlay(p.t[lang]!, lang, true, pid);
  return (
    <View>
      <Instruction cat="listen" />
      <T v="h2">{tv('Écoute et choisis ce que tu entends', 'Écoutez et choisissez ce que vous entendez')}</T>
      <Gap />
      <Row style={{ justifyContent: 'center', gap: 24 }}>
        <PlayButton pid={p.id} text={p.t[lang]!} lang={lang} companion={companion} size={64} label="Écouter" />
        <PlayButton pid={p.id} text={p.t[lang]!} lang={lang} companion={companion} slow label="Lentement" />
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
  const tv = useTv();
  const p = PHRASE[pid];
  const [picked, setPicked] = useState<number[]>([]);
  const [checked, setChecked] = useState<null | boolean>(null);
  const answer = picked.map((k) => tiles[k]).join(' ');
  const rtl = LANG[lang].rtl;
  return (
    <View>
      <Instruction cat="order" />
      <T v="h2">{tv('Remets les mots dans l’ordre', 'Remettez les mots dans l’ordre')}</T>
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

export function Speak({ pid, lang, refLang, onDone }: P) {
  const { companion, profile, age, band, teacher, pedagogy } = useStore();
  const tv = useTv();
  const p = PHRASE[pid];
  const target = p.t[lang]!;
  const rec = useRecognizer(lang);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [blocked, setBlocked] = useState<string | null>(null);
  const [tries, setTries] = useState(0);
  const micOff = profile?.parental && !profile.parental.micAllowed;
  const selfAssess = micOff || rec.state === 'unavailable';
  const listening = rec.state === 'listening';
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (rec.state !== 'done') return;
    const heard = rec.alternatives.length ? rec.alternatives : [rec.transcript];
    const m = moderate(heard.join(' '), { age, langs: [lang] });
    if (!m.ok || m.distress) { setBlocked(m.distress ? DISTRESS_MESSAGE : BLOCK_MESSAGE[band]); setResult(null); return; }
    const rom = romanText(p, lang);
    const r = scoreAttempt({ heard, target, lang, alternatives: rom ? [rom] : [], durationMs: rec.durationMs });
    setResult(r);
    setTries((t) => t + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rec.state]);

  return (
    <View>
      <Instruction cat="speak" />
      <T v="h2">{tv('À toi de parler', 'À vous de parler')}</T>
      <T v="small" style={{ marginTop: 4, fontSize: 15 }}>{VOCAB_BY_ID[pid] && !VOCAB_BY_ID[pid].group ? tv(`Écoute ${companion.name}, puis répète le mot.`, `Écoutez ${companion.name}, puis répétez le mot.`) : tv(`Écoute ${companion.name}, puis répète la phrase.`, `Écoutez ${companion.name}, puis répétez la phrase.`)}</T>
      <Gap />
      <Card>
        {VOCAB_BY_ID[pid] ? <View style={{ alignItems: 'center', marginBottom: 10 }}><VocabImage pid={pid} size={96} /></View> : null}
        <PhraseView phrase={p} lang={lang} refLang={refLang} showRoman={profile?.settings.showRomanization} />
        <Gap h={12} />
        <Row style={{ justifyContent: 'center', gap: 24 }}>
          <PlayButton pid={p.id} text={target} lang={lang} companion={companion} label="Modèle" disabled={listening} onState={setPlaying} />
          <PlayButton pid={p.id} text={target} lang={lang} companion={companion} slow label="Lentement" disabled={listening} onState={setPlaying} />
        </Row>
      </Card>

      {selfAssess ? (
        <View>
          <Gap />
          <Card tone={C.goldSoft}>
            <T style={{ fontSize: 14 }}>
              {micOff ? 'Le micro est désactivé dans l’espace parent.'
                : 'La reconnaissance vocale n’est pas disponible ici (Expo Go, navigateur sans Web Speech, ou langue non installée).'}
              {' '}{tv('Répète la phrase à voix haute, puis dis honnêtement comment ça s’est passé.', 'Répétez la phrase à voix haute, puis évaluez-vous honnêtement.')}
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
          {/* Le micro attend la fin du modèle audio, et l'écoute coupe toute lecture en cours. */}
          <MicButton listening={listening} volume={rec.volume} disabled={playing && !listening}
            onPress={() => { setBlocked(null); if (listening) rec.stop(); else { stopSpeaking(); setResult(null); rec.start([target]); } }} />
          <T v="small" style={{ textAlign: 'center' }}>
            {playing && !listening ? tv('Écoute le modèle, puis touche le micro', 'Écoutez le modèle, puis touchez le micro')
              : rec.state === 'listening' ? (rec.transcript ? `« ${moderate(rec.transcript, { age, langs: [lang] }).masked} »` : tv('Je t’écoute…', 'Je vous écoute…'))
              : rec.state === 'denied' ? tv('Autorise le micro dans les réglages (demande à un adulte).', 'Autorisez le micro dans les réglages de l’appareil.')
              : rec.state === 'error' ? `Erreur : ${rec.error ?? 'inconnue'}` : tv('Touche le micro et parle', 'Touchez le micro et parlez')}
          </T>
          {blocked ? <Card tone={C.badSoft} style={{ marginTop: 12 }}><T>{blocked}</T></Card> : null}
          {result ? <><Gap /><ScoreView result={{ ...result, verdict: verdictOf(result.score, teacher) }} lang={lang} spoken simple={!pedagogy.detailedMetrics} /></> : null}
          {result ? <Feedback ok={verdictOf(result.score, teacher) !== 'retry'} onNext={() => onDone(result.score)} /> : null}
          <Gap />
          {result ? (
            <Btn title="Réessayer" variant="ghost" small onPress={() => { stopSpeaking(); setResult(null); rec.reset(); }} />
          ) : tries === 0 && rec.state !== 'listening' ? (
            <Btn title="Passer" variant="ghost" small onPress={() => onDone(0)} />
          ) : null}
        </View>
      )}
    </View>
  );
}

export function Write({ pid, lang, refLang, onDone }: P) {
  const { age, band, profile, teacher, pedagogy } = useStore();
  const tv = useTv();
  const p = PHRASE[pid];
  const [text, setText] = useState('');
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [blocked, setBlocked] = useState<string | null>(null);
  const rom = romanText(p, lang);
  const nonLatin = ['ar', 'zh', 'ja', 'th'].includes(lang);
  const check = () => {
    const m = moderate(text, { age, langs: [lang] });
    if (!m.ok || m.distress) { setBlocked(m.distress ? DISTRESS_MESSAGE : BLOCK_MESSAGE[band]); setText(m.masked); return; }
    setBlocked(null);
    setResult(scoreAttempt({ heard: text, target: p.t[lang]!, lang, alternatives: rom ? [rom] : [] }));
  };
  return (
    <View>
      <Instruction cat="write" />
      <T v="h2">{tv('Écris en', 'Écrivez en')} {LANG[lang].name.toLowerCase()}</T>
      <Gap h={8} />
      <Card tone={C.primarySoft}>
        {VOCAB_BY_ID[pid] ? <View style={{ alignItems: 'center', marginBottom: 8 }}><VocabImage pid={pid} size={88} /></View> : null}
        <Text style={{ fontSize: 18, color: C.ink, writingDirection: LANG[refLang].rtl ? 'rtl' : 'ltr', textAlign: VOCAB_BY_ID[pid] ? 'center' : undefined }}>{p.t[refLang]}</Text>
      </Card>
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
          <ScoreView result={{ ...result, verdict: verdictOf(result.score, teacher) }} lang={lang} simple={!pedagogy.detailedMetrics} />
          {profile?.settings.showRomanization && rom ? <T v="small" style={{ marginTop: 6 }}>Transcription : {rom}</T> : null}
          <Feedback ok={verdictOf(result.score, teacher) !== 'retry'} onNext={() => onDone(result.score)}
            answer={result.score < 100 ? <Text style={{ color: C.ink, fontSize: 17 }}>{scriptText(p, lang)}</Text> : undefined} />
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

/** Vocabulaire : voir l'illustration et choisir le mot écrit dans la langue étudiée. */
function Name({ pid, options, lang, refLang, onDone }: P & { options: string[] }) {
  const { profile } = useStore();
  const tv = useTv();
  const p = PHRASE[pid];
  const [chosen, setChosen] = useState<string | null>(null);
  const rtl = LANG[lang].rtl;
  return (
    <View>
      <Instruction cat="listen" />
      <T v="h2">{tv('Quel est ce mot ?', 'Quel est ce mot ?')}</T>
      <Gap />
      <View style={{ alignItems: 'center' }}><VocabImage pid={pid} size={130} /></View>
      <Gap />
      {options.map((o) => {
        const state = chosen ? (o === pid ? 'right' : o === chosen ? 'wrong' : 'idle') : 'idle';
        const rom = romanText(PHRASE[o], lang);
        return (
          <Pressable key={o} disabled={!!chosen} onPress={() => setChosen(o)} accessibilityRole="button"
            style={{ backgroundColor: state === 'right' ? C.okSoft : state === 'wrong' ? C.badSoft : C.card, borderRadius: R.m, padding: 14,
              marginBottom: 8, borderWidth: 2, borderColor: state === 'right' ? C.ok : state === 'wrong' ? C.bad : C.line }}>
            <Text style={{ fontSize: 19, color: C.ink, writingDirection: rtl ? 'rtl' : 'ltr', textAlign: rtl ? 'right' : 'left' }}>{scriptText(PHRASE[o], lang)}</Text>
            {profile?.settings.showRomanization && rom ? <Text style={[F.small, { fontStyle: 'italic' }]}>{rom}</Text> : null}
          </Pressable>
        );
      })}
      {chosen ? <Feedback ok={chosen === pid} onNext={() => onDone(chosen === pid ? 100 : 0)}
        answer={<Row gap={10}><PlayButton pid={pid} text={p.t[lang]!} lang={lang} size={40} /><Text style={{ color: C.ink, fontSize: 17, flex: 1 }}>{scriptText(p, lang)} · {p.t[refLang]}</Text></Row>} /> : null}
    </View>
  );
}

const tile = { backgroundColor: C.card, borderRadius: 12, borderWidth: 1.5, borderColor: C.line, paddingVertical: 9, paddingHorizontal: 13, borderBottomWidth: 3 } as const;
