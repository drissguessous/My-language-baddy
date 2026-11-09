import React from 'react';
import { Text, View } from 'react-native';
import { router } from 'expo-router';
import { Avatar } from '../../components/Avatar';
import { Bar, Card, Gap, LangBadge, Row, Screen, Stars, T } from '../../components/ui';
import { LEVELS, LEVEL_INFO, PRO_TRACKS, UNITS, Unit, levelIndex } from '../../data/curriculum';
import { LANG } from '../../data/languages';
import { useStore } from '../../lib/store';
import { dueCards } from '../../lib/srs';
import { C, F, R } from '../../theme';

export default function Home() {
  const s = useStore();
  const { profile, companion, progress, usage, currentLevel, unitState, band, timeLeft } = s;
  if (!profile) return null;
  const lang = LANG[profile.targetLang];
  const due = dueCards(progress.cards).length;
  const hour = new Date().getHours();
  const hello = hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir';
  const goalRatio = Math.min(1, usage.minutesToday / usage.dailyGoal);

  const visible = (u: Unit) => unitState(u) !== 'hidden';
  const proUnits = UNITS.filter((u) => u.pro && visible(u) && (profile.goal !== 'pro' || u.pro === profile.proTrack || band === 'adult'))
    .sort((a, b) => (a.pro === profile.proTrack ? -1 : 0) - (b.pro === profile.proTrack ? -1 : 0));
  const kidsUnits = UNITS.filter((u) => u.kids && visible(u));
  const nextUnit = [...kidsUnits, ...UNITS.filter((u) => !u.pro && !u.kids)].find((u) => unitState(u) === 'open')
    ?? proUnits.find((u) => unitState(u) === 'open');

  return (
    <Screen>
      <Row style={{ justifyContent: 'space-between' }}>
        <View>
          <T v="small">{hello},</T>
          <T v="title">{profile.name}</T>
        </View>
        <Row gap={8}>
          <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 22 }}>🔥</Text><Text style={F.small}>{usage.streak} j</Text></View>
          <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 22 }}>⭐</Text><Text style={F.small}>{progress.xp} XP</Text></View>
          <LangBadge code={lang.code} size={40} />
        </Row>
      </Row>
      <Gap h={16} />

      <Card tone={C.primary}>
        <Row style={{ alignItems: 'flex-start' }}>
          <Avatar spec={companion.avatar} size={84} />
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#fff', opacity: 0.85, fontWeight: '600' }}>{companion.name} · {lang.name} {currentLevel}</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700', marginTop: 4 }}>
              {nextUnit ? `On continue avec « ${nextUnit.title} » ?` : 'Bravo, tout est terminé pour ce niveau !'}
            </Text>
            {nextUnit ? <Text style={{ color: '#fff', opacity: 0.85, marginTop: 4 }}>{nextUnit.scene}</Text> : null}
          </View>
        </Row>
        {nextUnit ? (
          <View style={{ marginTop: 14, backgroundColor: '#fff', borderRadius: R.m, paddingVertical: 12, alignItems: 'center' }}>
            <Text onPress={() => router.push(`/lesson/${nextUnit.id}`)} style={{ color: C.primary, fontWeight: '800', fontSize: 16 }} accessibilityRole="button">
              ▶  Commencer la leçon
            </Text>
          </View>
        ) : null}
      </Card>
      <Gap />

      <Row gap={12}>
        <Card style={{ flex: 1 }} onPress={() => router.push('/lesson/review')}>
          <T v="label">Révisions</T>
          <Text style={{ fontSize: 24, fontWeight: '800', color: due ? C.accent : C.ok, marginTop: 4 }}>{due}</Text>
          <T v="small">{due ? 'phrases à revoir' : 'à jour'}</T>
        </Card>
        <Card style={{ flex: 1 }}>
          <T v="label">Objectif du jour</T>
          <Text style={{ fontSize: 24, fontWeight: '800', color: C.ink, marginTop: 4 }}>{usage.minutesToday}<Text style={F.small}> / {usage.dailyGoal} min</Text></Text>
          <Gap h={6} /><Bar value={goalRatio} color={C.gold} />
          {timeLeft !== null ? <T v="small" style={{ marginTop: 6 }}>Temps restant : {timeLeft} min</T> : null}
        </Card>
      </Row>

      {profile.goal === 'remise' && !progress.placement ? (
        <>
          <Gap />
          <Card tone={C.goldSoft} onPress={() => router.push('/placement')}>
            <T v="h2">Test de positionnement</T>
            <T v="small" style={{ marginTop: 4, fontSize: 14 }}>12 questions pour reprendre au bon niveau.</T>
          </Card>
        </>
      ) : null}

      {kidsUnits.length ? <Section title="Mon premier parcours" units={kidsUnits} /> : null}

      {proUnits.length ? (
        <Section title={profile.goal === 'pro' ? `Ma filière · ${PRO_TRACKS.find((t) => t.id === profile.proTrack)?.title ?? ''}` : 'Langue professionnelle'}
          units={proUnits} />
      ) : null}

      {LEVELS.map((lvl) => {
        const units = UNITS.filter((u) => u.level === lvl && !u.pro && !u.kids && visible(u));
        if (!units.length) return null;
        const done = units.filter((u) => progress.units[u.id]).length;
        const locked = levelIndex(lvl) > levelIndex(currentLevel);
        return (
          <View key={lvl}>
            <Gap h={22} />
            <Row style={{ justifyContent: 'space-between' }}>
              <Row gap={8}>
                <View style={{ backgroundColor: locked ? C.locked : C.ink, borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 }}>
                  <Text style={{ color: '#fff', fontWeight: '800' }}>{lvl}</Text>
                </View>
                <T v="h2" style={{ color: locked ? C.locked : C.ink }}>{LEVEL_INFO[lvl].label}</T>
              </Row>
              <T v="small">{done}/{units.length}</T>
            </Row>
            <T v="small" style={{ marginTop: 4 }}>{LEVEL_INFO[lvl].can}</T>
            <Gap h={10} />
            {units.map((u) => <UnitCard key={u.id} unit={u} />)}
          </View>
        );
      })}
      <Gap h={20} />
    </Screen>
  );

  function Section({ title, units }: { title: string; units: Unit[] }) {
    return (
      <View>
        <Gap h={22} />
        <T v="h2">{title}</T>
        <Gap h={10} />
        {units.map((u) => <UnitCard key={u.id} unit={u} />)}
      </View>
    );
  }

  function UnitCard({ unit }: { unit: Unit }) {
    const st = unitState(unit);
    const res = progress.units[unit.id];
    const icon = unit.pro ? PRO_TRACKS.find((t) => t.id === unit.pro)?.icon : unit.kids ? '🎨' : undefined;
    const disabled = st === 'locked' || st === 'soon';
    return (
      <Card style={{ marginBottom: 10, opacity: disabled ? 0.6 : 1 }} onPress={disabled ? undefined : () => router.push(`/lesson/${unit.id}`)}>
        <Row style={{ alignItems: 'flex-start' }}>
          <View style={{ width: 44, height: 44, borderRadius: 14, backgroundColor: st === 'done' ? C.okSoft : disabled ? C.line : C.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>{st === 'locked' ? '🔒' : st === 'soon' ? '⏳' : st === 'done' ? '✓' : icon ?? '▶'}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Row style={{ justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: '700', fontSize: 16, color: C.ink, flex: 1 }}>{unit.title}</Text>
              {res ? <Stars n={res.stars} /> : <T v="small">{unit.level}</T>}
            </Row>
            <T v="small" style={{ marginTop: 3 }}>{st === 'soon' ? 'Bientôt disponible dans cette langue' : st === 'locked' ? `Débloqué au niveau ${unit.level}` : unit.grammar}</T>
          </View>
          {st === 'done' || st === 'open' ? (
            <Text onPress={() => router.push(`/dialogue/${unit.id}`)} accessibilityRole="button" accessibilityLabel={`Dialogue ${unit.title}`}
              style={{ fontSize: 20, paddingHorizontal: 6 }}>💬</Text>
          ) : null}
        </Row>
      </Card>
    );
  }
}
