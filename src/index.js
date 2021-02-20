import React from 'react';

import { StatusBar } from 'expo-status-bar';

import HomeScreen from '@screens/Home';

// import Navigation from './Navigation';

function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#282a36" />
      <HomeScreen />
    </>
  );
}

export default App;
