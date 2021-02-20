import React from 'react';

import { StatusBar } from 'expo-status-bar';

import App from './src';

function Main() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#282a36" />
      <App />
    </>
  );
}

export default Main;
