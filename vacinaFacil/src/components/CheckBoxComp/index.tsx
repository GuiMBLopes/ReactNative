import React, { useState } from "react";
import { Text, View } from "react-native";
import Checkbox from "expo-checkbox"; // Import do Checkbox da Expo
import { styles } from "./style";

interface PropsCheckBox {
  propsLabel?: string;
  onChange?: (value: boolean) => void;
  value?: boolean;
}

export const CheckBoxComp = ({
  propsLabel,
  onChange,
  value,
}: PropsCheckBox) => {
  // const [isSelected, setSelection] = useState(false);
  {/* <Text stylez={styles.label}>{isSelected ? "Checked" : "Unchecked"}</Text> */}

  return (
        <View>
          <Text style={styles.label}>{propsLabel}</Text>
          <Checkbox
            onValueChange={onChange}
            style={styles.checkbox}
            color={value ? "#02be0b" : "#fff"}
            value={value}
          />
        </View>

  );
};
