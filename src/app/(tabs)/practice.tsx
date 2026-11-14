import React from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import { ChartNoAxesColumn, Headphones, Mic, PenLine, Repeat } from 'lucide-react-native';
import { Text } from '../../components/Text';
import { Bar, Card, Gap, ListItem, Row, Screen, Section, T } from '../../components/ui';
import { LANG } from '../../data/languages';
import { useStore } from '../../lib/store';
import { dueCards } from '../../lib/srs';
import { recognitionAvailable } from '../../lib/useRecognizer';
import { C, F } from '../../theme';

const DAY = 86_400_000;

export default function Practice() {
  const { profile, progress, attempts, band } = useStore();
  if (!profile) return null;
  const due = dueCards(progress.cards).length;
  const voice = recognitionAvailable(profile.targetLang);
  const recent = attempts.filter((a) => a.ts > Date.now() - 7 * DAY);
  const avgOf = (kinds: string[]) => {
    const xs = recent.filter((a) => kinds.includes(a.kind)).map((a) => a.score);
    return xs.length ? Math.round(xs.reduce((s, x) => s + x, 0) / xs.length) : null;
  };
  const skills = [
    { label: 'Compréhension orale', v: avgOf(['listen']), color: C.primary },
    { label: 'Expression orale', v: avgOf(['speak', 'dialogue']), color: C.accent },
    { label: 'Expression écrite', v: avgOf(['write', 'order']), color: C.violet },
  ];
  const days = Array.from({ length: 7 }, (_, k) => {
    const start = new Date(); start.setHours(0, 0, 0, 0);
    const t0 = start.getTime() - (6 - k) * DAY;
    return { label: ['D', 'L', 'M', 'M', 'J', 'V', 'S'][new Date(t0).getDay()], n: attempts.filter((a) => a.ts >= t0 && a.ts < t0 + DAY).length, today: k === 6 };
  });
  const maxN = Math.max(1, ...days.map((d) => d.n));
  const tu = band !== 'adult';

  return (
    <Screen>
      <T v="title">Pratiquer</T>
      <T v="small" style={{ marginTop: 4 }}>{LANG[profile.targetLang].name} · séances courtes et ciblées</T>
      <Gap h={18} />
      <Card style={{ paddingVertical: 2 }}>
        <ListItem icon={Repeat} color={C.accent} title="Révisions du jour" subtitle={due ? `${due} phrase${due > 1 ? 's' : ''} à consolider` : 'À jour : rien à revoir pour l’instant'}
          onPress={() => router.push('/lesson/review')} />
        <ListItem icon={Headphones} title="Écoute active" subtitle="Comprendre à l’oral, à vitesse normale ou ralentie" onPress={() => router.push('/lesson/listen')} />
        <ListItem icon={Mic} color={C.violet} title="Prononciation" subtitle={voice ? 'Analyse de la voix : précision, complétude, débit' : 'Auto-évaluation (analyse vocale indisponible ici)'}
          onPress={() => router.push('/lesson/speak')} />
        <ListItem icon={PenLine} color={C.gold} title="Écriture" subtitle="Traduire et écrire ; transcription latine acceptée" onPress={() => router.push('/lesson/write')} />
        <ListItem icon={ChartNoAxesColumn} color={C.ok} title="Test de positionnement" subtitle="Mesurer son niveau CECRL" onPress={() => router.push('/placement')} last />
      </Card>

      <Section title={tu ? 'Tes compétences · 7 jours' : 'Vos compétences · 7 jours'} />
      <Card>
        {skills.map((s) => (
          <View key={s.label} style={{ marginBottom: 14 }}>
            <Row style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: C.ink, fontWeight: '600' }}>{s.label}</Text>
              <Text style={{ fontWeight: '800', color: s.v === null ? C.muted : C.ink }}>{s.v === null ? '—' : `${s.v} %`}</Text>
            </Row>
            <Gap h={8} />
            <Bar value={(s.v ?? 0) / 100} color={s.color} />
          </View>
        ))}
        <View style={{ height: 1, backgroundColor: C.line, marginVertical: 6 }} />
        <Text style={[F.label, { marginTop: 8 }]}>Activité</Text>
        <Gap h={10} />
        <Row style={{ alignItems: 'flex-end', justifyContent: 'space-between', height: 92 }}>
          {days.map((d, k) => (
            <View key={k} style={{ alignItems: 'center', flex: 1 }}>
              <Text style={[F.small, { fontSize: 11, marginBottom: 4 }]}>{d.n || ''}</Text>
              <View style={{ width: 22, height: Math.max(4, (d.n / maxN) * 56), backgroundColor: d.today ? C.accent : d.n ? C.primary : '#ECE9E2', borderRadius: 7 }} />
              <Text style={[F.small, { marginTop: 6, fontWeight: d.today ? '800' : '500' }]}>{d.label}</Text>
            </View>
          ))}
        </Row>
      </Card>
    </Screen>
  );
}
