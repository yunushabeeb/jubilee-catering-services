import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Rubik_400Regular, Rubik_700Bold } from '@expo-google-fonts/rubik';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import '../styles/global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
    'Roboto-Bold': Roboto_700Bold,
    Rubik: Rubik_400Regular,
    'Rubik-Bold': Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Show a loading screen or return null until fonts are loaded
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
