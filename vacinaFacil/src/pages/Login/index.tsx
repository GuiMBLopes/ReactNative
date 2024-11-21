import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./style";
import Logo from "../../assets/logo.png";
import { TextInputField } from "../../components/TextInput";
import { ButtonType } from "../../components/ButtonType";
import { buscar, comparar } from "../../services/serviceApiUser";
import { useNavigation } from "@react-navigation/native";


export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigation ()

  const handleLogin = async () => {
    const user = await comparar(email)
    if (user===null) {
      Alert.alert("Email Inválido")
    }else{
        if (
      user[0].senha === password
    ) {
       navigate.navigate("Home")
    }else{
      Alert.alert("Senha Inválida")
    }
    }
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>


        <Image style={styles.logo} source={Logo} />

        <View style={styles.inserir}>
          <TextInputField
            propsLabel="Email"
            placeHolder="Digite seu email"
            valueInput={email}
            hadleFunctionInput={handleEmail}
          />
        </View>

        <View style={styles.senha}>
          <TextInputField
            propsLabel="Senha"
            placeHolder="Digite sua senha"
            valueInput={password}
            hadleFunctionInput={handlePassword}
            typeInput={true}
          />
        </View>

        <ButtonType
          title="Entrar"
          handleFunction={handleLogin}
          propsBackgroundColor="#13293D"
        />

        <View>
          <Text style={styles.texto}>Não tem conta?</Text>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity style={styles.buttonEntrar} >
            <Text style={styles.buttonText}>Clique aqui</Text>
          </TouchableOpacity>
        </View>

      </View>
    </TouchableWithoutFeedback>
  )
}
