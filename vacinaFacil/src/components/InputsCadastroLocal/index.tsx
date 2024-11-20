import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

interface PropsInput {
  placeHolder?: string;
  valueInput?: string;
  hadleFunctionInput?: (value: string) => void;
  label?: string;
}

export const InputsCadastroLocal = ({
  placeHolder,
  valueInput,
  hadleFunctionInput,
  label,
}: PropsInput) => {
  return (
    <View style={styles.boxInputText}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={hadleFunctionInput}
        placeholder={placeHolder}
        value={valueInput}
        placeholderTextColor="#0000007d"
        multiline={true}
      />
    </View>
  );
};
