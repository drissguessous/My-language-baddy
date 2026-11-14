import React, { useCallback, useEffect, useState } from 'react';
import { Linking, Platform, Pressable, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { router } from 'expo-router';
import { Btn, Card, Chip, Gap, Row, Screen, T } from '../components/ui';
import { PHRASE, UNITS } from '../data/curriculum';
import { LANG } from '../data/languages';
import { bundledVoices, phraseClip, playClip } from '../lib/audio';
import { OS_LABEL, VOICE_GUIDE, detectOs } from '../lib/platform';
import { deviceVoices } from '../lib/speech';
import { useStore } from '../lib/store';
import { C, F, R } from '../theme';

export default function Voices() {
  const { profile, updateProfile, companion } = useStore();
  const [list, setList] = useState<Speech.Voice[]>([]);
  const os = detectOs();
  const guide = VOICE_GUIDE[os];
  const lang = profile?.targetLang ?? 'en';
  const sample = PHRASE[UNITS[1].phrases[0]];

  const refresh = useCallback(async () => { setList(await deviceVoices(lang)); }, [lang]);
  useEffect(() => { refresh(); }, [refresh]);
  if (!profile) return null;

  const set = (patch: Partial<typeof profile.settings>) => updateProfile({ settings: { ...profile.settings, ...patch } });
  const bundled = bundledVoices(lang);
  const mode = profile.settings.voice;
  const chosenDevice = profile.settings.deviceVoices[lang];

  const openAndroidSettings = async () => {
    try {
      const IL = await import('expo-intent-launcher');
      await IL.startActivityAsync('com.android.settings.TTS_SETTINGS');
    } catch {
      Linking.openSettings();
    }
  };

  return (
    <Screen>
      <Pressable onPress={() => router.back()} accessibilityRole="button"><Text style={{ fontSize: 20, color: C.primary }}>‹ Retour</Text></Pressable>
      <Gap h={10} />
      <T v="title">Voix et écoute</T>
      <T v="small" style={{ marginTop: 4 }}>{LANG[lang].name} · {OS_LABEL[os]}</T>

      <Gap h={18} />
      <T v="label">Voix intégrées à l’application</T>
      <Gap h={8} />
      {bundled.length ? (
        <Card>
          <T style={{ fontSize: 14 }}>Enregistrements de voix neuronales, vérifiés automatiquement phrase par phrase. Ils fonctionnent sans connexion et sans réglage.</T>
          <Gap h={10} />
          <Row style={{ flexWrap: 'wrap', gap: 8 }}>
            <Chip label={`Automatique (comme ${companion.name})`} active={mode === 'auto'} onPress={() => set({ voice: 'auto' })} />
            {bundled.map((v) => (
              <Chip key={v.idx} label={`${v.gender === 'f' ? 'Voix féminine' : 'Voix masculine'} · ${v.name}`}
                active={mode === v.gender}
                onPress={() => {
                  set({ voice: v.gender });
                  const src = phraseClip(sample.id, lang, v.idx);
                  if (src !== undefined) playClip(src);
                }} />
            ))}
          </Row>
          {bundled.some((v) => v.accent && v.accent.includes('BR')) ? <T v="small" style={{ marginTop: 8 }}>Une des voix a un accent brésilien.</T> : null}
        </Card>
      ) : (
        <Card tone={C.goldSoft}>
          <T style={{ fontSize: 14 }}>Pas encore de voix intégrée pour cette langue : l’application utilise la voix du téléphone. Suivez le guide ci-dessous pour en installer une de qualité.</T>
        </Card>
      )}

      <Gap h={18} />
      <Row style={{ justifyContent: 'space-between' }}>
        <T v="label">Voix de l’appareil</T>
        <Text onPress={refresh} style={{ color: C.primary, fontWeight: '700' }} accessibilityRole="button">Actualiser</Text>
      </Row>
      <Gap h={8} />
      <Card>
        <Pressable onPress={() => set({ voice: mode === 'device' ? 'auto' : 'device' })} accessibilityRole="checkbox" accessibilityState={{ checked: mode === 'device' }}>
          <Row>
            <View style={{ width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: C.primary, backgroundColor: mode === 'device' ? C.primary : 'transparent' }} />
            <Text style={{ flex: 1, color: C.ink }}>Toujours utiliser la voix de l’appareil</Text>
          </Row>
        </Pressable>
        <Gap h={10} />
        {list.length ? list.map((v) => (
          <Row key={v.identifier} style={{ paddingVertical: 8, borderTopWidth: 1, borderColor: C.line }}>
            <Pressable style={{ flex: 1 }} onPress={() => set({ deviceVoices: { ...profile.settings.deviceVoices, [lang]: v.identifier } })}>
              <Text style={{ fontWeight: chosenDevice === v.identifier ? '800' : '500', color: chosenDevice === v.identifier ? C.primary : C.ink }}>
                {chosenDevice === v.identifier ? '✓ ' : ''}{v.name}
              </Text>
              <Text style={F.small}>{v.language}{String(v.quality).toLowerCase().includes('enhanced') ? ' · qualité supérieure' : ''}</Text>
            </Pressable>
            <Text onPress={() => { Speech.stop(); Speech.speak(sample.t[lang] ?? '', { voice: v.identifier, language: v.language }); }} style={{ fontSize: 20 }} accessibilityRole="button" accessibilityLabel={`Tester ${v.name}`}>
              🔊
            </Text>
          </Row>
        )) : <T v="small">Aucune voix en {LANG[lang].name.toLowerCase()} installée sur cet appareil.</T>}
      </Card>

      <Gap h={18} />
      <T v="label">Améliorer la voix sur {OS_LABEL[os]}</T>
      <Gap h={8} />
      <Card>
        {guide.steps.map((s, i) => (
          <Row key={i} style={{ alignItems: 'flex-start', marginBottom: 8 }}>
            <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: C.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: '800', color: C.primary }}>{i + 1}</Text>
            </View>
            <Text style={{ flex: 1, color: C.ink, lineHeight: 21 }}>{s}</Text>
          </Row>
        ))}
        {guide.note ? <T v="small" style={{ marginTop: 4 }}>{guide.note}</T> : null}
        {Platform.OS === 'android' ? <><Gap h={10} /><Btn small title="Ouvrir les réglages de synthèse vocale" variant="soft" onPress={openAndroidSettings} /></> : null}
        <Text onPress={() => Linking.openURL(guide.source)} style={[F.small, { marginTop: 10, color: C.primary }]}>Source : {guide.source}</Text>
      </Card>
      <View style={{ height: R.l }} />
    </Screen>
  );
}
