import React, { useState } from 'react';
import { Pressable, Switch, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Avatar } from '../components/Avatar';
import { Btn, Card, Chip, Gap, Row, Screen, T } from '../components/ui';
import { BAND_LABEL, ageOf, bandOf, companionsFor } from '../data/companions';
import { useStore } from '../lib/store';
import { C, R } from '../theme';

export default function Parental() {
  const s = useStore();
  const { profile } = s;
  const [pin, setPin] = useState('');
  const [unlocked, setUnlocked] = useState(!profile?.parental || s.parentUnlocked);
  const [err, setErr] = useState('');
  const [newPin, setNewPin] = useState('');
  const [year, setYear] = useState(String(profile?.birthYear ?? ''));
  if (!profile) return null;

  if (!unlocked) {
    return (
      <Screen>
        <Back />
        <Gap h={30} />
        <Text style={{ fontSize: 48, textAlign: 'center' }}>🛡️</Text>
        <T v="title" style={{ textAlign: 'center' }}>Espace parent</T>
        <T style={{ textAlign: 'center', color: C.sub, marginTop: 6 }}>Saisissez le code parental à 4 chiffres.</T>
        <Gap h={20} />
        <TextInput value={pin} onChangeText={(t) => { setPin(t.replace(/\D/g, '')); setErr(''); }} secureTextEntry keyboardType="number-pad" maxLength={4}
          placeholder="••••" style={{ backgroundColor: C.card, borderRadius: R.m, borderWidth: 1.5, borderColor: C.line, padding: 14, fontSize: 28, textAlign: 'center', letterSpacing: 12 }} />
        {err ? <Text style={{ color: C.bad, marginTop: 8, textAlign: 'center' }}>{err}</Text> : null}
        <Gap />
        <Btn title="Déverrouiller" disabled={pin.length !== 4} onPress={() => (s.checkPin(pin) ? (setUnlocked(true), s.unlockParent()) : setErr('Code incorrect.'))} />
        {profile.demo ? <T v="small" style={{ textAlign: 'center', marginTop: 10 }}>Profil de démonstration : code 1234</T> : null}
      </Screen>
    );
  }

  const p = profile.parental;
  const age = ageOf(profile.birthYear);
  const band = bandOf(age);
  const setParental = (patch: Partial<NonNullable<typeof p>>) => p && s.updateProfile({ parental: { ...p, ...patch } });

  return (
    <Screen>
      <Back />
      <Gap h={10} />
      <T v="title">Espace parent</T>
      <T v="small" style={{ marginTop: 4 }}>{profile.name} · {age} ans · {BAND_LABEL[band]}</T>
      <Gap h={18} />

      {!p ? (
        <Card>
          <T v="h2">Créer un code parental</T>
          <T v="small" style={{ marginTop: 4 }}>Protège l’âge, la durée quotidienne, le micro et le compagnon.</T>
          <Gap h={10} />
          <TextInput value={newPin} onChangeText={(t) => setNewPin(t.replace(/\D/g, ''))} secureTextEntry keyboardType="number-pad" maxLength={4}
            placeholder="4 chiffres" style={{ backgroundColor: C.bg, borderRadius: R.m, padding: 12, fontSize: 18 }} />
          <Gap h={10} />
          <Btn title="Enregistrer le code" disabled={newPin.length !== 4} onPress={() => { s.setPin(newPin); setNewPin(''); }} />
        </Card>
      ) : (
        <>
          <T v="label">Durée maximale par jour</T>
          <Gap h={8} />
          <Row style={{ flexWrap: 'wrap', gap: 8 }}>
            {[0, 10, 15, 20, 30, 45, 60].map((m) => (
              <Chip key={m} label={m ? `${m} min` : 'Illimitée'} active={p.dailyMinutes === m} onPress={() => setParental({ dailyMinutes: m })} />
            ))}
          </Row>
          <Gap h={18} />
          <Card>
            <Row style={{ justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '700' }}>Micro et reconnaissance vocale</Text>
                <T v="small">Désactivé : les exercices oraux passent en auto-évaluation, aucun son n’est capté.</T>
              </View>
              <Switch value={p.micAllowed} onValueChange={(v) => setParental({ micAllowed: v })} trackColor={{ true: C.primary, false: C.line }} />
            </Row>
          </Card>
          <Gap h={18} />
          <T v="label">Compagnon (adapté à l’âge)</T>
          <Gap h={8} />
          {companionsFor(age).map((c) => (
            <Pressable key={c.id} onPress={() => s.updateProfile({ companionId: c.id })}>
              <Card style={{ marginBottom: 8, borderWidth: 2, borderColor: profile.companionId === c.id ? C.accent : 'transparent' }}>
                <Row><Avatar spec={c.avatar} size={46} /><View style={{ flex: 1 }}><Text style={{ fontWeight: '700' }}>{c.name}</Text><T v="small">{c.role}</T></View></Row>
              </Card>
            </Pressable>
          ))}
          <Gap h={10} />
          <T v="label">Année de naissance</T>
          <Row style={{ marginTop: 8 }}>
            <TextInput value={year} onChangeText={(t) => setYear(t.replace(/\D/g, ''))} keyboardType="number-pad" maxLength={4}
              style={{ flex: 1, backgroundColor: C.card, borderRadius: R.m, borderWidth: 1.5, borderColor: C.line, padding: 12, fontSize: 17 }} />
            <Btn small title="Mettre à jour" onPress={() => {
              const y = parseInt(year, 10); const now = new Date().getFullYear();
              if (y > now - 6 || y < now - 100) return;
              const comps = companionsFor(ageOf(y));
              s.updateProfile({ birthYear: y, companionId: comps.some((c) => c.id === profile.companionId) ? profile.companionId : comps[0].id });
            }} />
          </Row>
          <T v="small" style={{ marginTop: 6 }}>Le compagnon et les contenus s’ajustent automatiquement à la nouvelle tranche d’âge.</T>
          <Gap h={24} />
          <T v="label">Basculer vers un autre profil</T>
          <Row style={{ flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
            {s.db.profiles.filter((x) => x.id !== profile.id).map((x) => (
              <Chip key={x.id} label={x.name} onPress={() => { s.switchProfile(x.id); router.replace('/(tabs)'); }} />
            ))}
            <Chip label="+ Nouveau profil" onPress={() => router.push('/welcome')} />
          </Row>
          <Gap h={10} />
          <Btn title="Supprimer ce profil" variant="danger" onPress={() => { s.deleteProfile(profile.id); router.replace('/'); }} />
        </>
      )}
    </Screen>
  );
}

function Back() {
  return <Pressable onPress={() => router.back()} accessibilityRole="button"><Text style={{ fontSize: 20, color: C.primary }}>‹ Retour</Text></Pressable>;
}
