import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

interface PropsInput {
  placeHolder?: string;
  valueInput?: string;
  handleFunctionInput?: (value: string) => void;
  label?: string;
  tamanhoDigito?: number;
  handleFunction?: () => void;
}

export const InputsCadastroLocal = ({
  placeHolder,
  valueInput,
  handleFunctionInput,
  label,
  tamanhoDigito,
  handleFunction,
}: PropsInput) => {
  return (
    <View style={styles.boxInputText}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={handleFunctionInput}
        placeholder={placeHolder}
        value={valueInput}
        placeholderTextColor="#0000007d"
        multiline={true}
        maxLength={tamanhoDigito}
        onFocus={handleFunction}
      />
    </View>
  );
};
