import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    alignItems: "center",
    justifyContent: "center",
  },
});
