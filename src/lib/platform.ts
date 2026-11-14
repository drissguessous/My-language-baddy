import { Platform } from 'react-native';

import { OsKind, detectFromUA } from '../data/voiceGuide';

export { OS_LABEL, VOICE_GUIDE } from '../data/voiceGuide';
export type { OsKind } from '../data/voiceGuide';

/** Détecte le système (et Samsung sur Android, dont les menus diffèrent). */
export function detectOs(): OsKind {
  if (Platform.OS === 'ios') return 'ios';
  if (Platform.OS === 'android') {
    const c = Platform.constants as { Manufacturer?: string; Brand?: string };
    return /samsung/i.test(`${c.Manufacturer ?? ''} ${c.Brand ?? ''}`) ? 'samsung' : 'android';
  }
  const nav = (globalThis as { navigator?: { userAgent?: string; maxTouchPoints?: number } }).navigator;
  return detectFromUA(nav?.userAgent ?? '', nav?.maxTouchPoints ?? 0);
}
