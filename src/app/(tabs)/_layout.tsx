import { Redirect, Tabs } from 'expo-router';
import { Text } from 'react-native';
import { useStore } from '../../lib/store';
import { C } from '../../theme';

const icon = (glyph: string) => ({ focused }: { focused: boolean }) => <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.55 }}>{glyph}</Text>;

export default function TabsLayout() {
  const { ready, profile } = useStore();
  if (ready && !profile) return <Redirect href="/welcome" />;
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: C.primary,
      tabBarInactiveTintColor: C.sub,
      tabBarStyle: { backgroundColor: C.card, borderTopColor: C.line, height: 62, paddingBottom: 8 },
      tabBarLabelStyle: { fontWeight: '600', fontSize: 12 },
    }}>
      <Tabs.Screen name="index" options={{ title: 'Parcours', tabBarIcon: icon('🧭') }} />
      <Tabs.Screen name="practice" options={{ title: 'Pratiquer', tabBarIcon: icon('🎯') }} />
      <Tabs.Screen name="talk" options={{ title: 'Converser', tabBarIcon: icon('💬') }} />
      <Tabs.Screen name="me" options={{ title: 'Profil', tabBarIcon: icon('👤') }} />
    </Tabs>
  );
}
