import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
import { Expense } from "../../data/Expenses";

type ExpensesOutputProps = {
  periodName: string;
  expenses: Expense[];
};

const ExpensesOutput = ({ periodName, expenses }: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} />
      <ExpensesList expenses={expenses} />
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
