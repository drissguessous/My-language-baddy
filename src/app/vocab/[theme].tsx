import React from 'react';
import { Pressable, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { GraduationCap, Repeat } from 'lucide-react-native';
import { Text } from '../../components/Text';
import { VocabImage } from '../../components/exercises';
import { BackBar, Bar, Btn, Card, Gap, Row, Screen, Section, T } from '../../components/ui';
import { PlayButton } from '../../components/voice';
import { LANG } from '../../data/languages';
import { THEMES, THEME_BY_ID, VOCAB_BY_ID, themeItems } from '../../data/vocab';
import { useStore } from '../../lib/store';
import { romanText, scriptText } from '../../lib/text';
import { Mastery, masteryOf, themeProgress } from '../../lib/vocabProgress';
import { C, F, MASTERY_COLOR, R, THEME_TINTS, shadow } from '../../theme';

export default function ThemeScreen() {
  const { theme: tid } = useLocalSearchParams<{ theme: string }>();
  const { profile, progress, band, companion } = useStore();
  const th = THEME_BY_ID[tid ?? ''];
  if (!profile || !th) return null;
  const lang = profile.targetLang;
  const ref = profile.refLang;
  const kid = band === 'kid';
  const { words, groups } = themeItems(th, lang);
  const p = themeProgress(th, lang, progress.cards);
  const tint = THEME_TINTS[THEMES.indexOf(th) % THEME_TINTS.length];
  const showRoman = profile.settings.showRomanization;
  const rtl = LANG[lang].rtl;
  const toLearn = words.filter((w) => masteryOf(progress.cards[w]) !== 'known');

  return (
    <Screen>
      <BackBar />
      <View style={{ backgroundColor: tint, borderRadius: R.xl, padding: 20, alignItems: 'center' }}>
        <VocabImage pid={th.words[0]} size={kid ? 110 : 92} />
        <Gap h={8} />
        <T v="title" style={{ textAlign: 'center' }}>{th.title}</T>
        <T v="small" style={{ marginTop: 2 }}>{p.total} mots · {groups.length} groupes de mots{kid ? '' : ` · niveau ${th.level}`}</T>
        <Gap h={12} />
        <View style={{ alignSelf: 'stretch' }}>
          <Bar value={p.ratio} color={C.primary} track="rgba(255,255,255,0.7)" />
          <T v="small" style={{ marginTop: 6, textAlign: 'center' }}>{p.known} acquis · {p.seen - p.known} en cours · {p.total - p.seen} à découvrir</T>
        </View>
      </View>
      <Gap h={14} />
      <Btn title={toLearn.length ? (p.seen ? 'Continuer l’apprentissage' : 'Apprendre ces mots') : 'Tout revoir'} icon={GraduationCap} variant="accent"
        onPress={() => router.push({ pathname: '/lesson/[id]', params: { id: `vocab-${th.id}`, ...(toLearn.length ? { words: toLearn.join(',') } : {}) } })} />
      {p.seen ? <><Gap h={10} /><Btn title="Réviser le thème" icon={Repeat} variant="ghost" onPress={() => router.push({ pathname: '/lesson/[id]', params: { id: `vocab-${th.id}` } })} /></> : null}

      <Section title="Mots" />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
        {words.map((id) => {
          const v = VOCAB_BY_ID[id];
          const m = masteryOf(progress.cards[id]);
          const rom = showRoman ? romanText(v, lang) : undefined;
          return (
            <Pressable key={id} onPress={() => router.push(`/vocab/word/${id}`)} accessibilityRole="button" accessibilityLabel={v.t[ref] ?? v.t[lang]}
              style={({ pressed }) => [{ width: kid ? '47.8%' : '31.3%', backgroundColor: C.card, borderRadius: R.l, paddingVertical: 12, paddingHorizontal: 8,
                alignItems: 'center', borderWidth: 1, borderColor: '#EFECE6', transform: [{ scale: pressed ? 0.97 : 1 }] }, shadow]}>
              <View style={{ position: 'absolute', top: 8, right: 8, width: 9, height: 9, borderRadius: 5, backgroundColor: MASTERY_COLOR[m] }} />
              <VocabImage pid={id} size={kid ? 72 : 56} />
              <Gap h={6} />
              <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontWeight: '800', fontSize: kid ? 17 : 15, color: C.ink, writingDirection: rtl ? 'rtl' : 'ltr' }}>{scriptText(v, lang)}</Text>
              {rom ? <Text numberOfLines={1} style={[F.small, { fontSize: 12, color: C.primary, fontStyle: 'italic' }]}>{rom}</Text> : null}
              {ref !== lang ? <Text numberOfLines={1} style={[F.small, { fontSize: 12 }]}>{v.t[ref]}</Text> : null}
            </Pressable>
          );
        })}
      </View>
      <Row style={{ marginTop: 12, gap: 14, justifyContent: 'center' }}>
        {(['new', 'learning', 'known'] as Mastery[]).map((m) => (
          <Row key={m} gap={5}><View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: MASTERY_COLOR[m] }} />
            <Text style={[F.small, { fontSize: 12 }]}>{m === 'new' ? 'À découvrir' : m === 'learning' ? 'En cours' : 'Acquis'}</Text></Row>
        ))}
      </Row>

      {groups.length ? (
        <>
          <Section title="Groupes de mots" />
          <Card style={{ paddingVertical: 4 }}>
            {groups.map((id, k) => {
              const v = VOCAB_BY_ID[id];
              const rom = showRoman ? romanText(v, lang) : undefined;
              return (
                <Pressable key={id} onPress={() => router.push(`/vocab/word/${id}`)} accessibilityRole="button"
                  style={({ pressed }) => [{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, opacity: pressed ? 0.7 : 1 },
                    k < groups.length - 1 && { borderBottomWidth: 1, borderColor: C.line }]}>
                  <VocabImage pid={id} size={40} />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, color: C.ink, writingDirection: rtl ? 'rtl' : 'ltr' }}>{scriptText(v, lang)}</Text>
                    {rom ? <Text style={[F.small, { color: C.primary, fontStyle: 'italic' }]}>{rom}</Text> : null}
                    {ref !== lang ? <Text style={F.small}>{v.t[ref]}</Text> : null}
                  </View>
                  <PlayButton pid={id} text={v.t[lang]!} lang={lang} companion={companion} size={40} />
                </Pressable>
              );
            })}
          </Card>
        </>
      ) : null}
    </Screen>
  );
}
