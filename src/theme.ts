import { Platform } from 'react-native';

// Charte My Language Baddy : sarcelle profonde + corail, fond ivoire, typographie Plus Jakarta Sans.
export const C = {
  bg: '#F7F6F2',
  card: '#FFFFFF',
  ink: '#101828',
  sub: '#5B6474',
  muted: '#98A2B3',
  line: '#E9E6DF',
  primary: '#0F766E',
  primaryDark: '#0B5550',
  primarySoft: '#E3F2EF',
  accent: '#F2613F',
  accentSoft: '#FDEBE5',
  gold: '#E9A23B',
  goldSoft: '#FBF1DE',
  violet: '#6D5BD0',
  violetSoft: '#EEEBFB',
  ok: '#12936A',
  okSoft: '#E4F6EE',
  warn: '#D97706',
  bad: '#D92D20',
  badSoft: '#FDECEA',
  locked: '#B4B0A8',
  night: '#0B2E2B',
};

export const R = { s: 10, m: 14, l: 20, xl: 28, pill: 999 };

export const FONT = {
  regular: 'PlusJakartaSans_400Regular',
  medium: 'PlusJakartaSans_500Medium',
  semibold: 'PlusJakartaSans_600SemiBold',
  bold: 'PlusJakartaSans_700Bold',
  extrabold: 'PlusJakartaSans_800ExtraBold',
};

export const F = {
  display: { fontSize: 32, fontWeight: '800' as const, color: C.ink, letterSpacing: -0.8, lineHeight: 38 },
  title: { fontSize: 26, fontWeight: '800' as const, color: C.ink, letterSpacing: -0.5, lineHeight: 32 },
  h2: { fontSize: 18, fontWeight: '700' as const, color: C.ink, letterSpacing: -0.2 },
  body: { fontSize: 16, color: C.ink, lineHeight: 23 },
  small: { fontSize: 13, color: C.sub, lineHeight: 18 },
  label: { fontSize: 11.5, fontWeight: '700' as const, color: C.sub, letterSpacing: 0.9, textTransform: 'uppercase' as const },
};

export const shadow = Platform.select({
  web: { boxShadow: '0 1px 2px rgba(16,24,40,0.04), 0 4px 16px rgba(16,24,40,0.06)' } as object,
  default: { shadowColor: '#101828', shadowOpacity: 0.07, shadowRadius: 14, shadowOffset: { width: 0, height: 4 }, elevation: 2 },
});

export const shadowStrong = Platform.select({
  web: { boxShadow: '0 8px 30px rgba(15,118,110,0.22)' } as object,
  default: { shadowColor: '#0F766E', shadowOpacity: 0.22, shadowRadius: 20, shadowOffset: { width: 0, height: 8 }, elevation: 6 },
});
