import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import Logo from "../../assets/logo.png";
import { style } from "./style";

export const Header = () => {
  const navigate = useNavigation();
 
  const navigateToCasdastroLocal = () => adm ? navigate.navigate("StackCadastroLocal") : "";

  const navigateToBack = () => {
    navigate.goBack()
  }
  
  const adm = true;

  return (
    <View style={style.container}>
      <View style={{flexDirection:"row"}}>
        <Text style={{color:"#fff", top:30, paddingLeft:10}}>Vacina Facil</Text>
        <Image source={Logo} style={style.logo} />
      </View>
      <TouchableOpacity onPress={navigateToCasdastroLocal}>
        <Text style={style.text}>Seja bem vindo, ADM</Text>
      </TouchableOpacity>
    </View>
  );
};
