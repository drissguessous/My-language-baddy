import React, { useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../components/Text';
import { router } from 'expo-router';
import { Avatar } from '../components/Avatar';
import { Bar, Btn, Card, Gap, Row, Screen, T } from '../components/ui';
import { CompanionSays, PhraseView, PlayButton } from '../components/voice';
import { LEVELS, LEVEL_INFO, Level, PHRASE, UNITS, unitAvailable } from '../data/curriculum';
import { LANG } from '../data/languages';
import { useStore } from '../lib/store';
import { C, R } from '../theme';

interface Q { level: Level; pid: string; audio: boolean; options: string[] }

const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);

export default function Placement() {
  const store = useStore();
  const { profile, companion, band } = store;
  const lang = profile?.targetLang ?? 'en';
  const ref = profile?.refLang ?? 'fr';

  const questions: Q[] = useMemo(() => {
    const levels = band === 'kid' ? LEVELS.slice(0, 2) : LEVELS;
    return levels.flatMap((level) => {
      const units = UNITS.filter((u) => u.level === level && !u.pro && !u.kids && unitAvailable(u, lang));
      const ids = shuffle(units.flatMap((u) => u.phrases));
      if (ids.length < 4) return [];
      return [0, 1].map((k) => ({ level, pid: ids[k], audio: k === 1, options: shuffle([ids[k], ...ids.filter((x) => x !== ids[k]).slice(0, 3)]) }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const [i, setI] = useState(-1);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [chosen, setChosen] = useState<string | null>(null);
  const [result, setResult] = useState<Level | null>(null);

  if (!profile) return null;

  const finish = (all: boolean[]) => {
    let placed: Level = questions[0]?.level ?? 'A1';
    const byLevel = new Map<Level, boolean[]>();
    questions.forEach((q, k) => byLevel.set(q.level, [...(byLevel.get(q.level) ?? []), !!all[k]]));
    for (const [lvl, res] of byLevel) {
      placed = lvl;
      if (!res.every(Boolean)) break;
    }
    const score = Math.round((all.filter(Boolean).length / Math.max(1, all.length)) * 100);
    store.setPlacement(placed, score);
    store.record({ kind: 'placement', score });
    setResult(placed);
  };

  if (result) {
    return (
      <Screen>
        <Gap h={30} />
        <View style={{ alignItems: 'center' }}>
          <Avatar id={companion.id} size={130} mood="wow" />
          <Gap />
          <T v="small">Votre niveau en {LANG[lang].name.toLowerCase()}</T>
          <Text style={{ fontSize: 64, fontWeight: '900', color: C.primary }}>{result}</Text>
          <T v="h2">{LEVEL_INFO[result].label}</T>
          <T style={{ textAlign: 'center', marginTop: 6, color: C.sub }}>{LEVEL_INFO[result].can}</T>
        </View>
        <Gap h={24} />
        <CompanionSays companion={companion} text="Votre parcours démarre à ce niveau. Les unités précédentes restent ouvertes pour réviser." />
        <Gap h={20} />
        <Btn title="Voir mon parcours" onPress={() => router.replace('/(tabs)')} />
      </Screen>
    );
  }

  if (i === -1) {
    return (
      <Screen>
        <Gap h={30} />
        <View style={{ alignItems: 'center' }}><Avatar id={companion.id} size={120} /></View>
        <Gap />
        <T v="title" style={{ textAlign: 'center' }}>Test de positionnement</T>
        <T style={{ textAlign: 'center', color: C.sub, marginTop: 8 }}>
          {questions.length} questions de difficulté croissante, à l’écrit et à l’écoute. Répondez sans chercher : c’est votre niveau réel qui compte.
        </T>
        <Gap h={24} />
        <Btn title="Commencer" onPress={() => setI(0)} disabled={!questions.length} />
        <Gap h={10} />
        <Btn title="Plus tard" variant="ghost" onPress={() => router.replace('/(tabs)')} />
      </Screen>
    );
  }

  const q = questions[i];
  const p = PHRASE[q.pid];
  const next = () => {
    const all = [...answers, chosen === q.pid];
    setAnswers(all); setChosen(null);
    if (i + 1 < questions.length) setI(i + 1); else finish(all);
  };

  return (
    <Screen>
      <Row><View style={{ flex: 1 }}><Bar value={i / questions.length} color={C.gold} height={10} /></View><T v="small">{i + 1}/{questions.length}</T></Row>
      <Gap />
      <T v="label">Niveau {q.level}</T>
      <T v="h2" style={{ marginTop: 4 }}>{q.audio ? 'Écoutez et choisissez le sens' : 'Que signifie cette phrase ?'}</T>
      <Gap />
      <Card>
        {q.audio
          ? <Row style={{ justifyContent: 'center' }}><PlayButton pid={p.id} text={p.t[lang]!} lang={lang} companion={companion} size={64} label="Écouter" /></Row>
          : <PhraseView phrase={p} lang={lang} refLang={ref} showTranslation={false} big={false} />}
      </Card>
      <Gap />
      {q.options.map((o) => (
        <Pressable key={o} onPress={() => setChosen(o)} accessibilityRole="button" accessibilityState={{ selected: chosen === o }}
          style={{ backgroundColor: C.card, borderRadius: R.m, padding: 14, marginBottom: 8, borderWidth: 2, borderColor: chosen === o ? C.primary : C.line }}>
          <Text style={{ fontSize: 16, color: C.ink }}>{PHRASE[o].t[ref]}</Text>
        </Pressable>
      ))}
      <Pressable onPress={() => setChosen('?')} style={{ padding: 10, alignItems: 'center' }}><Text style={{ color: C.sub }}>Je ne sais pas</Text></Pressable>
      <Gap h={8} />
      <Btn title="Valider" disabled={!chosen} onPress={next} />
    </Screen>
  );
}
