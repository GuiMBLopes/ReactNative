import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { style } from "./style";

interface PropsFooter{
  IconName: string
  IconType?: string
  Name: string
}

export const Footer = ({IconName,IconType,Name}:PropsFooter) => {
  return (
    <View style={style.container}>
    <Icon name={IconName} type={IconType} size={40} color={"#fff"} />
    <Text style={style.text}>{Name}</Text>
  </View>
  );
};
