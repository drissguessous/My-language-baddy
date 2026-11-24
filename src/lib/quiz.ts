import { LEVEL_INFO, Level, PHRASE, UNIT, UNITS } from '../data/curriculum';
import { THEME_BY_ID, themeItems } from '../data/vocab';
import { useStore } from './store';

/** Identifiants : mix · unit-<unité> · level-<niveau> · vocab-<thème>. */
export function useQuizSource(id: string) {
  const { profile, progress, unitState } = useStore();
  const lang = profile?.targetLang ?? 'en';
  const open = UNITS.filter((u) => ['open', 'done'].includes(unitState(u)));
  if (id.startsWith('unit-')) {
    const u = UNIT[id.slice(5)];
    return u ? { title: `Quiz · ${u.title}`, ids: u.phrases } : null;
  }
  if (id.startsWith('level-')) {
    const lvl = id.slice(6) as Level;
    if (!LEVEL_INFO[lvl]) return null;
    return { title: `Quiz du niveau ${lvl} · ${LEVEL_INFO[lvl].label}`, ids: open.filter((u) => u.level === lvl).flatMap((u) => u.phrases) };
  }
  if (id.startsWith('vocab-')) {
    const th = THEME_BY_ID[id.slice(6)];
    if (!th) return null;
    const it = themeItems(th, lang);
    return { title: `Quiz · ${th.title}`, ids: [...it.words, ...it.groups] };
  }
  const learned = Object.keys(progress.cards).filter((k) => PHRASE[k]?.t[lang]);
  return { title: 'Quiz express', ids: learned.length >= 4 ? learned : open.flatMap((u) => u.phrases) };
}
