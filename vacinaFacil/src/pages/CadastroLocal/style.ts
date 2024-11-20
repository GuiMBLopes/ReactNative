import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#247BA0",
    alignItems: "center",
    paddingTop: 30,
  },

  titulo: {
    color: "#E8F1F2",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 20
  },

  line: {
    marginTop: 10,
    backgroundColor: "#E8F1F2",
    height: 1,
    width: "85%",
  },

  main: {
    marginVertical: 30,
    width: "80%",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  boxCheckbox: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '100%'
  },

  boxSmallInput:{
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '100%'
  },
  areaSmallInput:{
    width:'45%'
  }
});
