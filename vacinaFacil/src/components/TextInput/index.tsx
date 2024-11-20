import { Text, TextInput } from "react-native";
import { styles } from './style';

interface PropsInput {
  placeHolder: string;
  typeInput?: boolean;
  valueInput: string;
  propsLabel: string;
  hadleFunctionInput: (value: string) => void;
}

export const TextInputField = ({ 
  placeHolder, 
  typeInput, 
  valueInput,
  propsLabel,
  hadleFunctionInput
}: PropsInput) => {

  return (
    <>
    <Text>{propsLabel}</Text>
    <TextInput
      onChangeText={hadleFunctionInput}
      style={styles.input}
      placeholder={placeHolder}
      placeholderTextColor="#000"
      secureTextEntry={typeInput}
      value={valueInput}
    />
    </>
  )
}