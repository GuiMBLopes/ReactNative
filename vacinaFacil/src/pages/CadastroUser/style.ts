import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B425A", // Fundo escuro
    padding: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#62C2E4", // Azul claro
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFFFFF", // Fundo branco para os inputs
    borderWidth: 1,
    borderColor: "#62C2E4", // Azul claro
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: "#1B425A", // Texto escuro dentro dos inputs
    fontSize: 16,
  },
  picker: {
    backgroundColor: "#FFFFFF", // Fundo branco para o Picker
    borderWidth: 1,
    borderColor: "#62C2E4", // Azul claro
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#77D353", // Verde para os botões
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF", // Texto branco nos botões
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 150, // Ajuste conforme necessário
    height: 150,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default styles;
