import { Platform } from 'react-native';

export const C = {
  bg: '#F6F1E9',        // sable
  card: '#FFFFFF',
  ink: '#1E2A32',
  sub: '#5E6B73',
  line: '#E6DED2',
  primary: '#1F6F78',   // sarcelle
  primarySoft: '#DCEDEE',
  accent: '#E8735A',    // corail
  accentSoft: '#FBE4DD',
  gold: '#E9B44C',
  goldSoft: '#FBF0D6',
  ok: '#2E9E6A',
  okSoft: '#DDF2E7',
  warn: '#D98E1F',
  bad: '#C8553D',
  badSoft: '#F8E0DA',
  locked: '#B9B2A6',
};

export const R = { s: 10, m: 16, l: 24, pill: 999 };

export const F = {
  title: { fontSize: 26, fontWeight: '800' as const, color: C.ink, letterSpacing: -0.4 },
  h2: { fontSize: 19, fontWeight: '700' as const, color: C.ink },
  body: { fontSize: 16, color: C.ink, lineHeight: 23 },
  small: { fontSize: 13, color: C.sub },
  label: { fontSize: 12, fontWeight: '700' as const, color: C.sub, letterSpacing: 0.8, textTransform: 'uppercase' as const },
};

export const shadow = Platform.select({
  web: { boxShadow: '0 2px 10px rgba(30,42,50,0.08)' } as object,
  default: { shadowColor: '#1E2A32', shadowOpacity: 0.08, shadowRadius: 10, shadowOffset: { width: 0, height: 2 }, elevation: 2 },
});
