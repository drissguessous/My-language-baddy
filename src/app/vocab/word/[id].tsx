import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ChevronLeft, ChevronRight, Mic, PenLine, Volume2 } from 'lucide-react-native';
import { Text } from '../../../components/Text';
import { Speak, VocabImage, Write } from '../../../components/exercises';
import { BackBar, Btn, Card, Gap, Row, Screen, T } from '../../../components/ui';
import { PhraseView, PlayButton } from '../../../components/voice';
import { THEMES, THEME_BY_ID, VOCAB_BY_ID, themeItems } from '../../../data/vocab';
import { speak, stopSpeaking } from '../../../lib/speech';
import { useStore } from '../../../lib/store';
import { masteryOf } from '../../../lib/vocabProgress';
import { C, F, MASTERY_COLOR, R, THEME_TINTS } from '../../../theme';

type Mode = 'view' | 'speak' | 'write';

/** Fiche d'un mot ou d'un groupe de mots : écouter, prononcer, écrire. */
export default function WordScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { profile, progress, companion, band, record } = useStore();
  const [mode, setMode] = useState<Mode>('view');
  const [last, setLast] = useState<{ kind: 'speak' | 'write'; score: number } | null>(null);
  const v = VOCAB_BY_ID[id ?? ''];

  useEffect(() => { setMode('view'); setLast(null); }, [id]);
  useEffect(() => {
    if (!v || !profile?.settings.autoPlay || mode !== 'view') return;
    const t = setTimeout(() => speak(v.t[profile.targetLang]!, profile.targetLang, { pid: v.id, gender: companion.voice.gender, pitch: companion.voice.pitch }), 300);
    return () => { clearTimeout(t); stopSpeaking(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!profile || !v || !v.t[profile.targetLang]) return null;
  const lang = profile.targetLang;
  const ref = profile.refLang;
  const th = THEME_BY_ID[v.theme];
  const { words, groups } = themeItems(th, lang);
  const list = v.group ? groups : words;
  const pos = list.indexOf(v.id);
  const prev = pos > 0 ? list[pos - 1] : null;
  const next = pos < list.length - 1 ? list[pos + 1] : null;
  const m = masteryOf(progress.cards[v.id]);
  const tint = THEME_TINTS[THEMES.indexOf(th) % THEME_TINTS.length];
  const tu = band !== 'adult';

  const finish = (kind: 'speak' | 'write') => (score: number | null) => {
    if (score !== null) { record({ kind, phraseId: v.id, score }); setLast({ kind, score }); }
    setMode('view');
  };

  if (mode !== 'view') {
    return (
      <Screen>
        <BackBar title={mode === 'speak' ? 'Prononcer' : 'Écrire'} onBack={() => setMode('view')} />
        <Gap h={6} />
        {mode === 'speak'
          ? <Speak pid={v.id} lang={lang} refLang={ref} onDone={finish('speak')} />
          : <Write pid={v.id} lang={lang} refLang={ref} onDone={finish('write')} />}
      </Screen>
    );
  }

  return (
    <Screen>
      <BackBar title={th.title} />
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <View style={{ backgroundColor: tint, alignItems: 'center', paddingVertical: 22 }}>
          <VocabImage pid={v.id} size={v.group ? 120 : 170} />
        </View>
        <View style={{ padding: 18 }}>
          <Row style={{ justifyContent: 'space-between', marginBottom: 8 }}>
            <T v="label">{v.group ? 'Groupe de mots' : 'Mot'} · {pos + 1}/{list.length}</T>
            <Row gap={6}>
              <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: MASTERY_COLOR[m] }} />
              <Text style={[F.small, { fontWeight: '700' }]}>{m === 'new' ? 'À découvrir' : m === 'learning' ? 'En cours' : 'Acquis'}</Text>
            </Row>
          </Row>
          <PhraseView phrase={v} lang={lang} refLang={ref} showRoman={profile.settings.showRomanization} />
          <Gap h={16} />
          <Row style={{ justifyContent: 'center', gap: 28 }}>
            <PlayButton pid={v.id} text={v.t[lang]!} lang={lang} companion={companion} size={60} label="Écouter" />
            <PlayButton pid={v.id} text={v.t[lang]!} lang={lang} companion={companion} slow size={60} label="Lentement" />
          </Row>
        </View>
      </Card>

      {last ? (
        <View style={{ marginTop: 12, backgroundColor: last.score >= 65 ? C.okSoft : C.badSoft, borderRadius: R.m, padding: 12 }}>
          <Text style={{ fontWeight: '700', color: last.score >= 65 ? C.ok : C.bad }}>
            {last.kind === 'speak' ? 'Prononciation' : 'Écriture'} : {last.score}/100 {last.score >= 85 ? '· excellent' : last.score >= 65 ? '· bien' : '· à retravailler'}
          </Text>
        </View>
      ) : null}

      <Gap h={14} />
      <Row gap={10}>
        <ActionTile icon={Mic} label="Prononcer" hint={tu ? 'Répète, je t’écoute' : 'Analyse de la voix'} color={C.violet} onPress={() => { stopSpeaking(); setMode('speak'); }} />
        <ActionTile icon={PenLine} label="Écrire" hint={tu ? 'Écris le mot' : 'Correction lettre à lettre'} color={C.gold} onPress={() => { stopSpeaking(); setMode('write'); }} />
      </Row>

      <Gap h={18} />
      <Row gap={10}>
        <Btn style={{ flex: 1 }} small variant="ghost" title="Précédent" icon={ChevronLeft} disabled={!prev} onPress={() => prev && router.replace(`/vocab/word/${prev}`)} />
        <Btn style={{ flex: 1 }} small variant="soft" title="Suivant" iconRight={ChevronRight} disabled={!next} onPress={() => next && router.replace(`/vocab/word/${next}`)} />
      </Row>
      <Gap h={8} />
      <T v="small" style={{ textAlign: 'center' }}>
        <Volume2 size={12} color={C.sub} /> {tu ? 'Écoute, répète puis écris : le mot reviendra en révision au bon moment.' : 'Écoutez, répétez puis écrivez : le mot reviendra en révision au bon moment.'}
      </T>
    </Screen>
  );
}

function ActionTile({ icon: Icon, label, hint, color, onPress }: { icon: typeof Mic; label: string; hint: string; color: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} accessibilityRole="button" accessibilityLabel={label}
      style={({ pressed }) => ({ flex: 1, backgroundColor: C.card, borderRadius: R.l, padding: 14, borderWidth: 1.5, borderColor: C.line,
        transform: [{ scale: pressed ? 0.98 : 1 }] })}>
      <View style={{ width: 42, height: 42, borderRadius: 13, backgroundColor: color + '1F', alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={21} color={color} strokeWidth={2.2} />
      </View>
      <Gap h={8} />
      <Text style={{ fontWeight: '800', fontSize: 16, color: C.ink }}>{label}</Text>
      <Text style={[F.small, { fontSize: 12.5 }]}>{hint}</Text>
    </Pressable>
  );
}
