import { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import { DataCardPage } from "../../@types/api";
import banner from "../../assets/banner.png";
import { CardPessoa } from "../../components/CardPessoa";
import { listar } from "../../services/serviceApi";
import { styles } from "./style";

export const PessoaPage = () => {
  const [info, setInfo] = useState<DataCardPage[]>([]);

  const carregarDados = async () => {
    const dados = await listar();
    setInfo(dados);
  };
  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{paddingBottom: 50}}>
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
        data={info}
        keyExtractor={(info) => info.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <CardPessoa
            bairro={item.bairro}
            dataFim={item.dataFim}
            dataInicio={item.dataInicio}
            descricao={item.descricao}
            horaFim={item.horaFim}
            horaInicio={item.horaInicio}
            id={item.id}
            numero={item.numero}
            rua={item.rua}
            tipo={item.tipo}
          />
        )}
      />
      </View>
    </ScrollView>
  );
};
