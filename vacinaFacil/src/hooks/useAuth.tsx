import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { PostDataUser } from "../@types/api";
import { buscar } from "../services/serviceApiUser";

type PropsContext = {
  usuario: PostDataUser;
  setUsuario: (value: PostDataUser) => void;
  logout: () => void;
  comparar: (email: string, senha: string) => void;
};
const AuthContext = createContext<PropsContext>({
  usuario: {
    nome: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    senha: "",
    telefone: "",
  },
  setUsuario: () => {},
  logout: () => {},
  comparar: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [usuario, setUsuario] = useState<PostDataUser>({
    nome: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    senha: "",
    telefone: "",
  });
  const navigate = useNavigation();
  const logout = () => {
    AsyncStorage.removeItem("@InfoUser");
    setUsuario({
      nome: "",
      cpf: "",
      dataNascimento: "",
      email: "",
      senha: "",
      telefone: "",
    });
    navigate.navigate("Home");
  };

  const comparar = async (userEmail: string, userPassword: string) => {
    const dados = await buscar();
    const user = dados.find(
      (user: PostDataUser) =>
        userEmail === user.email && userPassword === user.senha
    );
    if (user) {
      storeData(user.email, user.senha);
      setUsuario(user);
      navigate.navigate("Home");
    } else {
      Alert.alert("Login ou senha inválidos");
    }
  };

  const storeData = async (email: string, senha: string) => {
    const user = {
      email: email,
      senha: senha,
    };
    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem("@InfoUser", jsonValue);
    } catch (error) {
      console.log("error");
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@InfoUser");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        navigate.navigate("Home");
        comparar(jsonValue.email, jsonValue.senha);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <AuthContext.Provider value={{ usuario, setUsuario, logout, comparar }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
