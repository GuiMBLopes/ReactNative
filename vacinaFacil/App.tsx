import { StatusBar } from 'expo-status-bar';
import { AnimalPage } from './src/pages/AnimalPage';
import { Routers } from './src/routes';

export default function App() {
  return (
    <>
     <StatusBar  style='light' backgroundColor='#247BA0' />
    <Routers/>
    </>
  );
}


