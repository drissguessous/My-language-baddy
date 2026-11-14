import { createAudioPlayer, setAudioModeAsync, AudioPlayer } from 'expo-audio';
import { CLIPS, COACH, VOICES } from '../data/audio/manifest';
import type { BundledVoice } from '../data/audio/types';
import type { LangCode } from '../data/languages';
import { fnv } from './hash';

// Lecture des enregistrements intégrés (voix neuronales validées par Whisper).

let player: AudioPlayer | null = null;
let sub: { remove: () => void } | null = null;
let pending: (() => void) | null = null;
let modeSet = false;

export function bundledVoices(lang: LangCode): BundledVoice[] {
  return VOICES[lang] ?? [];
}

/** Index de voix préféré : 0/1 selon le genre demandé, sinon la première. */
export function voiceIndex(lang: LangCode, gender?: 'f' | 'm', explicit?: number): number {
  const list = bundledVoices(lang);
  if (explicit !== undefined && list[explicit]) return explicit;
  const i = list.findIndex((v) => v.gender === gender);
  return i >= 0 ? i : 0;
}

/** Source audio d'une phrase dans la voix demandée, ou dans l'autre voix si celle-ci n'a pas été validée. */
export function phraseClip(pid: string, lang: LangCode, idx: number): number | undefined {
  return CLIPS[`${lang}/${pid}/${idx}`] ?? CLIPS[`${lang}/${pid}/${idx === 0 ? 1 : 0}`];
}

export function coachClip(text: string, gender: 'f' | 'm'): number | undefined {
  const h = fnv(text);
  return COACH[`${h}-${gender}`] ?? COACH[`${h}-${gender === 'f' ? 'm' : 'f'}`];
}

export function stopClip() {
  const done = pending; pending = null;
  sub?.remove(); sub = null;
  try { player?.pause(); } catch { /* lecteur déjà libéré */ }
  done?.();
}

export async function playClip(source: number, opts: { rate?: number; onDone?: () => void; onStart?: () => void } = {}): Promise<boolean> {
  try {
    if (!modeSet) { modeSet = true; await setAudioModeAsync({ playsInSilentMode: true }).catch(() => {}); }
    stopClip();
    if (!player) player = createAudioPlayer(source);
    else player.replace(source);
    pending = opts.onDone ?? null;
    sub = player.addListener('playbackStatusUpdate', (st) => {
      if (st.didJustFinish) { const d = pending; pending = null; sub?.remove(); sub = null; d?.(); }
    });
    if (opts.rate && opts.rate !== 1) player.setPlaybackRate(opts.rate, 'high');
    else player.setPlaybackRate(1);
    await player.seekTo(0).catch(() => {});
    player.play();
    opts.onStart?.();
    return true;
  } catch {
    pending = null;
    return false;
  }
}
