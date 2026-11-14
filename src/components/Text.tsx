import React from 'react';
import { StyleSheet, Text as RNText, TextInput as RNTextInput, TextInputProps, TextProps, TextStyle } from 'react-native';
import { FONT } from '../theme';

// Texte de l'application : applique la police Plus Jakarta Sans selon la graisse demandée.
// Les écritures non latines (arabe, devanagari, chinois, japonais, tifinagh) passent par la police
// système de secours, qui les affiche correctement.

function family(weight?: TextStyle['fontWeight']): string {
  switch (String(weight ?? '400')) {
    case '800': case '900': return FONT.extrabold;
    case '700': case 'bold': return FONT.bold;
    case '600': return FONT.semibold;
    case '500': return FONT.medium;
    default: return FONT.regular;
  }
}

function withFont(style: TextProps['style']) {
  const flat = (StyleSheet.flatten(style) ?? {}) as TextStyle;
  if (flat.fontFamily) return style;
  const { fontWeight, ...rest } = flat;
  return [rest, { fontFamily: family(fontWeight) }];
}

export function Text(props: TextProps) {
  return <RNText {...props} style={withFont(props.style)} />;
}

export function TextInput(props: TextInputProps) {
  return <RNTextInput placeholderTextColor="#98A2B3" {...props} style={withFont(props.style as TextProps['style']) as TextInputProps['style']} />;
}
