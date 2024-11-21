import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import Logo from "../../assets/Logo.png";
import { style } from "./style";

export const Header = () => {
  const navigate = useNavigation();
 
  const navigateToCasdastroLocal = () => adm ? navigate.navigate("StackCadastroLocal") : navigate.navigate("StcakLogin");

  const navigateToBack = () => {
    navigate.goBack()
  }
  
  const adm = false;

  return (
    <View style={style.container}>
      <View style={{flexDirection:"row"}}>
        <Text style={{color:"#fff", top:30, paddingRight:5}}>VacinaFácil</Text>
        <Image source={Logo} style={style.logo} />
      </View>
      <TouchableOpacity onPress={navigateToCasdastroLocal}>
        <Text style={style.text}>Seja bem vindo, ADM</Text>
      </TouchableOpacity>
    </View>
  );
};
