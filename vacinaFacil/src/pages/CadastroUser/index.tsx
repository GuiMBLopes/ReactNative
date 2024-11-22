import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { styles } from "./style";
import { Picker } from "@react-native-picker/picker";
import { Header } from "../../components/HeaderCadastro";
import { inserir } from "../../services/serviceApiUser";
import { useNavigation } from "@react-navigation/native";

export const CadastroUser = () => {
  const [tipo, setTipo] = useState("Pessoa");
  const navigate = useNavigation();

  const [form, setForm] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    telefone: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const formatField = (field: string, value: string) => {
    if (field === "cpf") {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else if (field === "telefone") {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    } else if (field === "dataNascimento") {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d{1,4})$/, "$1/$2");
    }
    return value;
  };

  const handleInputChange = (field: string, value: string) => {
    const formattedValue = formatField(field, value);
    setForm((prevForm) => ({ ...prevForm, [field]: formattedValue }));
  };

  const handleSubmit = () => {
    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const user = {
      nome: form.nome,
      dataNascimento: form.dataNascimento,
      cpf: form.cpf,
      telefone: form.telefone,
      email: form.email,
      senha: form.senha,
    };

    inserir(user);
    alert("Cadastro realizado com sucesso!");
    navigate.navigate("StcakLogin");
  };

  return (
    <>
      <Header />
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center', backgroundColor:'#247BA0'}} behavior="padding" enabled   keyboardVerticalOffset={10}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Cadastro de Usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              value={form.nome}
              onChangeText={(text) => handleInputChange("nome", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Data de nascimento (DD/MM/AAAA)"
              value={form.dataNascimento}
              onChangeText={(text) => handleInputChange("dataNascimento", text)}
              maxLength={10}
            />
            <TextInput
              style={styles.input}
              placeholder="CPF (000.000.000-00)"
              value={form.cpf}
              onChangeText={(text) => handleInputChange("cpf", text)}
              maxLength={14}
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone (99) 99999-9999"
              value={form.telefone}
              onChangeText={(text) => handleInputChange("telefone", text)}
              maxLength={15}
            />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={form.email}
              onChangeText={(text) => handleInputChange("email", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={form.senha}
              onChangeText={(text) => handleInputChange("senha", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              secureTextEntry
              value={form.confirmarSenha}
              onChangeText={(text) => handleInputChange("confirmarSenha", text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
