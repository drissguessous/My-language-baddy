import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { Text } from './Text';
import { C } from '../theme';

/** Emblème : deux bulles de dialogue qui se répondent (apprendre = converser). */
export const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
<rect width="120" height="120" rx="30" fill="#0F766E"/>
<path d="M28 34h44a12 12 0 0 1 12 12v18a12 12 0 0 1-12 12H50l-14 11v-11h-8a12 12 0 0 1-12-12V46a12 12 0 0 1 12-12z" fill="#FFFFFF"/>
<path d="M70 52h22a10 10 0 0 1 10 10v14a10 10 0 0 1-10 10h-4v9l-11-9h-7a10 10 0 0 1-10-10V62a10 10 0 0 1 10-10z" fill="#F2613F"/>
<circle cx="33" cy="55" r="4" fill="#0F766E"/><circle cx="44" cy="55" r="4" fill="#0F766E"/><circle cx="55" cy="55" r="4" fill="#0F766E"/>
</svg>`;

export function LogoMark({ size = 56 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      <Rect width={120} height={120} rx={30} fill={C.primary} />
      <Path d="M28 34h44a12 12 0 0 1 12 12v18a12 12 0 0 1-12 12H50l-14 11v-11h-8a12 12 0 0 1-12-12V46a12 12 0 0 1 12-12z" fill="#FFFFFF" />
      <Path d="M70 52h22a10 10 0 0 1 10 10v14a10 10 0 0 1-10 10h-4v9l-11-9h-7a10 10 0 0 1-10-10V62a10 10 0 0 1 10-10z" fill={C.accent} />
      <Circle cx={33} cy={55} r={4} fill={C.primary} /><Circle cx={44} cy={55} r={4} fill={C.primary} /><Circle cx={55} cy={55} r={4} fill={C.primary} />
    </Svg>
  );
}

export function Wordmark({ size = 28, light = false }: { size?: number; light?: boolean }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: size * 0.4 }}>
      <LogoMark size={size * 1.5} />
      <Text style={{ fontSize: size, fontWeight: '800', letterSpacing: -0.6, color: light ? '#fff' : C.ink }}>
        My Language <Text style={{ fontSize: size, fontWeight: '800', color: C.accent }}>Baddy</Text>
      </Text>
    </View>
  );
}
