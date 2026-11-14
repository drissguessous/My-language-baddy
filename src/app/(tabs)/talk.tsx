import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { router } from 'expo-router';
import { Check, ShieldCheck, Users, Volume2 } from 'lucide-react-native';
import { Avatar } from '../../components/Avatar';
import { Text } from '../../components/Text';
import { Btn, Card, Gap, ListItem, Row, Screen, Section, T } from '../../components/ui';
import { UNIT_ICON } from '../../components/unitIcons';
import { companionsFor } from '../../data/companions';
import { UNITS } from '../../data/curriculum';
import { LANG } from '../../data/languages';
import { speakCoach } from '../../lib/speech';
import { useStore } from '../../lib/store';
import { C, F, R } from '../../theme';

export default function Talk() {
  const { profile, companion, age, band, unitState, updateProfile } = useStore();
  const [speaking, setSpeaking] = useState(false);
  const [choosing, setChoosing] = useState(false);
  if (!profile) return null;
  const scenes = UNITS.filter((u) => ['open', 'done'].includes(unitState(u)));
  const hear = () => { setSpeaking(true); speakCoach(companion.greeting, companion.voice.gender, companion.voice.pitch, () => setSpeaking(false)); };
  const canChange = band === 'adult' || !profile.parental;

  return (
    <Screen>
      <T v="title">Converser</T>
      <Gap h={16} />
      <View style={{ backgroundColor: C.primarySoft, borderRadius: R.xl, padding: 20, alignItems: 'center' }}>
        <Avatar id={companion.id} size={140} speaking={speaking} />
        <Gap h={10} />
        <T v="title" style={{ fontSize: 22 }}>{companion.name}</T>
        <Text style={{ color: C.primaryDark, fontWeight: '600', marginTop: 2 }}>{companion.role}</Text>
        <T v="small" style={{ textAlign: 'center', marginTop: 8, fontSize: 14, color: C.sub }}>{companion.bio}</T>
        <Gap />
        <Row>
          <Btn style={{ flex: 1 }} small title="L’écouter" variant="primary" icon={Volume2} onPress={hear} />
          {canChange
            ? <Btn style={{ flex: 1 }} small title="Changer" variant="ghost" icon={Users} onPress={() => setChoosing(!choosing)} />
            : <Btn style={{ flex: 1 }} small title="Espace parent" variant="ghost" icon={ShieldCheck} onPress={() => router.push('/parental')} />}
        </Row>
      </View>
      {choosing ? (
        <Card style={{ marginTop: 12, paddingVertical: 4 }}>
          {companionsFor(age).map((c, k, arr) => (
            <Pressable key={c.id} onPress={() => { updateProfile({ companionId: c.id }); setChoosing(false); }}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, borderBottomWidth: k < arr.length - 1 ? 1 : 0, borderColor: '#F1EEE8' }}>
              <Avatar id={c.id} size={48} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '700' }}>{c.name}</Text>
                <Text style={F.small}>{c.role}</Text>
              </View>
              {c.id === companion.id ? <Check size={20} color={C.primary} strokeWidth={2.6} /> : null}
            </Pressable>
          ))}
        </Card>
      ) : null}

      <Section title={`Scènes en ${LANG[profile.targetLang].name.toLowerCase()}`} />
      <T v="small" style={{ marginTop: -6, marginBottom: 10 }}>
        {companion.name} joue l’autre personnage ; {band === 'adult' ? 'vous répondez' : 'tu réponds'} à voix haute.
      </T>
      <Card style={{ paddingVertical: 2 }}>
        {scenes.map((u, k) => (
          <ListItem key={u.id} icon={UNIT_ICON[u.id]} title={u.title} subtitle={`${u.level} · ${u.scene}`}
            onPress={() => router.push(`/dialogue/${u.id}`)} last={k === scenes.length - 1} />
        ))}
      </Card>
    </Screen>
  );
}
