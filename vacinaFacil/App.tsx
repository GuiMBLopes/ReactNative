import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CadastroLocal } from './src/pages/CadastroLocal';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor='#247BA0'/>
      <CadastroLocal/>
    </>
  );
}
