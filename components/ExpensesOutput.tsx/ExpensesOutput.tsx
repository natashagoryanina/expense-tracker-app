import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Expense, EXPENSES } from "../../data/Expenses";
import { GlobalStyles } from "../../constants/styles";

type ExpensesOutputProps = {
  periodName: string;
  expenses: Expense[];
};

const ExpensesOutput = ({ periodName, expenses }: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} expenses={expenses} />
      <ExpensesList expenses={EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
