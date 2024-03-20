import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput.tsx/ExpensesOutput";
import { EXPENSES } from "../data/Expenses";

const AllExpenses = () => {
  return <ExpensesOutput periodName="Total" expenses={EXPENSES} />;
};

export default AllExpenses;
