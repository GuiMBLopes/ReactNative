import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { style } from "./style";

interface PropsFooter{
  IconName: string
  IconType?: string
  Name: string
  Focus: boolean
}

export const Footer = ({IconName,IconType,Name, Focus}:PropsFooter) => {
  return (
    <View style={style.container}>
    <Icon name={IconName} type={IconType} size={Focus ? 40 : 30} color={ Focus ? "#fff" : "#999"}/>
    <Text style={Focus ? style.textFocus : style.textUnFocus}>{Name}</Text>
  </View>
  );
};
