import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { PessoaPage } from './src/pages/PessoaPage';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <PessoaPage />
    </>
  );
}
