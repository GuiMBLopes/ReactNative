import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/Logo.png";
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

  return (
    <View style={style.container}>
      <View style={style.boxItem}>
        <Text style={{ color: "#fff"}}>VacinaFácil</Text>
      </View>
      <View style={style.boxItem}>
        <Image source={Logo} style={style.logo} />
      </View>
      <View style={style.boxItem}>
        <TouchableOpacity onPress={navigateToCasdastroLocal} style={{width: '100%'}}>
          <Text style={style.text}>
            {usuario.nome
              ? "Seja bem vindo, " + usuario.nome
              : "Faça seu login"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
