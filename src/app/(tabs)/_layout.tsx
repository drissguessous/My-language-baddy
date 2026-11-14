import { Redirect, Tabs } from 'expo-router';
import { Compass, MessagesSquare, Target, UserRound } from 'lucide-react-native';
import { useStore } from '../../lib/store';
import { C, FONT } from '../../theme';

export default function TabsLayout() {
  const { ready, profile } = useStore();
  if (ready && !profile) return <Redirect href="/welcome" />;
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: C.primary,
      tabBarInactiveTintColor: C.muted,
      tabBarStyle: { backgroundColor: C.card, borderTopColor: C.line, height: 74, paddingTop: 8, paddingBottom: 14 },
      tabBarLabelStyle: { fontFamily: FONT.semibold, fontSize: 11.5 },
    }}>
      <Tabs.Screen name="index" options={{ title: 'Parcours', tabBarIcon: ({ color }) => <Compass size={23} color={color} strokeWidth={2} /> }} />
      <Tabs.Screen name="practice" options={{ title: 'Pratiquer', tabBarIcon: ({ color }) => <Target size={23} color={color} strokeWidth={2} /> }} />
      <Tabs.Screen name="talk" options={{ title: 'Converser', tabBarIcon: ({ color }) => <MessagesSquare size={23} color={color} strokeWidth={2} /> }} />
      <Tabs.Screen name="me" options={{ title: 'Profil', tabBarIcon: ({ color }) => <UserRound size={23} color={color} strokeWidth={2} /> }} />
    </Tabs>
  );
}
