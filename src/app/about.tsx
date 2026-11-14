import React from 'react';
import { Linking, View } from 'react-native';
import { Text } from '../components/Text';
import { Wordmark } from '../components/Logo';
import { BackBar, Card, Gap, Screen, Section, T } from '../components/ui';
import { VOICES } from '../data/audio/manifest';
import { LANG, LangCode } from '../data/languages';
import { C, F } from '../theme';

// Crédits et licences des composants tiers embarqués (obligatoire pour les licences CC-BY).
const CREDITS: { name: string; use: string; license: string; url: string }[] = [
  { name: 'Kokoro-82M (hexgrad)', use: 'Voix neuronales intégrées', license: 'Apache-2.0', url: 'https://huggingface.co/hexgrad/Kokoro-82M' },
  { name: 'Piper voices (Rhasspy / OHF-Voice)', use: 'Voix neuronales intégrées', license: 'CC0, CC-BY selon la voix', url: 'https://huggingface.co/rhasspy/piper-voices' },
  { name: 'SIWIS French Speech Synthesis Database', use: 'Voix « Siwis »', license: 'CC-BY 4.0', url: 'https://datashare.is.ed.ac.uk/handle/10283/2353' },
  { name: 'Sharvard Corpus (Aubanel et al.)', use: 'Voix « Sharvard »', license: 'CC-BY 3.0', url: 'https://datashare.ed.ac.uk/handle/10283/574' },
  { name: 'Notionists (Zoish), via DiceBear', use: 'Portraits des compagnons', license: 'CC0 1.0 (dessins), MIT (code)', url: 'https://www.dicebear.com/styles/notionists' },
  { name: 'Lucide', use: 'Icônes', license: 'ISC', url: 'https://lucide.dev' },
  { name: 'Plus Jakarta Sans', use: 'Typographie', license: 'SIL Open Font License 1.1', url: 'https://fonts.google.com/specimen/Plus+Jakarta+Sans' },
];

export default function About() {
  const voiceLangs = Object.entries(VOICES).filter(([, v]) => v.length) as [LangCode, typeof VOICES[string]][];
  return (
    <Screen>
      <BackBar title="À propos et licences" />
      <Gap h={10} />
      <Wordmark size={20} />
      <T v="small" style={{ marginTop: 8 }}>Version 1.0 · Apprentissage des langues à l’oral et à l’écrit, du niveau A1 au C2.</T>

      {voiceLangs.length ? (
        <>
          <Section title="Voix intégrées" />
          <Card>
            {voiceLangs.map(([lang, list]) => (
              <View key={lang} style={{ marginBottom: 8 }}>
                <Text style={{ fontWeight: '700' }}>{LANG[lang]?.name ?? lang}</Text>
                <Text style={F.small}>{list.map((v) => `${v.name} (${v.engine === 'kokoro' ? 'Kokoro' : 'Piper'}, ${v.license})`).join(' · ')}</Text>
              </View>
            ))}
          </Card>
        </>
      ) : null}

      <Section title="Composants tiers" />
      <Card style={{ paddingVertical: 6 }}>
        {CREDITS.map((c, k) => (
          <View key={c.name} style={{ paddingVertical: 10, borderBottomWidth: k < CREDITS.length - 1 ? 1 : 0, borderColor: '#F1EEE8' }}>
            <Text style={{ fontWeight: '700' }}>{c.name}</Text>
            <Text style={F.small}>{c.use} · {c.license}</Text>
            <Text onPress={() => Linking.openURL(c.url)} style={[F.small, { color: C.primary }]}>{c.url}</Text>
          </View>
        ))}
      </Card>
    </Screen>
  );
}
