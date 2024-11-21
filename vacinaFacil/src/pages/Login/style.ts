import { StyleSheet } from "react-native";
import { ButtonType } from "../../components/ButtonType";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#247BA0',
    paddingVertical: 60,
    paddingHorizontal: 50,
    
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 70,
    marginTop: 20,
  },

   text:{
    width: "100%",
    paddingLeft: 10,
    marginLeft: 20,
    marginTop: 20,
   },

   inserir:{
    width: "100%",
    marginBottom: 20,
   },

    senha:{
    width: "100%",
    marginBottom: 30,
   },

   texto:{
     marginTop: 20,
     marginBottom: 15,
     color: "#ffffffdd",
     fontSize: 15,
   },

   boxButton:{

   },

   buttonEntrar:{

   },

   buttonText:{
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
   },
  
});