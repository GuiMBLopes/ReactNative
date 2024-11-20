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
      <TouchableOpacity style={{ top: 17 }} onPress={navigateToBack}>
        <Icon
          name="chevron-back-outline"
          type="ionicon"
          size={50}
          color={"#fff"}
        />
      </TouchableOpacity>
      <View style={{flexDirection:"row"}}>
        <Text style={{color:"#fff", top:30, paddingRight:5}}>Vacina Facil</Text>
        <Image source={Logo} style={style.logo} />
      </View>
      <TouchableOpacity onPress={navigateToCasdastroLocal}>
        <Text style={style.text}>Seja bem vindo, ADM</Text>
      </TouchableOpacity>
    </View>
  );
};
