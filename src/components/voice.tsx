import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { C, F, R } from '../theme';
import { LANG, LangCode } from '../data/languages';
import type { Phrase } from '../data/phrases/types';
import type { Companion } from '../data/companions';
import { romanText, scriptText } from '../lib/text';
import { speak, stopSpeaking } from '../lib/speech';
import type { ScoreResult } from '../lib/scoring';
import { Avatar } from './Avatar';
import { Bar, Row } from './ui';

/** Bouton lecture audio (vitesse normale ou ralentie). */
export function PlayButton({ text, lang, slow, companion, label, onState, size = 52 }: {
  text: string; lang: LangCode; slow?: boolean; companion?: Companion; label?: string; size?: number;
  onState?: (playing: boolean) => void;
}) {
  const [playing, setPlaying] = useState(false);
  const [noVoice, setNoVoice] = useState(false);
  const play = async () => {
    if (playing) { await stopSpeaking(); setPlaying(false); onState?.(false); return; }
    setPlaying(true); onState?.(true);
    const ok = await speak(text, lang, {
      slow, gender: companion?.voice.gender, pitch: companion?.voice.pitch,
      onDone: () => { setPlaying(false); onState?.(false); },
    });
    if (!ok) { setNoVoice(true); setPlaying(false); onState?.(false); }
  };
  return (
    <View style={{ alignItems: 'center' }}>
      <Pressable accessibilityRole="button" accessibilityLabel={slow ? 'Écouter lentement' : 'Écouter'} onPress={play}
        style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: slow ? C.goldSoft : C.primary,
          alignItems: 'center', justifyContent: 'center', opacity: noVoice ? 0.4 : 1 }}>
        <Text style={{ fontSize: size * 0.42, color: slow ? C.ink : '#fff' }}>{playing ? '■' : slow ? '🐢' : '🔊'}</Text>
      </Pressable>
      {label ? <Text style={[F.small, { marginTop: 4 }]}>{noVoice ? 'Voix absente' : label}</Text> : null}
    </View>
  );
}

/** Une phrase dans la langue étudiée, avec transcription et traduction. */
export function PhraseView({ phrase, lang, refLang, showRoman = true, showTranslation = true, big = true }: {
  phrase: Phrase; lang: LangCode; refLang: LangCode; showRoman?: boolean; showTranslation?: boolean; big?: boolean;
}) {
  const rtl = LANG[lang].rtl;
  const roman = romanText(phrase, lang);
  return (
    <View>
      <Text selectable style={{ fontSize: big ? 26 : 19, fontWeight: '700', color: C.ink, textAlign: rtl ? 'right' : 'left',
        writingDirection: rtl ? 'rtl' : 'ltr', lineHeight: big ? 38 : 28 }}>
        {scriptText(phrase, lang)}
      </Text>
      {showRoman && roman ? <Text style={{ fontSize: 15, color: C.primary, marginTop: 6, fontStyle: 'italic' }}>{roman}</Text> : null}
      {showTranslation && phrase.t[refLang] && refLang !== lang ? (
        <Text style={{ fontSize: 15, color: C.sub, marginTop: 8, writingDirection: LANG[refLang].rtl ? 'rtl' : 'ltr' }}>
          {phrase.t[refLang]}
        </Text>
      ) : null}
    </View>
  );
}

/** Micro avec halo réagissant au volume de la voix. */
export function MicButton({ listening, volume, onPress, disabled }: { listening: boolean; volume: number; onPress: () => void; disabled?: boolean }) {
  const scale = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.timing(scale, { toValue: listening ? 1 + volume * 0.6 : 1, duration: 110, useNativeDriver: false }).start();
  }, [volume, listening, scale]);
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: 132 }}>
      <Animated.View style={{ position: 'absolute', width: 96, height: 96, borderRadius: 48,
        backgroundColor: listening ? C.accentSoft : 'transparent', transform: [{ scale }] }} />
      <Pressable accessibilityRole="button" accessibilityLabel={listening ? 'Arrêter l’écoute' : 'Parler'} onPress={onPress} disabled={disabled}
        style={{ width: 84, height: 84, borderRadius: 42, backgroundColor: listening ? C.accent : C.primary,
          alignItems: 'center', justifyContent: 'center', opacity: disabled ? 0.4 : 1 }}>
        <Text style={{ fontSize: 34, color: '#fff' }}>{listening ? '■' : '🎙️'}</Text>
      </Pressable>
    </View>
  );
}

/** Retour détaillé de l'analyse vocale ou écrite. */
export function ScoreView({ result, lang, spoken }: { result: ScoreResult; lang: LangCode; spoken?: boolean }) {
  const color = result.verdict === 'excellent' ? C.ok : result.verdict === 'good' ? C.warn : C.bad;
  const rtl = LANG[lang].rtl;
  const seg = LANG[lang].segmented;
  return (
    <View style={{ backgroundColor: C.card, borderRadius: R.m, padding: 14, borderWidth: 2, borderColor: color }}>
      <Row style={{ justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 34, fontWeight: '800', color }}>{result.score}<Text style={{ fontSize: 16 }}>/100</Text></Text>
        <Text style={{ fontWeight: '700', color }}>{result.verdict === 'excellent' ? 'Excellent' : result.verdict === 'good' ? 'Bien' : 'À retravailler'}</Text>
      </Row>
      <View style={{ flexDirection: rtl ? 'row-reverse' : 'row', flexWrap: 'wrap', gap: seg ? 6 : 1, marginTop: 8 }}>
        {result.words.map((w, i) => (
          <Text key={i} style={{ fontSize: 18, fontWeight: '600',
            color: w.state === 'ok' ? C.ok : w.state === 'close' ? C.warn : C.bad,
            textDecorationLine: w.state === 'missed' ? 'underline' : 'none' }}>{w.text}</Text>
        ))}
      </View>
      {result.heard ? <Text style={[F.small, { marginTop: 8 }]}>{spoken ? 'Entendu' : 'Votre réponse'} : « {result.heard} »</Text> : null}
      <View style={{ marginTop: 10, gap: 6 }}>
        <Metric label="Précision" v={result.accuracy} />
        <Metric label="Complétude" v={result.completeness} />
        {spoken && result.fluency !== undefined ? <Metric label="Fluidité (débit)" v={result.fluency} /> : null}
      </View>
    </View>
  );
}

function Metric({ label, v }: { label: string; v: number }) {
  return (
    <Row>
      <Text style={[F.small, { width: 110 }]}>{label}</Text>
      <View style={{ flex: 1 }}><Bar value={v} color={v > 0.84 ? C.ok : v > 0.64 ? C.warn : C.bad} height={6} /></View>
    </Row>
  );
}

/** Le compagnon qui parle, avec sa bulle. */
export function CompanionSays({ companion, text, speaking, mood, size = 72 }: {
  companion: Companion; text: string; speaking?: boolean; mood?: 'smile' | 'wow' | 'calm'; size?: number;
}) {
  return (
    <Row style={{ alignItems: 'flex-end' }}>
      <Avatar spec={companion.avatar} size={size} speaking={speaking} mood={mood} />
      <View style={{ flex: 1, backgroundColor: C.card, borderRadius: R.m, borderBottomLeftRadius: 4, padding: 12,
        borderWidth: 1, borderColor: C.line }}>
        <Text style={[F.small, { fontWeight: '700', color: C.primary, marginBottom: 2 }]}>{companion.name}</Text>
        <Text style={F.body}>{text}</Text>
      </View>
    </Row>
  );
}
