import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

type ButtonModes = "flat";

type ButtonProps = {
  text: string;
  onPress: () => void;
  mode?: ButtonModes;
  style?: ViewStyle;
};

const Button = ({ style, text, onPress, mode }: ButtonProps) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text
            style={[styles.button_text, mode === "flat" && styles.flat_text]}
          >
            {text}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  button_text: {
    color: "white",
    textAlign: "center",
  },
  flat_text: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.primary100,
  },
});
