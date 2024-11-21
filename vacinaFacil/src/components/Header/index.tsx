import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import Logo from "../../assets/logo.png";
import { style } from "./style";
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
  const navigate = useNavigation();
  const { usuario } = useAuth();

  const navigateToCasdastroLocal = () => {
    if (usuario.nome === "ADM") {
      navigate.navigate("StackCadastroLocal");
    } else if (usuario.nome === "") {
      navigate.navigate("StcakLogin");
    } else {
      navigate.navigate("StackProfile");
    }
  };

  const navigateToBack = () => {
    navigate.goBack();
  };

  return (
    <View style={style.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#fff", top: 30, paddingRight: 5 }}>
          VacinaFácil
        </Text>
        <Image source={Logo} style={style.logo} />
      </View>
      <TouchableOpacity onPress={navigateToCasdastroLocal}>
        <Text style={style.text}>
          {usuario.nome ? "Seja bem vindo, " + usuario.nome : "Faça seu login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
