import React, { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, ScrollViewInstance, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from '../../components/Avatar';
import { Btn, Gap, Row, T } from '../../components/ui';
import { MicButton, PlayButton } from '../../components/voice';
import { PHRASE, UNIT } from '../../data/curriculum';
import { LANG } from '../../data/languages';
import { BLOCK_MESSAGE, DISTRESS_MESSAGE, moderate } from '../../lib/safety/filter';
import { scoreAttempt } from '../../lib/scoring';
import { speak, speakCoach, stopSpeaking } from '../../lib/speech';
import { romanText, scriptText } from '../../lib/text';
import { useRecognizer } from '../../lib/useRecognizer';
import { line } from '../../lib/teacher';
import { useStore } from '../../lib/store';
import { C, F, R } from '../../theme';

interface Msg { who: 'c' | 'l'; pid: string; score?: number }

export default function Dialogue() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const store = useStore();
  const { profile, companion, age, band, teacher } = store;
  const unit = UNIT[id ?? ''];
  const lang = profile?.targetLang ?? 'en';
  const ref = profile?.refLang ?? 'fr';
  const lines = unit ? unit.phrases.filter((p) => PHRASE[p]?.t[lang]) : [];
  const [pos, setPos] = useState(-1);          // -1 = introduction
  const [log, setLog] = useState<Msg[]>([]);
  const [speaking, setSpeaking] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const rec = useRecognizer(lang);
  const scroll = useRef<ScrollViewInstance>(null);
  const selfAssess = (profile?.parental && !profile.parental.micAllowed) || rec.state === 'unavailable';

  const current = pos >= 0 && pos < lines.length ? PHRASE[lines[pos]] : null;
  const ended = pos >= lines.length;

  // Le compagnon dit ses répliques automatiquement.
  useEffect(() => {
    if (!current || current.role !== 'c') return;
    setLog((l) => [...l, { who: 'c', pid: current.id }]);
    setSpeaking(true);
    speak(current.t[lang]!, lang, {
      pid: current.id, gender: companion.voice.gender, pitch: companion.voice.pitch,
      onDone: () => { setSpeaking(false); setTimeout(() => setPos((p) => p + 1), 500); },
    }).then((ok) => { if (!ok) setTimeout(() => { setSpeaking(false); setPos((p) => p + 1); }, 1800); });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos]);

  useEffect(() => { setTimeout(() => scroll.current?.scrollToEnd({ animated: true }), 80); }, [log, pos, feedback]);
  useEffect(() => () => { stopSpeaking(); }, []);

  // Analyse de la réplique de l'apprenant.
  useEffect(() => {
    if (rec.state !== 'done' || !current) return;
    const heard = rec.alternatives.length ? rec.alternatives : [rec.transcript];
    const m = moderate(heard.join(' '), { age, langs: [lang] });
    if (!m.ok || m.distress) { setFeedback(m.distress ? DISTRESS_MESSAGE : BLOCK_MESSAGE[band]); rec.reset(); return; }
    const rom = romanText(current, lang);
    const r = scoreAttempt({ heard, target: current.t[lang]!, lang, alternatives: rom && lang !== 'ber' ? [rom] : [], durationMs: rec.durationMs });
    store.record({ kind: 'dialogue', phraseId: current.id, score: r.score });
    if (r.score >= 55) accept(r.score);
    else { setFeedback(`${line(band, teacher, 'nudge')} (score ${r.score}/100 · entendu : « ${r.heard} »)`); rec.reset(); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rec.state]);

  const accept = (score: number) => {
    if (!current) return;
    setLog((l) => [...l, { who: 'l', pid: current.id, score }]);
    setFeedback(null); setReveal(false); rec.reset();
    setPos((p) => p + 1);
  };

  if (!profile || !unit) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
      <View style={{ paddingHorizontal: 18, paddingTop: 8, maxWidth: 720, width: '100%', alignSelf: 'center' }}>
        <Row>
          <Pressable onPress={() => router.back()} accessibilityRole="button" accessibilityLabel="Quitter"><Text style={{ fontSize: 26, color: C.sub }}>✕</Text></Pressable>
          <View style={{ flex: 1 }}><T v="h2">{unit.title}</T><T v="small">{companion.name} joue {unit.counterpart}</T></View>
          <Avatar spec={companion.avatar} size={54} speaking={speaking} />
        </Row>
      </View>
      <ScrollView ref={scroll} contentContainerStyle={{ padding: 18, maxWidth: 720, width: '100%', alignSelf: 'center' }}>
        <View style={{ backgroundColor: C.goldSoft, borderRadius: R.m, padding: 12 }}>
          <T style={{ fontSize: 14 }}>🎬 {unit.scene}</T>
        </View>
        <Gap />
        {log.map((m, k) => <Bubble key={k} msg={m} />)}
        {feedback ? <View style={{ backgroundColor: C.badSoft, borderRadius: R.m, padding: 12, marginTop: 6 }}><T style={{ fontSize: 14 }}>{feedback}</T></View> : null}
        <Gap h={160} />
      </ScrollView>

      <View style={{ backgroundColor: C.card, borderTopWidth: 1, borderColor: C.line, padding: 16, maxWidth: 720, width: '100%', alignSelf: 'center' }}>
        {pos === -1 ? (
          <>
            <T style={{ fontSize: 15 }}>Vous allez jouer une scène complète. {companion.name} parle en {LANG[lang].name.toLowerCase()} ; à votre tour, dites votre réplique au micro.</T>
            <Gap />
            <Btn title="Commencer la scène" onPress={() => {
              if (profile.settings.coachVoice) speakCoach('C’est parti !', companion.voice.gender, companion.voice.pitch, () => setPos(0));
              else setPos(0);
            }} />
          </>
        ) : ended ? (
          <>
            <T v="h2">Scène terminée 🎉</T>
            <T v="small" style={{ marginTop: 4 }}>Score moyen à l’oral : {Math.round(avg(log.filter((m) => m.who === 'l').map((m) => m.score ?? 0)))}/100</T>
            <Gap />
            <Row>
              <Btn style={{ flex: 1 }} title="Rejouer" variant="ghost" onPress={() => { setLog([]); setPos(-1); }} />
              <Btn style={{ flex: 1 }} title="Terminer" onPress={() => router.back()} />
            </Row>
          </>
        ) : current?.role === 'l' ? (
          <>
            <T v="label">Votre réplique</T>
            <Text style={{ fontSize: 16, color: C.ink, marginTop: 4 }}>{current.t[ref]}</Text>
            {reveal ? (
              <View style={{ marginTop: 6 }}>
                <Text style={{ fontSize: 19, fontWeight: '700', color: C.primary, writingDirection: LANG[lang].rtl ? 'rtl' : 'ltr' }}>{scriptText(current, lang)}</Text>
                {romanText(current, lang) && profile.settings.showRomanization ? <Text style={[F.small, { fontStyle: 'italic' }]}>{romanText(current, lang)}</Text> : null}
              </View>
            ) : null}
            <Row style={{ justifyContent: 'space-between', marginTop: 4 }}>
              <Text onPress={() => setReveal(!reveal)} style={{ color: C.primary, fontWeight: '700' }} accessibilityRole="button">{reveal ? 'Masquer' : 'Voir la phrase'}</Text>
              <PlayButton pid={current.id} text={current.t[lang]!} lang={lang} companion={companion} size={40} />
            </Row>
            {selfAssess ? (
              <Row style={{ marginTop: 12 }}>
                <Btn style={{ flex: 1 }} title="Je l’ai dite" variant="ok" onPress={() => accept(80)} />
              </Row>
            ) : (
              <>
                <MicButton listening={rec.state === 'listening'} volume={rec.volume}
                  onPress={() => { setFeedback(null); if (rec.state === 'listening') rec.stop(); else rec.start([current.t[lang]!]); }} />
                <Row style={{ justifyContent: 'space-between' }}>
                  <T v="small">{rec.state === 'listening' ? 'Je vous écoute…' : rec.state === 'denied' ? 'Micro refusé' : 'Touchez le micro'}</T>
                  <Text onPress={() => accept(0)} style={{ color: C.sub }} accessibilityRole="button">Passer ›</Text>
                </Row>
              </>
            )}
          </>
        ) : (
          <Row style={{ justifyContent: 'center', paddingVertical: 20 }}><T v="small">{companion.name} parle…</T></Row>
        )}
      </View>
    </SafeAreaView>
  );

  function Bubble({ msg }: { msg: Msg }) {
    const p = PHRASE[msg.pid];
    const mine = msg.who === 'l';
    const rtl = LANG[lang].rtl;
    return (
      <View style={{ alignSelf: mine ? 'flex-end' : 'flex-start', maxWidth: '86%', marginBottom: 10 }}>
        <View style={{ backgroundColor: mine ? C.primary : C.card, borderRadius: R.m, padding: 12,
          borderBottomRightRadius: mine ? 4 : R.m, borderBottomLeftRadius: mine ? R.m : 4, borderWidth: mine ? 0 : 1, borderColor: C.line }}>
          <Text style={{ fontSize: 17, color: mine ? '#fff' : C.ink, writingDirection: rtl ? 'rtl' : 'ltr' }}>{scriptText(p, lang)}</Text>
          {profile?.settings.showRomanization && romanText(p, lang) ? (
            <Text style={{ fontSize: 13, fontStyle: 'italic', color: mine ? '#E6F3F4' : C.primary, marginTop: 2 }}>{romanText(p, lang)}</Text>
          ) : null}
          <Text style={{ fontSize: 13, color: mine ? '#D5EBEC' : C.sub, marginTop: 4 }}>{p.t[ref]}</Text>
        </View>
        {mine && msg.score !== undefined ? <Text style={[F.small, { alignSelf: 'flex-end', marginTop: 2 }]}>Prononciation {msg.score}/100</Text> : null}
      </View>
    );
  }
}

const avg = (a: number[]) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0);
