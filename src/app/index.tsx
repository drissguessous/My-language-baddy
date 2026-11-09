import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { useStore } from '../lib/store';
import { C } from '../theme';

export default function Index() {
  const { ready, profile } = useStore();
  if (!ready) return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: C.bg }}><ActivityIndicator color={C.primary} /></View>;
  return <Redirect href={profile ? '/(tabs)' : '/welcome'} />;
}
