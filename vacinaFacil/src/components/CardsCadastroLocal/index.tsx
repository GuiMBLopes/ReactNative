import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./style";
import { ButtonCadastroLocal } from '../ButtonCadastroLocal';

export const CardsCadastroLocal = () => {
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
      <TouchableOpacity style={styles.cardHeader} onPress={toggleExpand} activeOpacity={0.8}>
        <Text style={styles.cardTitle}>Criança</Text>
        <AntDesign 
          name={aberto ? 'up' : 'down'} 
          size={20} 
          color="black" 
        />
      </TouchableOpacity>
      <Animated.View style={[styles.cardContent, { height }]}>
        <Text style={styles.cardText}>Rua Floriano Peixoto, 15</Text>
        <Text style={styles.cardText}>Bingen</Text>
        <Text style={styles.cardText}>Data inicio: 20/20/20</Text>
        <Text style={styles.cardText}>Data fim: 20/20/20</Text>
        <View style={styles.boxButton}>
        <View style={styles.areaButton}>
        <ButtonCadastroLocal propsHeigth={35} title='Apagar' propsBackgroundColor='#bd0202'/>
        </View>
        </View>
      </Animated.View>
    </View>
  );
};

