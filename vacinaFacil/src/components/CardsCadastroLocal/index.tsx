import React, { useState } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";
import { ButtonCadastroLocal } from "../ButtonCadastroLocal";

interface PropsCards {
  tipo: string;
  rua: string;
  bairro: string;
  dataInicio: string;
  dataFim: string;
  numero: string;
  id?: string;
  handleFunction?: () => void;
}

export const CardsCadastroLocal = ({
  tipo,
  rua,
  bairro,
  dataInicio,
  dataFim,
  numero,
  id,
  handleFunction,
}: PropsCards) => {
  const [aberto, setAberto] = useState(false);
  const [height] = useState(new Animated.Value(0));

  const toggleExpand = () => {
    Animated.timing(height, {
      toValue: aberto ? 0 : 200,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setAberto(!aberto);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardHeader}
        onPress={toggleExpand}
        activeOpacity={0.8}
      >
        <Text style={styles.cardTitle}>{tipo}</Text>
        <AntDesign name={aberto ? "up" : "down"} size={20} color="black" />
      </TouchableOpacity>
      <Animated.View style={[styles.cardContent, { height }]}>
        <Text style={styles.cardText}>
          {rua}, {numero}
        </Text>
        <Text style={styles.cardText}>{bairro}</Text>
        <Text style={styles.cardText}>Data inicio: {dataInicio}</Text>
        <Text style={styles.cardText}>Data fim: {dataFim}</Text>
        <View style={styles.boxButton}>
          <View style={styles.areaButton}>
            <ButtonCadastroLocal
              propsHeigth={35}
              title="Apagar"
              propsBackgroundColor="#bd0202"
              handleFunction={handleFunction}


            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};
