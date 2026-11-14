import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { AVATARS } from '../data/avatars';
import { C } from '../theme';

/**
 * Portrait d'un compagnon (illustration « Notionists »). Quand il parle, la bouche s'anime
 * et un halo discret pulse autour du portrait.
 */
export function Avatar({ id, size = 96, speaking = false, ring = false }: {
  id: string; size?: number; speaking?: boolean; ring?: boolean; mood?: string;
}) {
  const a = AVATARS[id] ?? AVATARS.nadia;
  const [open, setOpen] = useState(false);
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!speaking) { setOpen(false); pulse.stopAnimation(); pulse.setValue(0); return; }
    const t = setInterval(() => setOpen((o) => !o), 170);
    const loop = Animated.loop(Animated.sequence([
      Animated.timing(pulse, { toValue: 1, duration: 700, useNativeDriver: false }),
      Animated.timing(pulse, { toValue: 0, duration: 700, useNativeDriver: false }),
    ]));
    loop.start();
    return () => { clearInterval(t); loop.stop(); };
  }, [speaking, pulse]);

  const halo = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.12] });
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      {speaking || ring ? (
        <Animated.View style={{
          position: 'absolute', width: size, height: size, borderRadius: size / 2,
          borderWidth: 3, borderColor: speaking ? C.accent : C.primarySoft, opacity: speaking ? 0.55 : 1,
          transform: [{ scale: speaking ? halo : 1 }],
        }} />
      ) : null}
      <SvgXml xml={speaking && open ? a.talk : a.idle} width={size * (ring || speaking ? 0.88 : 1)} height={size * (ring || speaking ? 0.88 : 1)} />
    </View>
  );
}
