import { StatusBar } from 'expo-status-bar';
import { Login } from './src/pages/Login';
import React from 'react';

export default function App() {
  return (
    <>
      <StatusBar style='light'backgroundColor='#247BAO'/>
      <Login />
      </>  
  );
}

