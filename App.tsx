import { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { isLandscape } from './src/utils/orientation';
import { HomeScreen } from './src/screens/HomeScreen';
import { NativeWindStyleSheet } from 'nativewind';

export default function App() {
  const [orientation, setOrientation] = useState(false);

  const [loaded] = useFonts({
    BungeeShade: require('./assets/fonts/BungeeShade.ttf'),
    ArchivoMedium: require('./assets/fonts/ArchivoMedium.ttf'),
  });

  NativeWindStyleSheet.setOutput({
    default: 'native',
  });

  Dimensions.addEventListener('change', () => {
    setOrientation(isLandscape());
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="inverted" />
      <HomeScreen />
    </>
  );
}
