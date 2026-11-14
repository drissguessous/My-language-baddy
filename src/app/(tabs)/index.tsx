import React from 'react';
import { Pressable, View } from 'react-native';
import { router } from 'expo-router';
import { Award, Check, CircleCheckBig, Clock3, Flame, Lock, MessagesSquare, Play, Repeat, Timer } from 'lucide-react-native';
import { Avatar } from '../../components/Avatar';
import { Text } from '../../components/Text';
import { Bar, Btn, Card, Gap, IconTile, LangBadge, Row, Screen, Section, Stars, T } from '../../components/ui';
import { UNIT_ICON, TRACK_ICON } from '../../components/unitIcons';
import { LEVELS, LEVEL_INFO, PRO_TRACKS, UNITS, Unit, levelIndex } from '../../data/curriculum';
import { LANG } from '../../data/languages';
import { useStore } from '../../lib/store';
import { dueCards } from '../../lib/srs';
import { C, F, R, shadow } from '../../theme';

export default function Home() {
  const s = useStore();
  const { profile, companion, progress, usage, currentLevel, unitState, band, timeLeft } = s;
  if (!profile) return null;
  const lang = LANG[profile.targetLang];
  const due = dueCards(progress.cards).length;
  const mastered = Object.values(progress.cards).filter((c) => c.box >= 3).length;
  const hour = new Date().getHours();
  const hello = hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir';
  const visible = (u: Unit) => unitState(u) !== 'hidden';
  const proUnits = UNITS.filter((u) => u.pro && visible(u))
    .sort((a, b) => (a.pro === profile.proTrack ? -1 : 0) - (b.pro === profile.proTrack ? -1 : 0));
  const kidsUnits = UNITS.filter((u) => u.kids && visible(u));
  const general = UNITS.filter((u) => !u.pro && !u.kids && visible(u));
  const nextUnit = [...kidsUnits, ...(profile.goal === 'pro' ? proUnits : []), ...general, ...proUnits].find((u) => unitState(u) === 'open');
  const levelUnits = general.filter((u) => u.level === currentLevel);
  const levelDone = levelUnits.filter((u) => progress.units[u.id]).length;

  const Header = (
    <Row style={{ justifyContent: 'space-between' }}>
      <View style={{ flex: 1 }}>
        <T v="small">{hello}</T>
        <T v="title">{profile.name}</T>
      </View>
      <Pressable onPress={() => router.push('/(tabs)/me')} accessibilityRole="button" accessibilityLabel="Langue étudiée"
        style={[{ flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: C.card, paddingVertical: 6, paddingLeft: 6, paddingRight: 12, borderRadius: R.pill }, shadow]}>
        <LangBadge code={lang.code} size={30} />
        <Text style={{ fontWeight: '700', color: C.ink }}>{currentLevel}</Text>
      </Pressable>
    </Row>
  );

  // ───────────────────────── Mode enfant ─────────────────────────
  if (band === 'kid') {
    const tiles = [...kidsUnits, ...general];
    const badges = tiles.filter((u) => progress.units[u.id]?.sticker);
    return (
      <Screen>
        {Header}
        <Gap h={18} />
        <View style={{ backgroundColor: '#FFF4E6', borderRadius: R.xl, padding: 20 }}>
          <Row style={{ alignItems: 'center', gap: 14 }}>
            <Avatar id={companion.id} size={92} ring />
            <View style={{ flex: 1 }}>
              <Text style={{ color: C.accent, fontWeight: '700' }}>{companion.name}</Text>
              <Text style={{ fontSize: 19, fontWeight: '800', color: C.ink, marginTop: 2, lineHeight: 25 }}>
                {nextUnit ? `On continue avec « ${nextUnit.title} » ?` : 'Tu as tout terminé, bravo !'}
              </Text>
            </View>
          </Row>
          {nextUnit ? <><Gap h={16} /><Btn title="Commencer" icon={Play} variant="accent" onPress={() => router.push(`/lesson/${nextUnit.id}`)} /></> : null}
        </View>

        {timeLeft !== null ? (
          <Card style={{ marginTop: 14 }}>
            <Row style={{ justifyContent: 'space-between' }}>
              <Row gap={8}><Timer size={18} color={C.primary} /><Text style={{ fontWeight: '700' }}>Temps aujourd’hui</Text></Row>
              <T v="small">{usage.minutesToday} / {profile.parental?.dailyMinutes} min</T>
            </Row>
            <Gap h={10} />
            <Bar value={usage.minutesToday / Math.max(1, profile.parental?.dailyMinutes ?? 1)} color={C.primary} />
          </Card>
        ) : null}

        {badges.length ? (
          <>
            <Section title="Mes badges" />
            <Row style={{ flexWrap: 'wrap', gap: 10 }}>
              {badges.map((u) => {
                const I = UNIT_ICON[u.id] ?? Award;
                const col = progress.units[u.id]!.sticker!;
                return (
                  <View key={u.id} style={{ alignItems: 'center', width: 76 }}>
                    <View style={{ width: 58, height: 58, borderRadius: 29, backgroundColor: col, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: '#fff' }}>
                      <I size={26} color="#fff" strokeWidth={2.2} />
                    </View>
                    <Text style={[F.small, { textAlign: 'center', marginTop: 4 }]} numberOfLines={1}>{u.title}</Text>
                  </View>
                );
              })}
            </Row>
          </>
        ) : null}

        <Section title="Mes leçons" />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {tiles.map((u) => {
            const st = unitState(u);
            const I = UNIT_ICON[u.id] ?? Award;
            const locked = st === 'locked' || st === 'soon';
            return (
              <Pressable key={u.id} disabled={locked} onPress={() => router.push(`/lesson/${u.id}`)} accessibilityRole="button"
                style={({ pressed }) => [{ width: '47.5%', backgroundColor: C.card, borderRadius: R.l, padding: 16, minHeight: 138,
                  opacity: locked ? 0.55 : 1, transform: [{ scale: pressed ? 0.98 : 1 }] }, shadow]}>
                <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <IconTile icon={I} size={50} color={locked ? C.locked : st === 'done' ? C.ok : C.primary} />
                  {st === 'done' ? <View style={{ backgroundColor: C.ok, borderRadius: 12, padding: 3 }}><Check size={14} color="#fff" strokeWidth={3} /></View>
                    : locked ? <Lock size={16} color={C.locked} /> : null}
                </Row>
                <Gap h={14} />
                <Text style={{ fontWeight: '800', fontSize: 16, color: C.ink }}>{u.title}</Text>
                <Text style={[F.small, { marginTop: 2 }]}>{st === 'soon' ? 'Bientôt' : u.level}</Text>
              </Pressable>
            );
          })}
        </View>
      </Screen>
    );
  }

  // ───────────────────────── Mode ado / adulte ─────────────────────────
  return (
    <Screen>
      {Header}
      <Gap h={18} />
      <View style={{ backgroundColor: C.night, borderRadius: R.xl, padding: 20, overflow: 'hidden' }}>
        <View style={{ position: 'absolute', right: -40, top: -40, width: 170, height: 170, borderRadius: 85, backgroundColor: '#ffffff0F' }} />
        <View style={{ position: 'absolute', right: 40, bottom: -60, width: 120, height: 120, borderRadius: 60, backgroundColor: '#F2613F22' }} />
        <Row style={{ alignItems: 'flex-start', gap: 14 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#9FD8CF', fontWeight: '700', fontSize: 12, letterSpacing: 0.8 }}>
              {lang.name.toUpperCase()} · NIVEAU {currentLevel} · {LEVEL_INFO[currentLevel].label.toUpperCase()}
            </Text>
            <Text style={{ color: '#fff', fontSize: 21, fontWeight: '800', marginTop: 8, lineHeight: 27 }}>
              {nextUnit ? nextUnit.title : 'Niveau terminé'}
            </Text>
            {nextUnit ? <Text style={{ color: '#CFE7E3', marginTop: 4, lineHeight: 20 }}>{nextUnit.scene}</Text> : null}
          </View>
          <Avatar id={companion.id} size={70} />
        </Row>
        <Gap h={16} />
        <Row>
          <View style={{ flex: 1 }}><Bar value={levelUnits.length ? levelDone / levelUnits.length : 0} color="#5EEAD4" track="#ffffff22" height={6} /></View>
          <Text style={{ color: '#CFE7E3', fontSize: 12 }}>{levelDone}/{levelUnits.length} unités</Text>
        </Row>
        {nextUnit ? (
          <Pressable onPress={() => router.push(`/lesson/${nextUnit.id}`)} accessibilityRole="button"
            style={({ pressed }) => ({ marginTop: 16, backgroundColor: '#fff', borderRadius: R.l, paddingVertical: 14, flexDirection: 'row', justifyContent: 'center', gap: 8, alignItems: 'center', opacity: pressed ? 0.9 : 1 })}>
            <Play size={18} color={C.night} fill={C.night} />
            <Text style={{ color: C.night, fontWeight: '800', fontSize: 16 }}>{progress.units[nextUnit.id] ? 'Reprendre' : 'Commencer la leçon'}</Text>
          </Pressable>
        ) : null}
      </View>

      <Row style={{ marginTop: 14, gap: 10, alignItems: 'stretch' }}>
        <Stat icon={Flame} color={C.accent} value={String(usage.streak)} label={usage.streak > 1 ? 'jours d’affilée' : 'jour d’affilée'} />
        <Stat icon={CircleCheckBig} color={C.ok} value={String(mastered)} label="phrases acquises" />
        <Stat icon={Clock3} color={C.violet} value={`${usage.minutesToday} min`} label={`objectif ${usage.dailyGoal} min`} />
      </Row>

      {due ? (
        <Card style={{ marginTop: 14 }} onPress={() => router.push('/lesson/review')}>
          <Row>
            <IconTile icon={Repeat} color={C.accent} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '800', fontSize: 16 }}>{due} phrase{due > 1 ? 's' : ''} à réviser</Text>
              <T v="small">Révision espacée : c’est le bon moment pour les fixer.</T>
            </View>
          </Row>
        </Card>
      ) : null}

      {profile.goal === 'remise' && !progress.placement ? (
        <Card style={{ marginTop: 14 }} tone={C.goldSoft} onPress={() => router.push('/placement')}>
          <Text style={{ fontWeight: '800', fontSize: 16 }}>Test de positionnement</Text>
          <T v="small" style={{ marginTop: 4 }}>12 questions pour reprendre au bon niveau.</T>
        </Card>
      ) : null}

      {proUnits.length ? (
        <>
          <Section title={profile.goal === 'pro' && profile.proTrack ? `Filière · ${PRO_TRACKS.find((t) => t.id === profile.proTrack)?.title}` : 'Langue professionnelle'} />
          <Card style={{ paddingVertical: 4 }}>{proUnits.map((u, k) => <UnitRow key={u.id} unit={u} last={k === proUnits.length - 1} />)}</Card>
        </>
      ) : null}

      {LEVELS.map((lvl) => {
        const units = general.filter((u) => u.level === lvl);
        if (!units.length) return null;
        const done = units.filter((u) => progress.units[u.id]).length;
        const locked = levelIndex(lvl) > levelIndex(currentLevel);
        return (
          <View key={lvl}>
            <Row style={{ justifyContent: 'space-between', marginTop: 26, marginBottom: 10 }}>
              <Row gap={10}>
                <View style={{ backgroundColor: locked ? '#E7E4DD' : C.ink, borderRadius: 8, paddingHorizontal: 9, paddingVertical: 4 }}>
                  <Text style={{ color: locked ? C.sub : '#fff', fontWeight: '800', fontSize: 13 }}>{lvl}</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: '800', fontSize: 16, color: locked ? C.muted : C.ink }}>{LEVEL_INFO[lvl].label}</Text>
                  <Text style={[F.small, { maxWidth: 250 }]} numberOfLines={1}>{LEVEL_INFO[lvl].can}</Text>
                </View>
              </Row>
              <T v="small">{done}/{units.length}</T>
            </Row>
            <Card style={{ paddingVertical: 4 }}>{units.map((u, k) => <UnitRow key={u.id} unit={u} last={k === units.length - 1} />)}</Card>
          </View>
        );
      })}
      <Gap h={10} />
    </Screen>
  );

  function UnitRow({ unit, last }: { unit: Unit; last: boolean }) {
    const st = unitState(unit);
    const res = progress.units[unit.id];
    const I = (unit.pro ? TRACK_ICON[unit.pro] : UNIT_ICON[unit.id]) ?? Award;
    const disabled = st === 'locked' || st === 'soon';
    return (
      <Pressable disabled={disabled} onPress={() => router.push(`/lesson/${unit.id}`)} accessibilityRole="button"
        style={({ pressed }) => [{ flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 13, opacity: disabled ? 0.5 : pressed ? 0.75 : 1 },
          !last && { borderBottomWidth: 1, borderColor: '#F1EEE8' }]}>
        <IconTile icon={disabled ? Lock : I} size={42} color={disabled ? C.locked : st === 'done' ? C.ok : C.primary} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700', fontSize: 15.5, color: C.ink }}>{unit.title}</Text>
          <Text style={[F.small, { marginTop: 2 }]} numberOfLines={1}>
            {st === 'soon' ? 'Bientôt disponible dans cette langue' : st === 'locked' ? `Accessible au niveau ${unit.level}` : unit.grammar}
          </Text>
        </View>
        {res ? <Stars n={res.stars} size={14} /> : null}
        {!disabled ? (
          <Pressable onPress={() => router.push(`/dialogue/${unit.id}`)} hitSlop={8} accessibilityRole="button" accessibilityLabel={`Dialogue ${unit.title}`}
            style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: C.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
            <MessagesSquare size={17} color={C.primary} />
          </Pressable>
        ) : null}
      </Pressable>
    );
  }
}

function Stat({ icon: I, color, value, label }: { icon: typeof Flame; color: string; value: string; label: string }) {
  return (
    <View style={[{ flex: 1, backgroundColor: C.card, borderRadius: R.l, padding: 14 }, shadow]}>
      <I size={20} color={color} strokeWidth={2.2} />
      <Text style={{ fontSize: 22, fontWeight: '800', color: C.ink, marginTop: 8 }}>{value}</Text>
      <Text style={[F.small, { fontSize: 12 }]}>{label}</Text>
    </View>
  );
}
