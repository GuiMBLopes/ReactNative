import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useAuth } from "../../hooks/useAuth";

export default function Perfil() {
  const { usuario, logout } = useAuth(); 
  const HandleClick = () => {logout()};

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../assets/naruto.jpg")}
          style={styles.avatar}
        />
      </View>

      {/* Informações */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome de usuário</Text>
        <Text style={styles.text}>{usuario.nome}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>{usuario.email}</Text>

        <Text style={styles.label}>CPF</Text>
        <Text style={styles.text}>{usuario.cpf}</Text>
      </View>

      {/* sair */}
      <TouchableOpacity style={styles.logoutButton} onPress={HandleClick}> 
        <Text style={styles.logoutButtonText}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}
