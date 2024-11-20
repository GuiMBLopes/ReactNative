import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CadastroUser from "./src/pages/CadastroUser";
import styles from "./src/pages/CadastroUser/style";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#247BA0" />
      <CadastroUser />
    </View>
  );
}
