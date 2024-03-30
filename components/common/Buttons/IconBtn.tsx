import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type IconBtnProps = {
  iconName: keyof typeof Ionicons.glyphMap;
  color: string;
  size: number;
  onPress: (event: GestureResponderEvent) => void;
};

const IconBtn = ({ iconName, color, size, onPress }: IconBtnProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.btnContainer}>
        <Ionicons name={iconName} color={color} size={size} />
      </View>
    </Pressable>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  btnContainer: {
    marginHorizontal: 8,
    marginVertical: 2,
    padding: 6,
    borderRadius: 24,
  },
  pressed: {
    opacity: 0.75,
  },
});
