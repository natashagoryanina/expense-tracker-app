import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";

type InputProps = {
  label: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  textStyle?: TextStyle;
  onChange: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
  style?: ViewStyle;
  value: string;
};

const Input = ({
  label,
  keyboardType,
  maxLength,
  textStyle,
  onChange,
  placeholder,
  multiline,
  style,
  value,
}: InputProps) => {
  return (
    <View style={[styles.input_container, style]}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChange}
        placeholder={placeholder}
        multiline={multiline}
        style={[styles.input, multiline && styles.inputMultiline]}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input_container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  input: {
    padding: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontSize: 18,
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
  },
  label: {
    fontSize: 14,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  inputMultiline: {
    minHeight: 70,
    textAlignVertical: "top",
  },
});
