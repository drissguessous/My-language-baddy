import React, { useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import { router } from 'expo-router';
import { Repeat, Search, X } from 'lucide-react-native';
import { Text, TextInput } from '../../components/Text';
import { VocabImage } from '../../components/exercises';
import { Bar, Btn, Card, Gap, Row, Screen, Section, T } from '../../components/ui';
import { CompanionSays } from '../../components/voice';
import { LANG } from '../../data/languages';
import { SECTIONS, THEMES, Theme, VOCAB, VOCAB_BY_ID, themeAvailable } from '../../data/vocab';
import { dueCards } from '../../lib/srs';
import { useStore } from '../../lib/store';
import { normalize, romanText, scriptText } from '../../lib/text';
import { themeProgress } from '../../lib/vocabProgress';
import { C, F, R, THEME_TINTS, shadow } from '../../theme';

export default function Words() {
  const { profile, progress, band, companion } = useStore();
  const [query, setQuery] = useState('');
  const lang = profile?.targetLang ?? 'en';
  const ref = profile?.refLang ?? 'fr';
  const results = useMemo(() => {
    const q = query.trim();
    if (q.length < 2) return [];
    const nq = (s?: string, l = lang) => (s ? normalize(s, l) : '');
    return VOCAB.filter((v) => v.t[lang] && !v.group).filter((v) => {
      const target = nq(v.t[lang]);
      const rom = nq(romanText(v, lang), 'en');
      const tr = nq(v.t[ref], ref);
      const qa = nq(q), qr = nq(q, ref), qe = nq(q, 'en');
      return target.includes(qa) || (rom && rom.includes(qe)) || tr.includes(qr);
    }).slice(0, 30);
  }, [query, lang, ref]);

  if (!profile) return null;
  const kid = band === 'kid';
  const themes = THEMES.filter((t) => themeAvailable(t, lang));
  const stats = themes.map((t) => themeProgress(t, lang, progress.cards));
  const total = stats.reduce((a, s) => a + s.total, 0);
  const known = stats.reduce((a, s) => a + s.known, 0);
  const vocabCards = Object.fromEntries(Object.entries(progress.cards).filter(([k]) => VOCAB_BY_ID[k]));
  const due = dueCards(vocabCards).length;
  const started = Object.keys(vocabCards).length > 0;
  const rtl = LANG[lang].rtl;

  return (
    <Screen>
      <T v="title">Vocabulaire</T>
      <T v="small" style={{ marginTop: 4 }}>{LANG[lang].name} · {total} mots illustrés à écouter, prononcer et écrire</T>
      <Gap h={16} />
      {kid ? (
        <CompanionSays companion={companion} text={started ? 'On continue ? Choisis un thème et apprends de nouveaux mots.' : 'Choisis un thème : on va apprendre des mots avec des images !'} size={64} />
      ) : (
        <Card tone={C.night} style={{ padding: 20 }}>
          <Text style={[F.label, { color: '#9FD3CB' }]}>Mots acquis</Text>
          <Row style={{ alignItems: 'baseline', marginTop: 6 }} gap={6}>
            <Text style={{ color: '#fff', fontSize: 34, fontWeight: '800' }}>{known}</Text>
            <Text style={{ color: '#9FD3CB', fontSize: 16, fontWeight: '600' }}>sur {total}</Text>
          </Row>
          <Gap h={10} />
          <Bar value={total ? known / total : 0} color={C.accent} track="rgba(255,255,255,0.14)" />
          <Gap h={14} />
          {started ? (
            <Btn title={due ? `Réviser ${due} mot${due > 1 ? 's' : ''}` : 'Réviser mes mots'} icon={Repeat} variant="accent" small
              onPress={() => router.push('/lesson/vocab-review')} />
          ) : <Text style={{ color: '#CFE7E3', fontSize: 14 }}>Chaque mot est validé par l’écoute, la prononciation et l’écriture, puis revient en révision au bon moment.</Text>}
        </Card>
      )}
      {kid && started ? <><Gap h={12} /><Btn title="Réviser mes mots" icon={Repeat} variant="soft" onPress={() => router.push('/lesson/vocab-review')} /></> : null}

      <Gap h={16} />
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: C.card, borderRadius: R.m, borderWidth: 1.5, borderColor: C.line, paddingHorizontal: 12 }}>
        <Search size={18} color={C.muted} />
        <TextInput value={query} onChangeText={setQuery} placeholder={kid ? 'Cherche un mot' : 'Rechercher un mot'} autoCorrect={false} autoCapitalize="none"
          accessibilityLabel="Rechercher un mot" style={{ flex: 1, paddingVertical: 12, paddingHorizontal: 10, fontSize: 16, color: C.ink }} />
        {query ? <Pressable onPress={() => setQuery('')} accessibilityRole="button" accessibilityLabel="Effacer" hitSlop={10}><X size={18} color={C.muted} /></Pressable> : null}
      </View>

      {query.trim().length >= 2 ? (
        <>
          <Gap h={10} />
          <Card style={{ paddingVertical: 4 }}>
            {results.length ? results.map((v, k) => (
              <Pressable key={v.id} onPress={() => router.push(`/vocab/word/${v.id}`)} accessibilityRole="button"
                style={({ pressed }) => [{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10, opacity: pressed ? 0.7 : 1 },
                  k < results.length - 1 && { borderBottomWidth: 1, borderColor: C.line }]}>
                <VocabImage pid={v.id} size={40} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: '700', fontSize: 16, color: C.ink, writingDirection: rtl ? 'rtl' : 'ltr' }}>{scriptText(v, lang)}</Text>
                  {ref !== lang ? <Text style={F.small}>{v.t[ref]}</Text> : null}
                </View>
              </Pressable>
            )) : <T v="small" style={{ paddingVertical: 12 }}>Aucun mot trouvé.</T>}
          </Card>
        </>
      ) : SECTIONS.map((sec) => {
        const list = themes.filter((t) => t.section === sec);
        if (!list.length) return null;
        return (
          <View key={sec}>
            <Section title={sec} />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
              {list.map((t) => <ThemeTile key={t.id} theme={t} kid={kid} tint={THEME_TINTS[THEMES.indexOf(t) % THEME_TINTS.length]} />)}
            </View>
          </View>
        );
      })}
      <Gap h={18} />
      <T v="small" style={{ textAlign: 'center', color: C.muted }}>Illustrations : Microsoft Fluent Emoji (licence MIT)</T>
    </Screen>
  );
}

function ThemeTile({ theme, kid, tint }: { theme: Theme; kid: boolean; tint: string }) {
  const { profile, progress } = useStore();
  const lang = profile!.targetLang;
  const p = themeProgress(theme, lang, progress.cards);
  return (
    <Pressable onPress={() => router.push(`/vocab/${theme.id}`)} accessibilityRole="button" accessibilityLabel={theme.title}
      style={({ pressed }) => [{ width: '47.8%', backgroundColor: C.card, borderRadius: R.l, padding: 12, borderWidth: 1, borderColor: '#EFECE6',
        transform: [{ scale: pressed ? 0.98 : 1 }] }, shadow]}>
      <View style={{ height: kid ? 96 : 80, borderRadius: R.m, backgroundColor: tint, alignItems: 'center', justifyContent: 'center' }}>
        <VocabImage pid={theme.words[0]} size={kid ? 70 : 58} />
      </View>
      <Gap h={10} />
      <Text numberOfLines={2} style={{ fontWeight: '800', fontSize: kid ? 16 : 15, color: C.ink, minHeight: 40 }}>{theme.title}</Text>
      <Row style={{ justifyContent: 'space-between', marginTop: 2 }}>
        <Text style={[F.small, { fontSize: 12.5 }]}>{p.total} mots{kid ? '' : ` · ${theme.level}`}</Text>
        {p.known ? <Text style={[F.small, { fontSize: 12.5, color: C.ok, fontWeight: '700' }]}>{p.known} acquis</Text> : null}
      </Row>
      <Gap h={8} />
      <Bar value={p.ratio} height={6} color={C.primary} />
    </Pressable>
  );
}
