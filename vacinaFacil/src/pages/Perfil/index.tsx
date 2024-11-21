import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

export default function Perfil() {
  // Dados
  const username = "Naruto Mandrake";
  const email = "narutodograu@hotmail.com";
  const password = "********";

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
        <Text style={styles.text}>{username}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>{email}</Text>

        <Text style={styles.label}>Senha</Text>
        <Text style={styles.text}>{password}</Text>
      </View>

      {/* sair */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}
