import React, { useEffect, useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { CircleCheckBig, CircleX, RotateCcw, Trophy, X } from 'lucide-react-native';
import { Avatar } from '../../components/Avatar';
import { Text } from '../../components/Text';
import { StepView, useCoach, useTv } from '../../components/exercises';
import { Bar, Btn, Card, Gap, Row, Screen, T } from '../../components/ui';
import { CompanionSays } from '../../components/voice';
import { PHRASE } from '../../data/curriculum';
import { QUIZ_PARAMS } from '../../data/goals';
import { Step, buildQuiz } from '../../lib/lesson';
import { stopSpeaking } from '../../lib/speech';
import { useStore } from '../../lib/store';
import { verdictOf } from '../../lib/teacher';
import { scriptText } from '../../lib/text';
import { useStudyTime } from '../../lib/useStudyTime';
import { useQuizSource } from '../../lib/quiz';
import { C, F, R } from '../../theme';

export default function Quiz() {
  const { id = 'mix' } = useLocalSearchParams<{ id: string }>();
  const store = useStore();
  const { profile, companion, band, teacher, progress } = store;
  const coach = useCoach();
  const tv = useTv();
  useStudyTime();
  const src = useQuizSource(id);
  const lang = profile?.targetLang ?? 'en';
  const ref = profile?.refLang ?? 'fr';
  const [round, setRound] = useState(0);
  const steps: Step[] = useMemo(() => (src ? buildQuiz(src.ids, lang, band) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id, lang, band, round]);
  const [i, setI] = useState(-1);
  const [scores, setScores] = useState<number[]>([]);
  const [result, setResult] = useState<number | null>(null);
  useEffect(() => () => { stopSpeaking(); }, []);

  if (!profile || !src) return null;
  const prev = progress.quizzes?.[id];
  const quit = <Pressable onPress={() => router.back()} accessibilityRole="button" accessibilityLabel="Quitter le quiz"><X size={26} color={C.sub} /></Pressable>;

  if (steps.length < 4) {
    return (
      <Screen>
        <Row>{quit}<T v="small">{src.title}</T></Row>
        <Gap h={40} />
        <CompanionSays companion={companion} text={tv('Pas encore assez de contenu pour ce quiz : fais d’abord une leçon.', 'Pas encore assez de contenu pour ce quiz : faites d’abord une leçon.')} />
        <Gap h={20} />
        <Btn title="Retour" onPress={() => router.back()} />
      </Screen>
    );
  }

  if (i === -1) {
    return (
      <Screen>
        <Row>{quit}<T v="small">{src.title}</T></Row>
        <Gap h={30} />
        <View style={{ alignItems: 'center' }}><Avatar id={companion.id} size={120} ring /></View>
        <Gap />
        <T v="title" style={{ textAlign: 'center' }}>{src.title}</T>
        <T v="small" style={{ textAlign: 'center', marginTop: 4 }}>
          {steps.length} questions · réussite à {QUIZ_PARAMS.passScore} %{prev ? ` · meilleur score ${prev.best} %` : ''}
        </T>
        <Gap />
        <CompanionSays companion={companion} text={tv('Pas d’indice cette fois : montre ce que tu sais !', 'Sans phase de découverte : mesurez ce que vous avez retenu.')} />
        <Gap h={24} />
        <Btn title="Commencer le quiz" variant="accent" onPress={() => setI(0)} />
      </Screen>
    );
  }

  const done = (score: number | null) => {
    const s = score ?? 0;
    const step = steps[i];
    if ('pid' in step) store.record({ kind: step.kind === 'order' ? 'order' : step.kind === 'speak' ? 'speak' : step.kind === 'write' ? 'write' : 'listen', phraseId: step.pid, score: s });
    const next = [...scores, s];
    setScores(next);
    if (i + 1 < steps.length) { setI(i + 1); return; }
    const avg = Math.round(next.reduce((a, b) => a + b, 0) / next.length);
    store.saveQuiz(id, avg);
    coach.say(avg >= QUIZ_PARAMS.passScore ? 'end_good' : 'end_retry');
    setResult(avg);
  };

  if (result !== null) {
    const passed = result >= QUIZ_PARAMS.passScore;
    const right = scores.filter((s) => verdictOf(s, teacher) !== 'retry').length;
    return (
      <Screen>
        <Gap h={24} />
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: passed ? C.okSoft : C.goldSoft, alignItems: 'center', justifyContent: 'center' }}>
            <Trophy size={52} color={passed ? C.ok : C.warn} />
          </View>
          <Gap />
          <Text style={{ fontSize: 44, fontWeight: '800', color: C.ink }}>{result} %</Text>
          <T v="title" style={{ textAlign: 'center' }}>{passed ? 'Quiz réussi !' : 'Encore un effort'}</T>
          <T v="small" style={{ marginTop: 4 }}>{right}/{scores.length} bonnes réponses{prev ? ` · meilleur score ${Math.max(prev.best, result)} %` : ''}</T>
        </View>
        <Gap h={20} />
        <Card style={{ paddingVertical: 4 }}>
          {steps.map((st, k) => {
            if (!('pid' in st)) return null;
            const p = PHRASE[st.pid];
            const ok = verdictOf(scores[k], teacher) !== 'retry';
            return (
              <Row key={k} style={[{ paddingVertical: 10, alignItems: 'flex-start' }, k < steps.length - 1 && { borderBottomWidth: 1, borderColor: '#F1EEE8' }]}>
                {ok ? <CircleCheckBig size={20} color={C.ok} /> : <CircleX size={20} color={C.bad} />}
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: '700', color: C.ink }}>{scriptText(p, lang)}</Text>
                  {ref !== lang && p.t[ref] ? <Text style={[F.small, { marginTop: 2 }]}>{p.t[ref]}</Text> : null}
                </View>
                <Text style={[F.small, { fontWeight: '700' }]}>{scores[k]}</Text>
              </Row>
            );
          })}
        </Card>
        <Gap h={20} />
        <Btn title="Refaire le quiz" icon={RotateCcw} variant="accent" onPress={() => { setScores([]); setResult(null); setI(0); setRound((r) => r + 1); }} />
        <Gap h={10} />
        <Btn title="Retour" variant="ghost" onPress={() => router.back()} />
      </Screen>
    );
  }

  return (
    <Screen>
      <Row>
        {quit}
        <View style={{ flex: 1 }}><Bar value={i / steps.length} color={C.violet} height={10} /></View>
        <T v="small">{i + 1}/{steps.length}</T>
      </Row>
      <Gap h={6} />
      <T v="small">{src.title}</T>
      <Gap h={14} />
      <View style={{ borderRadius: R.m }}>
        <StepView key={`${round}-${i}`} step={steps[i]} lang={lang} refLang={ref} onDone={done} />
      </View>
    </Screen>
  );
}
