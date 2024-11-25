import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import Logo from "../../assets/Logo.png";
import { style } from "./style";
import { useAuth } from "../../hooks/useAuth";

interface PropsHeader {
  propsAdm?: boolean;
}

export const Header = ({propsAdm = false}:PropsHeader) => {
  const { usuario, logout } = useAuth(); 
  const navigate = useNavigation();

  const navigateToBack = () => {
    navigate.navigate("Home");
  };

  const HandleClick = () => {logout()};
  return (
    <View style={style.container}>
      <View style={style.boxItem}>
        <TouchableOpacity style={{ width: "100%" }} onPress={navigateToBack}>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            size={50}
            color={"#fff"}
          />
        </TouchableOpacity>
      </View>
      <View style={style.boxItem}>
        <Image source={Logo} style={style.logo} />
      </View>
      {propsAdm === true && (
      <View style={style.boxItem}>
        <TouchableOpacity style={style.button} onPress={HandleClick}>
          <Text style={style.text}>Sair</Text>
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
};
