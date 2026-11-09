import React from 'react';
import { Text, View } from 'react-native';
import { router } from 'expo-router';
import { Bar, Card, Gap, Row, Screen, T } from '../../components/ui';
import { LANG } from '../../data/languages';
import { useStore } from '../../lib/store';
import { dueCards } from '../../lib/srs';
import { recognitionAvailable } from '../../lib/useRecognizer';
import { C, F } from '../../theme';

const DAY = 86_400_000;

export default function Practice() {
  const { profile, progress, attempts } = useStore();
  if (!profile) return null;
  const due = dueCards(progress.cards).length;
  const voice = recognitionAvailable(profile.targetLang);
  const recent = attempts.filter((a) => a.ts > Date.now() - 7 * DAY);
  const avgOf = (kinds: string[]) => {
    const xs = recent.filter((a) => kinds.includes(a.kind)).map((a) => a.score);
    return xs.length ? Math.round(xs.reduce((s, x) => s + x, 0) / xs.length) : null;
  };
  const skills = [
    { label: 'Compréhension orale', v: avgOf(['listen']) },
    { label: 'Expression orale', v: avgOf(['speak', 'dialogue']) },
    { label: 'Expression écrite', v: avgOf(['write', 'order']) },
  ];
  const days = Array.from({ length: 7 }, (_, k) => {
    const start = new Date(); start.setHours(0, 0, 0, 0);
    const t0 = start.getTime() - (6 - k) * DAY;
    return { label: ['D', 'L', 'M', 'M', 'J', 'V', 'S'][new Date(t0).getDay()], n: attempts.filter((a) => a.ts >= t0 && a.ts < t0 + DAY).length };
  });
  const maxN = Math.max(1, ...days.map((d) => d.n));

  const Item = ({ icon, title, sub, to, badge }: { icon: string; title: string; sub: string; to: string; badge?: string }) => (
    <Card style={{ marginBottom: 10 }} onPress={() => router.push(to as never)}>
      <Row>
        <Text style={{ fontSize: 28 }}>{icon}</Text>
        <View style={{ flex: 1 }}><Text style={{ fontWeight: '700', fontSize: 16, color: C.ink }}>{title}</Text><T v="small">{sub}</T></View>
        {badge ? <View style={{ backgroundColor: C.accent, borderRadius: 12, paddingHorizontal: 9, paddingVertical: 3 }}><Text style={{ color: '#fff', fontWeight: '800' }}>{badge}</Text></View> : null}
      </Row>
    </Card>
  );

  return (
    <Screen>
      <T v="title">Pratiquer</T>
      <T v="small" style={{ marginTop: 4 }}>{LANG[profile.targetLang].name} · séances courtes et ciblées</T>
      <Gap h={18} />
      <Item icon="🔁" title="Révisions du jour" sub="Répétition espacée des phrases à consolider" to="/lesson/review" badge={due ? String(due) : undefined} />
      <Item icon="🎧" title="Écoute active" sub="Comprendre à l’oral, à vitesse normale ou ralentie" to="/lesson/listen" />
      <Item icon="🎙️" title="Atelier de prononciation" sub={voice ? 'Analyse de la voix : précision, complétude, débit' : 'Auto-évaluation (analyse vocale indisponible ici)'} to="/lesson/speak" />
      <Item icon="✍️" title="Écriture" sub="Traduire et écrire, transcription acceptée" to="/lesson/write" />
      <Item icon="📊" title="Test de positionnement" sub="Mesurer son niveau CECRL" to="/placement" />

      <Gap h={14} />
      <T v="h2">Mes compétences (7 jours)</T>
      <Gap h={10} />
      <Card>
        {skills.map((s) => (
          <View key={s.label} style={{ marginBottom: 12 }}>
            <Row style={{ justifyContent: 'space-between' }}><Text style={{ color: C.ink, fontWeight: '600' }}>{s.label}</Text><T v="small">{s.v === null ? '—' : `${s.v}/100`}</T></Row>
            <Gap h={6} />
            <Bar value={(s.v ?? 0) / 100} color={s.v === null ? C.line : s.v >= 85 ? C.ok : s.v >= 65 ? C.gold : C.accent} />
          </View>
        ))}
        <T v="small">Activité</T>
        <Gap h={8} />
        <Row style={{ alignItems: 'flex-end', justifyContent: 'space-between', height: 80 }}>
          {days.map((d, k) => (
            <View key={k} style={{ alignItems: 'center', flex: 1 }}>
              <View style={{ width: 18, height: Math.max(4, (d.n / maxN) * 60), backgroundColor: d.n ? C.primary : C.line, borderRadius: 6 }} />
              <Text style={[F.small, { marginTop: 4 }]}>{d.label}</Text>
            </View>
          ))}
        </Row>
      </Card>
    </Screen>
  );
}
