import { Text, View } from "react-native";
import { styles } from "./style";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { DataCardPage } from "../../@types/api";

export const CardPessoa = ({
  bairro,
  dataFim,
  dataInicio,
  descricao,
  horaFim,
  horaInicio,
  id,
  numero,
  rua,
  tipo,
}: DataCardPage) => {
  return (
    <>
      {tipo == "idoso" || tipo == "crianca" ? (
        <View style={styles.cards}>
          <View style={styles.cardsInfos}>
            <Text style={styles.tituloCards}>{tipo === 'crianca'?  'Criança' : 'Idoso'}</Text>
            <Text style={styles.subtituloCards}>{descricao}</Text>
            <View style={styles.localContainer}>
              <Entypo
                name="location-pin"
                size={20}
                color="black"
              />
              <Text style={styles.local}>
                {rua}, {numero}, {bairro}
              </Text>
            </View>
            <View style={styles.dataHoraContainer}>

              <View style={styles.boxData}>
                <Ionicons
                  name="calendar-clear-sharp"
                  size={18}
                  color="black"
                />
                <Text style={styles.data}>
                  {dataInicio} - {dataFim}
                </Text>
              </View>


              <View style={styles.boxHora}>
                <MaterialCommunityIcons
                  name="clock"
                  size={18}
                  color="black"
                />
                <Text style={styles.horario}>
                  {horaInicio} - {horaFim}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        ""
      )}
    </>
  );
};
