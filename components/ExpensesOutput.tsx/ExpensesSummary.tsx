import { StyleSheet, Text, View } from "react-native";
import { Expense } from "../../data/Expenses";
import { GlobalStyles } from "../../constants/styles";

type ExpensesSummaryType = {
  periodName: string;
  expenses: Expense[];
};

const ExpensesSummary = ({ periodName, expenses }: ExpensesSummaryType) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>{expensesSum.toFixed(2)}$</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary50,
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
