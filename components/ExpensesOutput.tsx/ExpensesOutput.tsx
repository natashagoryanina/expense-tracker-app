import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

type ExpensesOutputProps = {
  periodName: string;
};

const ExpensesOutput = ({ periodName }: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={periodName} />
      <ExpensesList />
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
