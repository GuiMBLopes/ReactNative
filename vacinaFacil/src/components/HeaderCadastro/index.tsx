import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import Logo from "../../assets/Logo.png";
import { style } from "./style";

export const Header = () => {
  const navigate = useNavigation();
 
  const navigateToCasdastroLocal = () => adm ? navigate.navigate("StackCadastroLocal") : "";

  const navigateToBack = () => {
    navigate.navigate("Home")
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
      <View style={{flexDirection:"row", left:60}}>
        <Text style={{color:"#fff", top:30, paddingRight:5}}>Vacina Facil</Text>
        <Image source={Logo} style={style.logo} />
      </View>
    </View>
  );
};
