import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { router } from 'expo-router';
import { Avatar } from '../../components/Avatar';
import { Btn, Card, Gap, Row, Screen, T } from '../../components/ui';
import { companionsFor } from '../../data/companions';
import { UNITS } from '../../data/curriculum';
import { LANG } from '../../data/languages';
import { speakCoach } from '../../lib/speech';
import { useStore } from '../../lib/store';
import { C } from '../../theme';

export default function Talk() {
  const { profile, companion, age, band, unitState, updateProfile } = useStore();
  const [speaking, setSpeaking] = useState(false);
  const [choosing, setChoosing] = useState(false);
  if (!profile) return null;
  const scenes = UNITS.filter((u) => ['open', 'done'].includes(unitState(u)));
  const hear = () => { setSpeaking(true); speakCoach(companion.greeting, companion.voice.gender, companion.voice.pitch, () => setSpeaking(false)); };

  return (
    <Screen>
      <T v="title">Converser</T>
      <Gap h={14} />
      <Card>
        <View style={{ alignItems: 'center' }}>
          <Avatar spec={companion.avatar} size={150} speaking={speaking} />
          <Gap h={8} />
          <T v="h2">{companion.name}</T>
          <Text style={{ color: C.primary, fontWeight: '600' }}>{companion.role}</Text>
          <T v="small" style={{ textAlign: 'center', marginTop: 6, fontSize: 14 }}>{companion.bio}</T>
        </View>
        <Gap />
        <Row>
          <Btn style={{ flex: 1 }} small title="L’écouter" variant="soft" icon="🔊" onPress={hear} />
          {band === 'adult' || !profile.parental
            ? <Btn style={{ flex: 1 }} small title="Changer" variant="ghost" onPress={() => setChoosing(!choosing)} />
            : <Btn style={{ flex: 1 }} small title="Espace parent" variant="ghost" onPress={() => router.push('/parental')} />}
        </Row>
        {choosing ? (
          <View style={{ marginTop: 12, gap: 8 }}>
            {companionsFor(age).map((c) => (
              <Card key={c.id} tone={c.id === companion.id ? C.primarySoft : undefined} onPress={() => { updateProfile({ companionId: c.id }); setChoosing(false); }}>
                <Row><Avatar spec={c.avatar} size={48} /><View style={{ flex: 1 }}><Text style={{ fontWeight: '700' }}>{c.name}</Text><T v="small">{c.role}</T></View></Row>
              </Card>
            ))}
          </View>
        ) : null}
      </Card>

      <Gap h={20} />
      <T v="h2">Scènes à jouer en {LANG[profile.targetLang].name.toLowerCase()}</T>
      <T v="small" style={{ marginTop: 4 }}>{companion.name} joue l’autre personnage ; vous répondez à voix haute.</T>
      <Gap h={10} />
      {scenes.map((u) => (
        <Card key={u.id} style={{ marginBottom: 10 }} onPress={() => router.push(`/dialogue/${u.id}`)}>
          <Row>
            <Text style={{ fontSize: 24 }}>💬</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '700', fontSize: 16, color: C.ink }}>{u.title} <Text style={{ color: C.sub, fontWeight: '400' }}>· {u.level}</Text></Text>
              <T v="small">{u.scene}</T>
            </View>
          </Row>
        </Card>
      ))}
    </Screen>
  );
}
