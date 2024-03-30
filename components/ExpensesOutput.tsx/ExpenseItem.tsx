import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
import { getFormattedDate } from "../../utils/date";

type ExpenseItemProps = {
  id: string;
  description: string;
  date: number;
  amount: number;
};

const ExpenseItem = ({ id, description, date, amount }: ExpenseItemProps) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "ManageExpenses",
        params: {
          expenseId: id,
          isEditPage: true,
        },
      })
    );
  };

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={expensePressHandler}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
  amountContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 4,
    minWidth: 60,
    backgroundColor: "white",
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
