import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../utils/date";

type ExpenseItemProps = {
  description: string;
  date: Date;
  amount: number;
};

const ExpenseItem = ({ description, date, amount }: ExpenseItemProps) => {
  return (
    <Pressable>
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
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary500,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
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
