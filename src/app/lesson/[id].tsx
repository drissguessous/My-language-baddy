import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../../components/Text';
import { router, useLocalSearchParams } from 'expo-router';
import { Avatar } from '../../components/Avatar';
import { CircleCheckBig, MapPin, MessagesSquare, X, Sprout, Leaf, Award } from 'lucide-react-native';
import { UNIT_ICON } from '../../components/unitIcons';
import { Bar, Btn, Card, Gap, Row, Screen, Stars, T } from '../../components/ui';
import { CompanionSays } from '../../components/voice';
import { StepView, useCoach } from '../../components/exercises';
import { UNIT, UNITS } from '../../data/curriculum';
import { LANG_TIPS, UNIT_NOTES } from '../../data/pedagogyContent';
import { Step, buildPractice, buildUnitLesson, buildVocabLesson } from '../../lib/lesson';
import { THEME_BY_ID, VOCAB_BY_ID } from '../../data/vocab';
import { stopSpeaking } from '../../lib/speech';
import { dueCards } from '../../lib/srs';
import { verdictOf } from '../../lib/teacher';
import { useStore } from '../../lib/store';
import { C, F, R } from '../../theme';

const PRACTICE_TITLES: Record<string, string> = {
  review: 'Révisions du jour', listen: 'Écoute active', speak: 'Atelier de prononciation', write: 'Dictée et écriture',
};

export default function Lesson() {
  const { id, words } = useLocalSearchParams<{ id: string; words?: string }>();
  const themeId = id?.startsWith('vocab-') ? id.slice(6) : null;
  const vocabTheme = themeId ? THEME_BY_ID[themeId] : undefined;
  const store = useStore();
  const { profile, companion, band, progress, unitState, pedagogy, teacher } = store;
  const coach = useCoach();
  const lang = profile?.targetLang ?? 'en';
  const ref = profile?.refLang ?? 'fr';
  const unit = UNIT[id ?? ''];
  const started = useRef(Date.now());

  const steps: Step[] = useMemo(() => {
    if (!profile) return [];
    const openIds = UNITS.filter((u) => ['open', 'done'].includes(unitState(u))).flatMap((u) => u.phrases);
    const pool = openIds.length ? openIds : UNITS[1].phrases;
    if (unit) return buildUnitLesson(unit.id, lang, band, pool);
    if (vocabTheme) return buildVocabLesson(vocabTheme.id, lang, band, words ? words.split(',') : undefined);
    if (id === 'vocab-review') {
      const ids = Object.keys(progress.cards).filter((k) => VOCAB_BY_ID[k]);
      const due = dueCards(Object.fromEntries(ids.map((k) => [k, progress.cards[k]])));
      return buildPractice('review', due.length ? due : ids, lang, pool);
    }
    if (id === 'review') {
      const due = dueCards(progress.cards);
      return buildPractice('review', due.length ? due : Object.keys(progress.cards).length ? Object.keys(progress.cards) : pool, lang, pool);
    }
    const done = UNITS.filter((u) => progress.units[u.id]).flatMap((u) => u.phrases);
    return buildPractice(id as 'listen' | 'speak' | 'write', done.length ? done : pool, lang, pool);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, words, profile?.id, lang]);

  const [i, setI] = useState(-1);   // -1 = écran d'accueil de la leçon
  const [scores, setScores] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState<null | { avg: number; stars: number; xp: number; sticker?: string; line: string }>(null);
  const [canDo, setCanDo] = useState<0 | 1 | 2 | null>(null);

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
        <CompanionSays companion={companion} text="C’est tout pour aujourd’hui ! Le temps fixé par tes parents est écoulé. À demain !" />
        <Gap h={20} />
        <Btn title="Retour" onPress={() => router.back()} />
      </Screen>
    );
  }
  if (!steps.length) {
    return (
      <Screen>
        <Gap h={40} />
        <CompanionSays companion={companion} text={id === 'vocab-review' ? 'Rien à réviser pour l’instant : apprenez d’abord quelques mots d’un thème.' : 'Rien à réviser pour l’instant : termine d’abord une leçon du parcours.'} />
        <Gap h={20} />
        <Btn title="Retour" onPress={() => router.back()} />
      </Screen>
    );
  }

  const title = unit ? unit.title : vocabTheme ? `Vocabulaire · ${vocabTheme.title}` : id === 'vocab-review' ? 'Révision du vocabulaire' : PRACTICE_TITLES[id ?? ''] ?? 'Entraînement';
  const note = unit ? UNIT_NOTES[unit.id] : undefined;

  if (i === -1) {
    const intro = coach.get('start');
    return (
      <Screen>
        <Row>
          <Pressable onPress={() => router.back()} accessibilityRole="button" accessibilityLabel="Quitter"><X size={26} color={C.sub} /></Pressable>
          <T v="small">{title}</T>
        </Row>
        <Gap h={30} />
        <View style={{ alignItems: 'center' }}><Avatar id={companion.id} size={130} ring /></View>
        <Gap />
        <CompanionSays companion={companion} text={intro} />
        {unit ? (
          <>
            <Gap />
            <Card tone={C.goldSoft}>
              <Row style={{ alignItems: 'flex-start' }} gap={8}><MapPin size={18} color={C.warn} style={{ marginTop: 2 }} /><T style={{ fontSize: 15, flex: 1 }}>{unit.scene}</T></Row>
              {note && pedagogy.canDo ? <T v="small" style={{ marginTop: 6, fontSize: 14 }}>Objectif : {note.canDo}</T> : null}
            </Card>
          </>
        ) : null}
        <Gap h={24} />
        <Btn title="C’est parti" variant="accent" onPress={() => { coach.say('start', intro); setI(0); }} />
      </Screen>
    );
  }

  const step = steps[i];

  const done = (score: number | null) => {
    const next = [...scores, score];
    setScores(next);
    if (step.kind !== 'discover' && step.kind !== 'grammar' && score !== null) {
      store.record({ kind: step.kind === 'order' ? 'order' : step.kind === 'speak' ? 'speak' : step.kind === 'write' ? 'write' : 'listen', phraseId: step.pid, score });
    }
    if (i + 1 < steps.length) { setI(i + 1); return; }
    const graded = steps.map((s, k) => (s.kind === 'discover' || s.kind === 'grammar' ? null : next[k])).filter((v): v is number => v !== null && v !== undefined);
    const avg = Math.round(graded.reduce((a, b) => a + b, 0) / Math.max(1, graded.length));
    const good = verdictOf(avg, teacher) !== 'retry';
    let res: { avg: number; stars: number; xp: number; sticker?: string } = { avg, stars: avg >= 90 ? 3 : avg >= 75 ? 2 : 1, xp: graded.length * 5 };
    if (unit) { const r = store.completeUnit(unit.id, avg); res = { avg, ...r }; }
    const l = coach.say(good ? 'end_good' : 'end_retry');
    setFinished({ ...res, line: l });
  };

  if (finished) {
    const good = verdictOf(finished.avg, teacher) !== 'retry';
    return (
      <Screen>
        <Gap h={30} />
        <View style={{ alignItems: 'center' }}>
          {finished.sticker && unit ? (() => { const I = UNIT_ICON[unit.id] ?? Award; return (
            <View style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: finished.sticker, alignItems: 'center', justifyContent: 'center', borderWidth: 6, borderColor: '#fff' }}>
              <I size={54} color="#fff" strokeWidth={2} />
            </View>); })() : <Avatar id={companion.id} size={140} ring />}
          <Gap />
          <T v="title" style={{ textAlign: 'center' }}>{vocabTheme ? (good ? 'Mots acquis !' : 'Séance terminée') : good ? 'Leçon réussie !' : 'Leçon terminée'}</T>
          <Gap h={8} />
          <Stars n={finished.stars} size={34} />
          <Gap h={8} />
          {pedagogy.reward === 'badges'
            ? <T style={{ color: C.sub }}>{finished.sticker ? `Nouveau badge : ${unit?.title ?? ''}` : ''}</T>
            : <T style={{ color: C.sub }}>Score moyen {finished.avg}/100 · +{finished.xp} XP</T>}
        </View>
        <Gap h={20} />
        <CompanionSays companion={companion} text={finished.line} />
        {unit && note && pedagogy.canDo ? (
          <>
            <Gap />
            <Card>
              <T v="label">Auto-évaluation</T>
              <Text style={{ fontSize: 16, color: C.ink, marginTop: 6, fontWeight: '600' }}>{note.canDo}</Text>
              <Row style={{ marginTop: 10, gap: 8 }}>
                {(['Pas encore', 'Avec aide', 'En autonomie'] as const).map((lbl, k) => (
                  <Pressable key={lbl} onPress={() => { setCanDo(k as 0 | 1 | 2); store.setCanDo(unit.id, k as 0 | 1 | 2); }}
                    style={{ flex: 1, padding: 10, borderRadius: R.s, borderWidth: 2, alignItems: 'center',
                      borderColor: canDo === k ? C.primary : C.line, backgroundColor: canDo === k ? C.primarySoft : C.card }}>
                    {k === 0 ? <Sprout size={22} color={canDo === k ? C.primary : C.sub} /> : k === 1 ? <Leaf size={22} color={canDo === k ? C.primary : C.sub} /> : <CircleCheckBig size={22} color={canDo === k ? C.primary : C.sub} />}
                    <Text style={[F.small, { textAlign: 'center' }]}>{lbl}</Text>
                  </Pressable>
                ))}
              </Row>
            </Card>
          </>
        ) : null}
        {band !== 'kid' && LANG_TIPS[lang] ? (
          <><Gap /><Card tone={C.primarySoft}><T v="label">Le saviez-vous ?</T><T style={{ fontSize: 14, marginTop: 4 }}>{LANG_TIPS[lang][finished.avg % LANG_TIPS[lang].length]}</T></Card></>
        ) : null}
        <Gap h={24} />
        {unit ? <Btn title="Jouer le dialogue avec mon compagnon" icon={MessagesSquare} onPress={() => router.replace(`/dialogue/${unit.id}`)} /> : null}
        <Gap h={10} />
        {vocabTheme || id === 'vocab-review'
          ? <Btn title="Retour au vocabulaire" variant="ghost" onPress={() => router.back()} />
          : <Btn title="Retour au parcours" variant="ghost" onPress={() => router.replace('/(tabs)')} />}
      </Screen>
    );
  }

  return (
    <Screen>
      <Row>
        <Pressable onPress={() => router.back()} accessibilityRole="button" accessibilityLabel="Quitter la leçon"><X size={26} color={C.sub} /></Pressable>
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

