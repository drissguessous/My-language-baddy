import React from 'react';
import { View } from 'react-native';
import { CalendarClock, Clock3, Flag, Target } from 'lucide-react-native';
import { Text } from '../components/Text';
import { BackBar, Bar, Btn, Card, Chip, Gap, Row, Screen, Section, T } from '../components/ui';
import { LEVELS, LEVEL_INFO, levelIndex } from '../data/curriculum';
import { GOAL_PARAMS } from '../data/goals';
import { STATUS, frenchDate, goalPlan, inMonths, lastDays, paceText, planLine, thisWeek } from '../lib/goals';
import { useStore } from '../lib/store';
import { C, F } from '../theme';

const WD = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

export default function GoalsScreen() {
  const { profile, usage, goals, setGoals, progress, unitState, currentLevel, band } = useStore();
  if (!profile) return null;
  const tu = band !== 'adult';
  const week = thisWeek(usage.history);
  const days = lastDays(usage.history);
  const maxM = Math.max(usage.dailyGoal, ...days.map((d) => d.minutes));
  const plan = goalPlan(goals, progress, (u) => !['hidden', 'soon'].includes(unitState(u)), currentLevel);
  const levels = LEVELS.filter((l) => levelIndex(l) >= levelIndex(currentLevel) && (band !== 'kid' || levelIndex(l) <= levelIndex('A2')));
  const st = STATUS[plan.status];

  return (
    <Screen>
      <BackBar title={tu ? 'Mes objectifs' : 'Objectifs'} />

      <Section title="Temps par jour" />
      <Card>
        <Row style={{ justifyContent: 'space-between' }}>
          <Row gap={8}><Clock3 size={18} color={C.violet} /><Text style={{ fontWeight: '700', color: C.ink }}>Aujourd’hui</Text></Row>
          <T v="small">{Math.round(usage.minutesToday)} / {usage.dailyGoal} min</T>
        </Row>
        <Gap h={8} />
        <Bar value={usage.minutesToday / usage.dailyGoal} color={C.violet} />
        <Gap h={14} />
        <Row style={{ flexWrap: 'wrap', gap: 8 }}>
          {GOAL_PARAMS.dailyChoices.map((m) => <Chip key={m} label={`${m} min`} active={usage.dailyGoal === m} onPress={() => setGoals({ dailyMinutes: m })} />)}
        </Row>
      </Card>

      <Section title="Jours de pratique par semaine" />
      <Card>
        <Row style={{ justifyContent: 'space-between' }}>
          <Row gap={8}><CalendarClock size={18} color={C.primary} /><Text style={{ fontWeight: '700', color: C.ink }}>Cette semaine</Text></Row>
          <T v="small">{week.days} / {goals.weeklyDays} jours · {Math.round(week.minutes)} min</T>
        </Row>
        <Gap h={8} />
        <Bar value={week.days / goals.weeklyDays} color={C.primary} />
        <Gap h={14} />
        <Row style={{ flexWrap: 'wrap', gap: 8 }}>
          {GOAL_PARAMS.weeklyChoices.map((n) => <Chip key={n} label={`${n} jours`} active={goals.weeklyDays === n} onPress={() => setGoals({ weeklyDays: n })} />)}
        </Row>
        <Gap h={16} />
        <Text style={F.label}>7 derniers jours</Text>
        <Gap h={10} />
        <Row style={{ alignItems: 'flex-end', justifyContent: 'space-between', height: 100 }}>
          {days.map((d, k) => {
            const reached = d.minutes >= usage.dailyGoal;
            return (
              <View key={d.day} style={{ alignItems: 'center', flex: 1 }}>
                <Text style={[F.small, { fontSize: 11, marginBottom: 4 }]}>{d.minutes >= 1 ? Math.round(d.minutes) : ''}</Text>
                <View style={{ width: 22, height: Math.max(4, (d.minutes / maxM) * 60), borderRadius: 7,
                  backgroundColor: reached ? C.ok : d.minutes >= 1 ? C.primary : '#ECE9E2' }} />
                <Text style={[F.small, { marginTop: 6, fontWeight: k === 6 ? '800' : '500' }]}>{WD[d.weekday]}</Text>
              </View>
            );
          })}
        </Row>
        <T v="small" style={{ marginTop: 8 }}>En vert : objectif quotidien atteint.</T>
      </Card>

      <Section title="Niveau à atteindre" />
      <Card>
        <Row style={{ flexWrap: 'wrap', gap: 8 }}>
          <Chip label="Aucun" active={!goals.targetLevel} onPress={() => setGoals({ targetLevel: undefined, deadline: undefined })} />
          {levels.map((l) => (
            <Chip key={l} label={`${l} · ${LEVEL_INFO[l].label}`} active={goals.targetLevel === l}
              onPress={() => setGoals({ targetLevel: l, deadline: goals.deadline ?? inMonths(GOAL_PARAMS.deadlineMonths[1]) })} />
          ))}
        </Row>
        {goals.targetLevel ? (
          <>
            <Gap h={16} />
            <Text style={F.label}>Échéance</Text>
            <Gap h={8} />
            <Row style={{ flexWrap: 'wrap', gap: 8 }}>
              {GOAL_PARAMS.deadlineMonths.map((m) => {
                const d = inMonths(m);
                return <Chip key={m} label={m === 12 ? '1 an' : `${m} mois`} active={goals.deadline === d} onPress={() => setGoals({ deadline: d })} />;
              })}
            </Row>
            {goals.deadline ? <T v="small" style={{ marginTop: 8 }}>Date visée : {frenchDate(goals.deadline)}</T> : null}
          </>
        ) : null}
      </Card>

      <Section title="Rythme" />
      <Card tone={C.primarySoft}>
        <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Row gap={8} style={{ flex: 1 }}><Target size={18} color={C.primary} /><Text style={{ fontWeight: '700', color: C.ink, flex: 1 }}>{planLine(plan, goals.targetLevel, goals.deadline, tu)}</Text></Row>
          {st ? <Text style={{ color: C[st.tone], fontWeight: '800', fontSize: 13 }}>{st.label}</Text> : null}
        </Row>
        {['start', 'on', 'ahead', 'behind'].includes(plan.status) ? (
          <>
            <T v="small" style={{ marginTop: 8 }}>
              Soit environ {plan.minutesPerDay} min par jour sur {goals.weeklyDays} jours par semaine
              (estimation : {GOAL_PARAMS.minutesPerUnit} min par unité).
            </T>
            <T v="small" style={{ marginTop: 4 }}>
              Rythme des {GOAL_PARAMS.paceWindowDays} derniers jours : {plan.recentPerWeek ? paceText(plan.recentPerWeek) : 'aucune unité terminée'}.
            </T>
            {plan.minutesPerDay > usage.dailyGoal ? (
              <>
                <Gap h={12} />
                <Btn small variant="soft" icon={Flag} title={`Passer à ${plan.minutesPerDay} min par jour`}
                  onPress={() => setGoals({ dailyMinutes: plan.minutesPerDay })} />
              </>
            ) : null}
          </>
        ) : null}
      </Card>
      <Gap h={10} />
    </Screen>
  );
}
