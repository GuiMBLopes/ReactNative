import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { Picker } from "@react-native-picker/picker";

const CadastroUser = () => {
  const [tipo, setTipo] = useState("Pessoa");
  const [form, setForm] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    telefone: "",
    email: "",
    nomePet: "",
    especie: "",
    raca: "",
    tutor: "",
    emailTutor: "",
    dataNascimentoPet: "",
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
    } else if (field === "dataNascimento" || field === "dataNascimentoPet") {
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
    console.log("Dados cadastrados:", form);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/logocadastro.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>VacinaFácil</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro de Usuário</Text>
        <Picker
          selectedValue={tipo}
          onValueChange={(itemValue) => setTipo(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Pessoa" value="Pessoa" />
          <Picker.Item label="Pet" value="Pet" />
        </Picker>

        {tipo === "Pessoa" && (
          <>
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
            />
            <TextInput
              style={styles.input}
              placeholder="CPF (000.000.000-00)"
              value={form.cpf}
              onChangeText={(text) => handleInputChange("cpf", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone ((99) 99999-9999)"
              value={form.telefone}
              onChangeText={(text) => handleInputChange("telefone", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={form.email}
              onChangeText={(text) => handleInputChange("email", text)}
            />
          </>
        )}

        {tipo === "Pet" && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Nome do pet"
              value={form.nomePet}
              onChangeText={(text) => handleInputChange("nomePet", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Data de nascimento do pet (DD/MM/AAAA)"
              value={form.dataNascimentoPet}
              onChangeText={(text) =>
                handleInputChange("dataNascimentoPet", text)
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Espécie (Ex: Cachorro, Gato)"
              value={form.especie}
              onChangeText={(text) => handleInputChange("especie", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Raça"
              value={form.raca}
              onChangeText={(text) => handleInputChange("raca", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Nome do tutor"
              value={form.tutor}
              onChangeText={(text) => handleInputChange("tutor", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="E-mail do tutor"
              value={form.emailTutor}
              onChangeText={(text) => handleInputChange("emailTutor", text)}
            />
          </>
        )}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CadastroUser;
