import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    backgroundColor: "#13293D",
    flexDirection: "row",
    width: "100%",
    height:100,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8
  },

  boxItem:{
    width:'33%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 60,
    width: 60,
  },
  text: {
    width:115,
    color: "#FFF",
    fontSize: 12,
    textAlign: 'center'
  },
});
