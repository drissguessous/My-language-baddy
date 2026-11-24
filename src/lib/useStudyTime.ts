import { useEffect, useRef } from 'react';
import { useStore } from './store';

/** Compte le temps passé sur un écran d'apprentissage (plafonné par séance, voir GOAL_PARAMS). */
export function useStudyTime() {
  const { addMinutes } = useStore();
  const add = useRef(addMinutes);
  add.current = addMinutes;
  useEffect(() => {
    const start = Date.now();
    return () => add.current((Date.now() - start) / 60000);
  }, []);
}
