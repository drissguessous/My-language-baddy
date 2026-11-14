import React from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { ChevronLeft, ChevronRight, LucideIcon, Star } from 'lucide-react-native';
import { router } from 'expo-router';
import { Text } from './Text';
import { C, F, R, shadow, shadowStrong } from '../theme';
import { LANG, LangCode } from '../data/languages';

export function Screen({ children, scroll = true, style, pad = true, bg = C.bg }: {
  children: React.ReactNode; scroll?: boolean; style?: StyleProp<ViewStyle>; pad?: boolean; bg?: string;
}) {
  const inner = <View style={[{ width: '100%', maxWidth: 680, alignSelf: 'center' }, pad && { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 40 }, style]}>{children}</View>;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bg }} edges={['top', 'left', 'right']}>
      {scroll ? <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>{inner}</ScrollView> : <View style={{ flex: 1 }}>{inner}</View>}
    </SafeAreaView>
  );
}

type Variant = 'primary' | 'accent' | 'soft' | 'ghost' | 'danger' | 'ok' | 'dark';
export function Btn({ title, onPress, variant = 'primary', icon: Icon, iconRight: IconRight, disabled, loading, style, small }: {
  title: string; onPress?: () => void; variant?: Variant; icon?: LucideIcon; iconRight?: LucideIcon; disabled?: boolean; loading?: boolean;
  style?: StyleProp<ViewStyle>; small?: boolean;
}) {
  const bg: Record<Variant, string> = { primary: C.primary, accent: C.accent, soft: C.primarySoft, ghost: 'transparent', danger: C.bad, ok: C.ok, dark: C.ink };
  const fg: Record<Variant, string> = { primary: '#fff', accent: '#fff', soft: C.primaryDark, ghost: C.primary, danger: '#fff', ok: '#fff', dark: '#fff' };
  const lifted = ['primary', 'accent'].includes(variant) && !disabled;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      disabled={disabled || loading}
      onPress={() => { Haptics.selectionAsync().catch(() => {}); onPress?.(); }}
      style={({ pressed }) => [
        s.btn, small && { paddingVertical: 10, paddingHorizontal: 14, borderRadius: R.m },
        { backgroundColor: bg[variant], opacity: disabled ? 0.4 : 1, transform: [{ scale: pressed ? 0.98 : 1 }] },
        variant === 'ghost' && { borderWidth: 1.5, borderColor: C.line, backgroundColor: C.card },
        lifted && !small ? shadowStrong : null, style,
      ]}>
      {loading ? <ActivityIndicator color={fg[variant]} /> : (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          {Icon ? <Icon size={small ? 16 : 19} color={fg[variant]} strokeWidth={2.2} /> : null}
          <Text style={[s.btnText, small && { fontSize: 14 }, { color: fg[variant] }]}>{title}</Text>
          {IconRight ? <IconRight size={small ? 16 : 19} color={fg[variant]} strokeWidth={2.2} /> : null}
        </View>
      )}
    </Pressable>
  );
}

export function Card({ children, style, onPress, tone, flat }: { children: React.ReactNode; style?: StyleProp<ViewStyle>; onPress?: () => void; tone?: string; flat?: boolean }) {
  const body = <View style={[s.card, !flat && !tone ? shadow : null, tone ? { backgroundColor: tone, borderColor: 'transparent' } : null, style]}>{children}</View>;
  if (!onPress) return body;
  return <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => ({ opacity: pressed ? 0.92 : 1, transform: [{ scale: pressed ? 0.99 : 1 }] })}>{body}</Pressable>;
}

export function Chip({ label, active, onPress, color, icon: Icon }: { label: string; active?: boolean; onPress?: () => void; color?: string; icon?: LucideIcon }) {
  const c = color ?? C.primary;
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ selected: !!active }} onPress={onPress}
      style={[s.chip, active && { backgroundColor: c, borderColor: c }]}>
      {Icon ? <Icon size={15} color={active ? '#fff' : C.sub} strokeWidth={2.2} /> : null}
      <Text style={{ fontWeight: '600', fontSize: 14, color: active ? '#fff' : C.ink }}>{label}</Text>
    </Pressable>
  );
}

export function Bar({ value, color = C.primary, height = 8, track = '#ECE9E2' }: { value: number; color?: string; height?: number; track?: string }) {
  return (
    <View style={{ height, backgroundColor: track, borderRadius: R.pill, overflow: 'hidden' }}>
      <View style={{ width: `${Math.round(Math.max(0, Math.min(1, value)) * 100)}%`, height, backgroundColor: color, borderRadius: R.pill }} />
    </View>
  );
}

export function Stars({ n, size = 16 }: { n: number; size?: number }) {
  return (
    <View style={{ flexDirection: 'row', gap: 2 }}>
      {[0, 1, 2].map((i) => <Star key={i} size={size} color={C.gold} fill={i < n ? C.gold : 'transparent'} strokeWidth={2} />)}
    </View>
  );
}

/** Monogramme de langue : nom natif abrégé sur pastille teintée. */
export function LangBadge({ code, size = 36 }: { code: LangCode; size?: number }) {
  const l = LANG[code];
  return (
    <View style={{ width: size, height: size, borderRadius: size * 0.3, backgroundColor: l.color + '1F', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: l.color, fontWeight: '800', fontSize: size * (l.emblem.length > 1 ? 0.36 : 0.46) }}>{l.emblem}</Text>
    </View>
  );
}

export function IconTile({ icon: Icon, color = C.primary, bg, size = 44 }: { icon: LucideIcon; color?: string; bg?: string; size?: number }) {
  return (
    <View style={{ width: size, height: size, borderRadius: size * 0.32, backgroundColor: bg ?? color + '18', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={size * 0.48} color={color} strokeWidth={2} />
    </View>
  );
}

export function T({ children, style, v = 'body', numberOfLines }: { children: React.ReactNode; style?: StyleProp<TextStyle>; v?: keyof typeof F; numberOfLines?: number }) {
  return <Text numberOfLines={numberOfLines} style={[F[v], style]}>{children}</Text>;
}

export const Gap = ({ h = 12 }: { h?: number }) => <View style={{ height: h }} />;

export function Row({ children, style, gap = 10 }: { children: React.ReactNode; style?: StyleProp<ViewStyle>; gap?: number }) {
  return <View style={[{ flexDirection: 'row', alignItems: 'center', gap }, style]}>{children}</View>;
}

export function Section({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  return (
    <Row style={{ justifyContent: 'space-between', marginTop: 26, marginBottom: 12 }}>
      <T v="h2">{title}</T>
      {action ? <Text onPress={onAction} style={{ color: C.primary, fontWeight: '700', fontSize: 14 }}>{action}</Text> : null}
    </Row>
  );
}

/** Ligne de liste : icône, titre, sous-titre, chevron. */
export function ListItem({ icon, title, subtitle, onPress, right, color = C.primary, last }: {
  icon?: LucideIcon; title: string; subtitle?: string; onPress?: () => void; right?: React.ReactNode; color?: string; last?: boolean;
}) {
  return (
    <Pressable onPress={onPress} disabled={!onPress} accessibilityRole={onPress ? 'button' : undefined}
      style={({ pressed }) => [{ flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 14, opacity: pressed ? 0.7 : 1 },
        !last && { borderBottomWidth: StyleSheet.hairlineWidth, borderColor: C.line }]}>
      {icon ? <IconTile icon={icon} color={color} size={40} /> : null}
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: '700', fontSize: 15.5, color: C.ink }}>{title}</Text>
        {subtitle ? <Text style={[F.small, { marginTop: 2 }]}>{subtitle}</Text> : null}
      </View>
      {right ?? (onPress ? <ChevronRight size={20} color={C.muted} /> : null)}
    </Pressable>
  );
}

export function BackBar({ title, onBack }: { title?: string; onBack?: () => void }) {
  return (
    <Row style={{ marginBottom: 8 }}>
      <Pressable onPress={onBack ?? (() => router.back())} accessibilityRole="button" accessibilityLabel="Retour" hitSlop={12}
        style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: C.card, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: C.line }}>
        <ChevronLeft size={22} color={C.ink} />
      </Pressable>
      {title ? <T v="h2">{title}</T> : null}
    </Row>
  );
}

const s = StyleSheet.create({
  btn: { paddingVertical: 15, paddingHorizontal: 22, borderRadius: R.l, alignItems: 'center', justifyContent: 'center' },
  btnText: { fontSize: 16, fontWeight: '700', textAlign: 'center' },
  card: { backgroundColor: C.card, borderRadius: R.l, padding: 18, borderWidth: 1, borderColor: '#EFECE6' },
  chip: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 9, paddingHorizontal: 14, borderRadius: R.pill, borderWidth: 1.5, borderColor: C.line, backgroundColor: C.card },
});
