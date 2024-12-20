import { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { DataCardPage } from "../../@types/api";
import { CardAnimal } from "../../components/CardAnimal";
import { listar } from "../../services/serviceApi";
import { style } from "./style";

export const AnimalPage = () => {
  const [info, setInfo] = useState<DataCardPage[]>([]);

  const carregarDados = async () => {
    const dados = await listar();
    setInfo(dados);
  };

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#247BA0'}}>
      <View style={style.container}>
        <View style={{ width: "80%" }}>
          <FlatList
            scrollEnabled={false}
            data={info}
            keyExtractor={(info) => info.id}
            renderItem={({ item }) => (
              <CardAnimal
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
      </View>
    </ScrollView>
  );
}