import React from "react";
import { FlatList, ImageBackground, ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import banner from "../../assets/banner.png";

const Cards = [
  {
    id: 1,
    title: "VacinaFácil - Pessoas",
    subtitle: "Acesse aqui os dados referentes à sua vacinação:",
    local: "Centro de Saúde Itamarati",
    data: "Segunda à sexta",
    horario: "08:30 às 19:30",
  },
  {
    id: 2,
    title: "VacinaFácil - Pessoas",
    subtitle: "Acesse aqui os dados referentes à sua vacinação:",
    local: "UBS Itaipava",
    data: "Segunda, quarta e sexta",
    horario: "08:30 às 16:30",
    data2: "Terça e quinta",
    horario2: "08:30 às 19:00",
  },
  {
    id: 3,
    title: "VacinaFácil - Pessoas",
    subtitle: "Acesse aqui os dados referentes à sua vacinação:",
    local: "Centro de Saúde Coletiva",
    data: "Segunda e quarta",
    horario: "08:00 às 19:30",
    data2: "Terça, quinta e sexta",
    horario2: "08:00 às 16:30",
  },
  {
    id: 4,
    title: "VacinaFácil - Pessoas",
    subtitle: "Acesse aqui os dados referentes à sua vacinação:",
    local: "UBS Quitandinha",
    data: "Segunda à sexta",
    horario: "08:30 às 19:00",
  },
  {
    id: 5,
    title: "VacinaFácil - Pessoas",
    subtitle: "Acesse aqui os dados referentes à sua vacinação:",
    local: "PSF Posse",
    data: "Segunda à sexta",
    horario: "08:00 às 16:00",
  },
];

export const PessoaPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <ImageBackground
          source={banner}
          style={styles.imagemBanner}
          resizeMode="cover"
        >
          <View style={styles.bannerSombra}></View>
          <Text style={styles.tituloBanner}>VacinaFácil</Text>
          <Text style={styles.subtituloBanner}>
            Acompanhe seus agendamentos!
          </Text>
        </ImageBackground>
      </View>
      <FlatList
        data={Cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.containerCards}>
            <View style={styles.cards}>
              <View style={styles.cardsInfos}>
                <Text style={styles.tituloCards}>{item.title}</Text>
                <Text style={styles.subtituloCards}>{item.subtitle}</Text>
                <View style={styles.localContainer}>
                  <Entypo
                    name="location-pin"
                    size={20}
                    color="black"
                    style={styles.icon}
                  />
                  <Text style={styles.local}>{item.local}</Text>
                </View>
                <View style={styles.dataHoraContainer}>
                  <Ionicons
                    name="calendar-clear-sharp"
                    size={18}
                    color="black"
                    style={styles.icon}
                  />
                  <Text style={styles.data}>{item.data}</Text>
                  <MaterialCommunityIcons
                    name="clock"
                    size={18}
                    color="black"
                    style={styles.icon}
                  />
                  <Text style={styles.horario}>{item.horario}</Text>
                </View>
                {item.data2 && item.horario2 && (
                  <View style={styles.dataHoraContainer}>
                    <Ionicons
                      name="calendar-clear-sharp"
                      size={18}
                      color="black"
                      style={styles.icon}
                    />
                    <Text style={styles.data}>{item.data2}</Text>
                    <MaterialCommunityIcons
                      name="clock"
                      size={18}
                      color="black"
                      style={styles.icon}
                    />
                    <Text style={styles.horario}>{item.horario2}</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};