import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface PropsButton {
  title?: string;
  handleFunction?: () => void;
  propsHeigth?: number;
  propsBackgroundColor?: string
}

export const ButtonCadastroLocal = ({ handleFunction, title, propsHeigth,propsBackgroundColor }: PropsButton) => {


    return(
  <TouchableOpacity
    onPress={handleFunction}
    activeOpacity={0.7}
    style={[styles.styleButton, {height: propsHeigth? propsHeigth : 50}, {backgroundColor: propsBackgroundColor? propsBackgroundColor: '#13293D'}]}
  >
    <Text style={styles.text}>{title ? title : "Entrar"}</Text>
  </TouchableOpacity>
    )
};
