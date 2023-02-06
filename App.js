import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigation from './src/navigator/Navigation';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigation />
    </NavigationContainer>
  );
}
