import { useCallback, useEffect, useRef, useState } from 'react';
import { LANG, LangCode } from '../data/languages';

// Reconnaissance vocale (Android SpeechRecognizer, iOS SFSpeechRecognizer, Web Speech API)
// via expo-speech-recognition. Le module natif est absent d'Expo Go : on le charge de façon sûre
// et l'application bascule en auto-évaluation s'il manque.

type Mod = typeof import('expo-speech-recognition');
let mod: Mod | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  mod = require('expo-speech-recognition') as Mod;
} catch {
  mod = null;
}

export function recognitionAvailable(lang: LangCode): boolean {
  if (!mod || !LANG[lang].stt.length) return false;
  try {
    return mod.ExpoSpeechRecognitionModule.isRecognitionAvailable();
  } catch {
    return false;
  }
}

export type RecState = 'idle' | 'listening' | 'done' | 'error' | 'denied' | 'unavailable';

export interface Recognition {
  state: RecState;
  transcript: string;
  alternatives: string[];
  volume: number;        // 0..1 pour animer le micro
  durationMs: number;    // durée de parole mesurée
  error?: string;
  start: (contextual?: string[]) => Promise<void>;
  stop: () => void;
  reset: () => void;
}

const noop = () => () => {};

export function useRecognizer(lang: LangCode): Recognition {
  const [state, setState] = useState<RecState>(recognitionAvailable(lang) ? 'idle' : 'unavailable');
  const [transcript, setTranscript] = useState('');
  const [alternatives, setAlternatives] = useState<string[]>([]);
  const [volume, setVolume] = useState(0);
  const [durationMs, setDuration] = useState(0);
  const [error, setError] = useState<string>();
  const t0 = useRef(0);
  const firstSound = useRef(0);
  const lastSound = useRef(0);
  const active = useRef(false);

  useEffect(() => {
    setState(recognitionAvailable(lang) ? 'idle' : 'unavailable');
  }, [lang]);

  useEffect(() => {
    if (!mod) return noop();
    const M = mod.ExpoSpeechRecognitionModule;
    const subs = [
      M.addListener('start', () => { t0.current = Date.now(); firstSound.current = 0; lastSound.current = 0; }),
      M.addListener('result', (e) => {
        if (!active.current) return;
        const list = e.results.map((r) => r.transcript).filter(Boolean);
        if (list.length) { setTranscript(list[0]); setAlternatives(list); }
        if (e.isFinal) {
          const start = firstSound.current || t0.current;
          const end = lastSound.current || Date.now();
          setDuration(Math.max(0, end - start));
        }
      }),
      M.addListener('volumechange', (e) => {
        const v = Math.max(0, Math.min(1, (e.value + 2) / 12));
        setVolume(v);
        if (e.value > 1) {
          if (!firstSound.current) firstSound.current = Date.now();
          lastSound.current = Date.now();
        }
      }),
      M.addListener('end', () => {
        if (!active.current) return;
        active.current = false;
        setVolume(0);
        setState((s) => (s === 'error' || s === 'denied' ? s : 'done'));
        if (!lastSound.current) setDuration(Date.now() - t0.current);
      }),
      M.addListener('error', (e) => {
        if (!active.current) return;
        if (e.error === 'not-allowed') setState('denied');
        else if (e.error === 'no-speech' || e.error === 'speech-timeout') { setState('done'); }
        else { setState('error'); setError(e.message); }
      }),
    ];
    return () => subs.forEach((s) => s.remove());
  }, []);

  const start = useCallback(async (contextual?: string[]) => {
    if (!mod || !recognitionAvailable(lang)) { setState('unavailable'); return; }
    const M = mod.ExpoSpeechRecognitionModule;
    const perm = await M.requestPermissionsAsync();
    if (!perm.granted) { setState('denied'); return; }
    setTranscript(''); setAlternatives([]); setError(undefined); setDuration(0);
    active.current = true;
    setState('listening');
    M.start({
      lang: LANG[lang].stt[0],
      interimResults: true,
      maxAlternatives: 5,
      continuous: false,
      contextualStrings: contextual,
      volumeChangeEventOptions: { enabled: true, intervalMillis: 120 },
      androidIntentOptions: { EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS: 1500 },
    });
  }, [lang]);

  const stop = useCallback(() => { mod?.ExpoSpeechRecognitionModule.stop(); }, []);
  const reset = useCallback(() => {
    if (active.current) mod?.ExpoSpeechRecognitionModule.abort();
    active.current = false;
    setTranscript(''); setAlternatives([]); setVolume(0); setDuration(0);
    setState(recognitionAvailable(lang) ? 'idle' : 'unavailable');
  }, [lang]);

  return { state, transcript, alternatives, volume, durationMs, error, start, stop, reset };
}
