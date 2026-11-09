import React from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { C, F, R, shadow } from '../theme';
import { LANG, LangCode } from '../data/languages';

export function Screen({ children, scroll = true, style, pad = true }: {
  children: React.ReactNode; scroll?: boolean; style?: StyleProp<ViewStyle>; pad?: boolean;
}) {
  const inner = <View style={[{ width: '100%', maxWidth: 720, alignSelf: 'center' }, pad && { padding: 18, paddingBottom: 40 }, style]}>{children}</View>;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }} edges={['top', 'left', 'right']}>
      {scroll ? <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }}>{inner}</ScrollView> : <View style={{ flex: 1 }}>{inner}</View>}
    </SafeAreaView>
  );
}

type Variant = 'primary' | 'accent' | 'soft' | 'ghost' | 'danger' | 'ok';
export function Btn({ title, onPress, variant = 'primary', icon, disabled, loading, style, small }: {
  title: string; onPress?: () => void; variant?: Variant; icon?: string; disabled?: boolean; loading?: boolean;
  style?: StyleProp<ViewStyle>; small?: boolean;
}) {
  const bg: Record<Variant, string> = { primary: C.primary, accent: C.accent, soft: C.primarySoft, ghost: 'transparent', danger: C.bad, ok: C.ok };
  const fg: Record<Variant, string> = { primary: '#fff', accent: '#fff', soft: C.primary, ghost: C.primary, danger: '#fff', ok: '#fff' };
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      disabled={disabled || loading}
      onPress={() => { Haptics.selectionAsync().catch(() => {}); onPress?.(); }}
      style={({ pressed }) => [
        s.btn, small && { paddingVertical: 9, paddingHorizontal: 14 },
        { backgroundColor: bg[variant], opacity: disabled ? 0.45 : pressed ? 0.85 : 1, transform: [{ scale: pressed ? 0.98 : 1 }] },
        variant === 'ghost' && { borderWidth: 1.5, borderColor: C.primary }, style,
      ]}>
      {loading ? <ActivityIndicator color={fg[variant]} /> : (
        <Text style={[s.btnText, small && { fontSize: 14 }, { color: fg[variant] }]}>{icon ? `${icon}  ` : ''}{title}</Text>
      )}
    </Pressable>
  );
}

export function Card({ children, style, onPress, tone }: { children: React.ReactNode; style?: StyleProp<ViewStyle>; onPress?: () => void; tone?: string }) {
  const body = <View style={[s.card, shadow, tone ? { backgroundColor: tone } : null, style]}>{children}</View>;
  if (!onPress) return body;
  return <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}>{body}</Pressable>;
}

export function Chip({ label, active, onPress, color }: { label: string; active?: boolean; onPress?: () => void; color?: string }) {
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ selected: !!active }} onPress={onPress}
      style={[s.chip, active && { backgroundColor: color ?? C.primary, borderColor: color ?? C.primary }]}>
      <Text style={{ fontWeight: '600', color: active ? '#fff' : C.ink }}>{label}</Text>
    </Pressable>
  );
}

export function Bar({ value, color = C.primary, height = 8 }: { value: number; color?: string; height?: number }) {
  return (
    <View style={{ height, backgroundColor: C.line, borderRadius: R.pill, overflow: 'hidden' }}>
      <View style={{ width: `${Math.round(Math.max(0, Math.min(1, value)) * 100)}%`, height, backgroundColor: color, borderRadius: R.pill }} />
    </View>
  );
}

export function Stars({ n, size = 16 }: { n: number; size?: number }) {
  return <Text style={{ fontSize: size, letterSpacing: 1 }}>{[0, 1, 2].map((i) => (i < n ? '★' : '☆')).join('')}</Text>;
}

export function LangBadge({ code, size = 36 }: { code: LangCode; size?: number }) {
  const l = LANG[code];
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: l.color, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#fff', fontWeight: '800', fontSize: size * 0.42 }}>{l.emblem}</Text>
    </View>
  );
}

export function T({ children, style, v = 'body' }: { children: React.ReactNode; style?: StyleProp<TextStyle>; v?: keyof typeof F }) {
  return <Text style={[F[v], style]}>{children}</Text>;
}

export const Gap = ({ h = 12 }: { h?: number }) => <View style={{ height: h }} />;

export function Row({ children, style, gap = 10 }: { children: React.ReactNode; style?: StyleProp<ViewStyle>; gap?: number }) {
  return <View style={[{ flexDirection: 'row', alignItems: 'center', gap }, style]}>{children}</View>;
}

const s = StyleSheet.create({
  btn: { paddingVertical: 14, paddingHorizontal: 20, borderRadius: R.m, alignItems: 'center', justifyContent: 'center' },
  btnText: { fontSize: 16, fontWeight: '700', textAlign: 'center' },
  card: { backgroundColor: C.card, borderRadius: R.l, padding: 16 },
  chip: { paddingVertical: 9, paddingHorizontal: 14, borderRadius: R.pill, borderWidth: 1.5, borderColor: C.line, backgroundColor: C.card },
});
