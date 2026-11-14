import React from 'react';
import { View } from 'react-native';
import {
  AlarmClock, ArrowLeft, ArrowUp, Ban, Bike, BookOpen, BookUser, BriefcaseBusiness, Building2, Bus, CalendarDays, Candy, Cat, Check,
  CircleHelp, Citrus, Clock3, Coffee, Coins, Compass, ConciergeBell, CreditCard, Croissant, DoorOpen, Earth, Euro, Footprints,
  Hand, HandHeart, HeartHandshake, Hotel, IdCard, Languages, Laptop, LucideIcon, MapPin, Moon, Palette, PartyPopper, PawPrint,
  Receipt, School, Shapes, Ship, Shirt, ShowerHead, Smile, Snowflake, Sparkles, Stethoscope, Sun, Sunset, ThumbsUp, TrainFront,
  TramFront, User, Wrench,
} from 'lucide-react-native';
import { C } from '../theme';

export const GLYPHS: Record<string, LucideIcon> = {
  AlarmClock, ArrowLeft, ArrowUp, Ban, Bike, BookOpen, BookUser, BriefcaseBusiness, Building2, Bus, CalendarDays, Candy, Cat, Check,
  CircleHelp, Citrus, Clock3, Coffee, Coins, Compass, ConciergeBell, CreditCard, Croissant, DoorOpen, Earth, Euro, Footprints,
  Hand, HandHeart, HeartHandshake, Hotel, IdCard, Languages, Laptop, MapPin, Moon, Palette, PartyPopper, PawPrint,
  Receipt, School, Shapes, Ship, Shirt, ShowerHead, Smile, Snowflake, Sparkles, Stethoscope, Sun, Sunset, ThumbsUp, TrainFront,
  TramFront, User, Wrench,
};

/** Pictogramme composé d'une ou deux icônes (cartes illustrées du mode enfant). */
export function Picto({ names, size = 40, color = C.primary }: { names: string[]; size?: number; color?: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: size * 0.25 }}>
      {names.map((n, i) => {
        const I = GLYPHS[n] ?? CircleHelp;
        const q = n === 'CircleHelp';
        return <I key={i} size={q ? size * 0.6 : size} color={q ? C.accent : color} strokeWidth={1.75} />;
      })}
    </View>
  );
}
