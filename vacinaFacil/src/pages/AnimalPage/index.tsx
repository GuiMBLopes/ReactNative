import { Image, Text, View } from "react-native";
import { style } from "./style";
import { Icon } from "react-native-elements";

export const AnimalPage = () => {


  return (
    <>
        <View style={style.container}>
          <View style={style.card}>
            <View style={style.cardText}>
              <Text style={style.title}>titulo</Text>
              <Text style={style.subTitle}>Descrição</Text>
            </View>
            <View style={style.local}>
                <Icon name="location-sharp" type="ionicon"/>
              <Text style={style.localText}>Rua do Imperador, 15 - Centro</Text>
            </View>
            <View style={style.row}>
                <View style={style.rowDate}>
                    <Icon name="calendar" type="font-awesome-5"/>
                    <Text style={style.rowDateText}>10/11/2024 - 10/12/2024</Text>
                </View>
                <View style={style.rowTime}>
                    <Icon name="clock" type="font-awesome-5"/>
                    <Text style={style.rowTimeText}>8H - 16H</Text>
                </View>
            </View>
          </View>
        </View>
    </>
  );
};
