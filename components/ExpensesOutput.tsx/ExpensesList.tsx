import { FlatList } from "react-native";
import { Expense } from "../../data/Expenses";
import ExpenseItem from "./ExpenseItem";

type ExpensesListProps = {
  expenses: Expense[];
};

const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => (
        <ExpenseItem
          description={item.description}
          date={item.date}
          amount={item.amount}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
