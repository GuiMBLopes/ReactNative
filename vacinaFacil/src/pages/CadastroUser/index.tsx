import { useState } from "react";
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
    nomePet: "",
    especie: "",
    raca: "",
    tutor: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Dados cadastrados:", form);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
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
            placeholder="Data de nascimento"
            value={form.dataNascimento}
            onChangeText={(text) => handleInputChange("dataNascimento", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            value={form.cpf}
            onChangeText={(text) => handleInputChange("cpf", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={form.telefone}
            onChangeText={(text) => handleInputChange("telefone", text)}
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
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Image
        source={require("../../../assets/Designer (3).jpeg")} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default CadastroUser;
