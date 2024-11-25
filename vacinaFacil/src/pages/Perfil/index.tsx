import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ModalComponent } from "../../components/ModalComponent";
import { useAuth } from "../../hooks/useAuth";
import { deletarUsuario } from "../../services/serviceApiUser";
import { styles } from "./style";
import { Header } from "../../components/HeaderCadastro";

export default function Perfil() {
  const { usuario, logout } = useAuth();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModal2, setOpenModal2] = useState<boolean>(false);

  const fecharModal = () => {
    setOpenModal(false);
    setOpenModal2(false);
  };
  const HandleClickSair = () => {
    {
      setOpenModal(true);
    }
  };
  const HandleClickExcluir = () => {
    {
      setOpenModal2(true);
    }
  };
  const sair = () => {
    logout();
  };

  const excluir = () => {
    deletarUsuario(usuario.id!);
    logout()
  };

  return (
    <>
    <Header/>
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
      <TouchableOpacity style={styles.logoutButton} onPress={HandleClickSair}>
        <Text style={styles.logoutButtonText}>SAIR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={HandleClickExcluir}
      >
        <Text style={styles.logoutButtonText}>EXCLUIR CONTA</Text>
      </TouchableOpacity>

      <ModalComponent
        mensagem="deseja realmente sair?"
        openModal={openModal}
        setOpenModal={fecharModal}
        modalFunction={sair}
      />
      <ModalComponent
        mensagem="deseja realmente excluir sua conta?"
        openModal={openModal2}
        setOpenModal={fecharModal}
        modalFunction={excluir}
      />
    </View>
    </>
  );
}