import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#247BA0",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 1,
  },

  header: {    
    width: "300%",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginBottom: 100,
    borderBottomWidth: 1,
    backgroundColor: "#13293D",
    elevation: 5,
  },

  logo: {
    width: 50, 
    height: 50,
    left: -100,
  },

  appName: {
    textAlign: "center",
    marginLeft: -50, 
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",

  },

  formContainer: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#13293D",
    padding: 20,
    width: "90%",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#13293D",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#F0F0F0",
    borderWidth: 1,
    borderColor: "#13293D",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },

  picker: {
    backgroundColor: "#F0F0F0",
    borderWidth: 1,
    borderColor: "#13293D",
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#13293D",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});


