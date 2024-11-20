import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { style } from "./style";
import { DataCardPage } from "../../@types/api";

export const CardAnimal = ({
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
    <View style={style.container}>
      {tipo == "animal" ? (
        <View style={style.card}>
          <View style={style.cardText}>
            <Text style={style.title}>{tipo}</Text>
            <Text style={style.subTitle}>{descricao}</Text>
          </View>
          <View style={style.local}>
            <Icon name="location-sharp" type="ionicon" />
            <Text style={style.localText}>
              {rua}, {numero} - {bairro}
            </Text>
          </View>
          <View style={style.row}>
            <View style={style.rowDate}>
              <Icon name="calendar" type="font-awesome-5" />
              <Text style={style.rowDateText}>
                {dataInicio} - {dataFim}
              </Text>
            </View>
            <View style={style.rowTime}>
              <Icon name="clock" type="font-awesome-5" />
              <Text style={style.rowTimeText}>
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
