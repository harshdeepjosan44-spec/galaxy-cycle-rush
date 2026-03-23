import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import GalaxyCycleRush from './src/GalaxyCycleRush';

// Keep splash screen visible while loading fonts
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  useEffect(() => {
    async function loadResources() {
      try {
        // Load fonts if you have local ones (optional - web fonts work too)
        // await Font.loadAsync({ 'Orbitron': require('./assets/fonts/Orbitron-Bold.ttf') });
      } catch (e) {
        console.warn('Font load error:', e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    }
    loadResources();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <GalaxyCycleRush />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
