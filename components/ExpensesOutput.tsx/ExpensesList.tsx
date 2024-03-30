import { FlatList, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../store/redux/hooks";
import { getExpenses } from "../../store/redux/slices/expensesSlice";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = () => {
  const expenses = useAppSelector(getExpenses);

  return (
    <>
      {expenses.length ? (
        <FlatList
          data={expenses}
          renderItem={({ item }) => (
            <ExpenseItem
              id={item.id}
              description={item.description}
              date={item.date}
              amount={item.amount}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.empty_container}>
          <Text style={styles.empty_text}>No expenses</Text>
        </View>
      )}
    </>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  empty_container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  empty_text: {
    color: 'white',
    fontSize: 24
  }
})