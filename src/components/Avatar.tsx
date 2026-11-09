import React, { useEffect, useState } from 'react';
import Svg, { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';
import type { AvatarSpec } from '../data/companions';

// Portrait illustré d'un compagnon humain. Clignement des yeux et bouche animée quand il parle.

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const c = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
  const r = c(n >> 16), g = c((n >> 8) & 255), b = c(n & 255);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export function Avatar({ spec, size = 96, speaking = false, mood = 'smile' }: {
  spec: AvatarSpec; size?: number; speaking?: boolean; mood?: 'smile' | 'wow' | 'calm';
}) {
  const [blink, setBlink] = useState(false);
  const [mouthOpen, setMouthOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => { setBlink(true); setTimeout(() => setBlink(false), 140); }, 3800 + Math.random() * 1500);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (!speaking) { setMouthOpen(false); return; }
    const t = setInterval(() => setMouthOpen((m) => !m), 160);
    return () => clearInterval(t);
  }, [speaking]);

  const { skin, hair, hairStyle, outfit, accent } = spec;
  const skinShade = shade(skin, -0.08);
  const hairHi = shade(hair, 0.12);

  return (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      <Circle cx={60} cy={60} r={60} fill={shade(accent, 0.3)} />
      <Circle cx={60} cy={60} r={52} fill={shade(accent, 0.38)} />

      {/* Cheveux arrière */}
      {hairStyle === 'long' && <Path d="M30 50 Q30 18 60 18 Q90 18 90 50 L94 98 Q60 108 26 98 Z" fill={hair} />}
      {hairStyle === 'waves' && <Path d="M30 48 Q28 16 60 16 Q92 16 90 48 Q98 70 90 92 Q60 102 30 92 Q22 70 30 48 Z" fill={hair} />}
      {hairStyle === 'curly' && (
        <G fill={hair}>
          {[[36, 34], [48, 24], [62, 21], [76, 25], [86, 36], [90, 50], [30, 50], [32, 64], [88, 64]].map(([x, y], i) => (
            <Circle key={i} cx={x} cy={y} r={12} />
          ))}
        </G>
      )}
      {hairStyle === 'ponytail' && <Path d="M84 34 Q104 44 96 76 Q92 64 84 56 Z" fill={hair} />}
      {hairStyle === 'bun' && <Circle cx={60} cy={16} r={11} fill={hair} />}
      {hairStyle === 'hijab' && <Path d="M24 58 Q22 14 60 14 Q98 14 96 58 L102 112 L18 112 Z" fill={hair} />}

      {/* Buste et tenue */}
      <Path d="M22 120 Q24 92 60 90 Q96 92 98 120 Z" fill={outfit} />
      <Path d="M48 92 L60 104 L72 92" stroke={shade(outfit, -0.15)} strokeWidth={3} fill="none" />
      <Rect x={52} y={74} width={16} height={18} rx={6} fill={skinShade} />
      {hairStyle === 'hijab' && <Path d="M30 96 Q60 112 90 96 L96 120 L24 120 Z" fill={hair} />}

      {/* Oreilles */}
      {hairStyle !== 'hijab' && (
        <G fill={skinShade}>
          <Ellipse cx={35} cy={56} rx={5} ry={7} />
          <Ellipse cx={85} cy={56} rx={5} ry={7} />
        </G>
      )}
      {spec.earrings && hairStyle !== 'hijab' && (
        <G fill={spec.accent}><Circle cx={35} cy={65} r={2.6} /><Circle cx={85} cy={65} r={2.6} /></G>
      )}

      {/* Visage */}
      <Ellipse cx={60} cy={54} rx={25} ry={28} fill={skin} />
      {spec.beard && <Path d="M38 58 Q40 84 60 86 Q80 84 82 58 Q76 74 60 74 Q44 74 38 58 Z" fill={hair} opacity={0.85} />}

      {/* Cheveux avant / frange */}
      {hairStyle === 'short' && <Path d="M34 50 Q32 24 60 22 Q88 24 86 50 Q80 34 66 32 Q54 38 40 36 Q36 42 34 50 Z" fill={hair} />}
      {hairStyle === 'long' && <Path d="M35 48 Q38 24 60 24 Q84 24 86 50 Q74 34 56 34 Q44 36 35 48 Z" fill={hair} />}
      {hairStyle === 'waves' && <Path d="M35 50 Q36 24 60 24 Q86 26 85 48 Q76 30 62 36 Q48 30 35 50 Z" fill={hair} />}
      {hairStyle === 'curly' && <Path d="M36 44 Q42 28 60 28 Q78 28 84 44 Q72 36 60 38 Q48 36 36 44 Z" fill={hairHi} />}
      {hairStyle === 'ponytail' && <Path d="M35 48 Q36 24 60 24 Q84 24 85 46 Q70 32 52 36 Q42 38 35 48 Z" fill={hair} />}
      {hairStyle === 'bun' && <Path d="M35 48 Q36 24 60 24 Q84 24 85 48 Q78 32 60 32 Q42 32 35 48 Z" fill={hair} />}
      {hairStyle === 'hijab' && <Path d="M34 46 Q36 26 60 26 Q84 26 86 46 Q74 34 60 34 Q46 34 34 46 Z" fill={hairHi} />}
      {hairStyle === 'bald' && <Path d="M38 40 Q60 26 82 40" stroke={hair} strokeWidth={2} fill="none" />}

      {/* Sourcils */}
      <G stroke={shade(hair, -0.05)} strokeWidth={2.6} strokeLinecap="round" fill="none">
        <Path d={mood === 'wow' ? 'M43 41 Q49 36 55 40' : 'M43 43 Q49 40 55 42'} />
        <Path d={mood === 'wow' ? 'M65 40 Q71 36 77 41' : 'M65 42 Q71 40 77 43'} />
      </G>

      {/* Yeux */}
      {blink ? (
        <G stroke="#2A1D17" strokeWidth={2.4} strokeLinecap="round">
          <Path d="M45 52 L55 52" /><Path d="M65 52 L75 52" />
        </G>
      ) : (
        <G>
          <Ellipse cx={50} cy={52} rx={5.2} ry={5.6} fill="#FFFFFF" />
          <Ellipse cx={70} cy={52} rx={5.2} ry={5.6} fill="#FFFFFF" />
          <Circle cx={50.6} cy={52.6} r={3.2} fill="#2A1D17" />
          <Circle cx={70.6} cy={52.6} r={3.2} fill="#2A1D17" />
          <Circle cx={51.8} cy={51.2} r={1} fill="#FFFFFF" />
          <Circle cx={71.8} cy={51.2} r={1} fill="#FFFFFF" />
        </G>
      )}
      {spec.glasses && (
        <G stroke="#2B2B2B" strokeWidth={1.8} fill="none">
          <Rect x={42} y={45} width={16} height={14} rx={5} />
          <Rect x={62} y={45} width={16} height={14} rx={5} />
          <Path d="M58 51 L62 51" />
        </G>
      )}

      {/* Nez, joues, bouche */}
      <Path d="M60 56 Q57 63 60 65" stroke={shade(skin, -0.2)} strokeWidth={1.8} fill="none" strokeLinecap="round" />
      <Ellipse cx={44} cy={63} rx={4.5} ry={2.6} fill="#E58C7A" opacity={0.35} />
      <Ellipse cx={76} cy={63} rx={4.5} ry={2.6} fill="#E58C7A" opacity={0.35} />
      {speaking && mouthOpen ? (
        <G>
          <Ellipse cx={60} cy={71} rx={6} ry={4.6} fill="#7A2E2A" />
          <Ellipse cx={60} cy={73.2} rx={3.6} ry={1.8} fill="#E07A6E" />
        </G>
      ) : mood === 'wow' ? (
        <Ellipse cx={60} cy={71} rx={4} ry={4.2} fill="#7A2E2A" />
      ) : (
        <Path d={mood === 'calm' ? 'M53 70 Q60 73 67 70' : 'M51 68 Q60 77 69 68'} stroke="#8A3A33" strokeWidth={2.6} fill={mood === 'calm' ? 'none' : '#FFFFFF'} strokeLinecap="round" />
      )}
    </Svg>
  );
}
