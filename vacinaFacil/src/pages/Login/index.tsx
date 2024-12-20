import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Image, Keyboard, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Logo from "../../assets/Logo.png";
import { ButtonType } from "../../components/ButtonType";
import { TextInputField } from "../../components/TextInput";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";


export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigation ()
  const {comparar} = useAuth();

  const handleLogin = () => {
  comparar(email, password)
  Alert.alert("Usuário validado");
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center', backgroundColor:'#247BA0'}} behavior="padding" enabled   keyboardVerticalOffset={10}>
      <ScrollView style={{backgroundColor: '#247BA0'}}>
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
            propsShowEye={true}
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
          <TouchableOpacity style={styles.buttonEntrar} onPress={()=> navigate.navigate('StcakCadastroUser')}>
            <Text style={styles.buttonText}>Clique aqui</Text>
          </TouchableOpacity>
        </View>

      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
