import {
  AlarmClock, Award, BriefcaseBusiness, Clock3, Coffee, Compass, ConciergeBell, Handshake, Hand, Hotel, IdCard, Laptop, LucideIcon,
  MessageCircle, Mic, Palette, Quote, Scale, Ship, Shirt, Stethoscope,
} from 'lucide-react-native';

export const UNIT_ICON: Record<string, LucideIcon> = {
  'u-kids': Palette, 'u-greet': Hand, 'u-intro': IdCard, 'u-time': Clock3, 'u-cafe': Coffee, 'u-dir': Compass,
  'u-shop': Shirt, 'u-day': AlarmClock, 'u-hotel': Hotel, 'u-opinion': MessageCircle, 'u-job': BriefcaseBusiness,
  'u-nego': Handshake, 'u-debate': Scale, 'u-present': Mic, 'u-nuance': Quote,
  'u-pro-business': BriefcaseBusiness, 'u-pro-hospitality': ConciergeBell, 'u-pro-tech': Laptop,
  'u-pro-health': Stethoscope, 'u-pro-logistics': Ship,
};

export const TRACK_ICON: Record<string, LucideIcon> = {
  business: BriefcaseBusiness, hospitality: ConciergeBell, tech: Laptop, health: Stethoscope, logistics: Ship,
};

export { Award };
