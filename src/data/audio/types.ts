export interface BundledVoice {
  idx: number;
  name: string;
  gender: 'f' | 'm';
  engine: string;
  accent: string;
  license: string;
  passRate: number | null;
}
