import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faGift } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faGift);

// Screen imports
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
