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
    <View style={styles.containerCards}>
      {tipo == "idoso" || tipo == "crianca" ? (
        <View style={styles.cards}>
          <View style={styles.cardsInfos}>
            <Text style={styles.tituloCards}>{tipo}</Text>
            <Text style={styles.subtituloCards}>{descricao}</Text>
            <View style={styles.localContainer}>
              <Entypo
                name="location-pin"
                size={20}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.local}>
                {rua}, {numero}, {bairro}
              </Text>
            </View>
            <View style={styles.dataHoraContainer}>
              <Ionicons
                name="calendar-clear-sharp"
                size={18}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.data}>
                {dataInicio} - {dataFim}
              </Text>
              <MaterialCommunityIcons
                name="clock"
                size={18}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.horario}>
                {horaInicio} - {horaFim}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};
