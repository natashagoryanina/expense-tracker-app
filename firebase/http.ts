import axios from "axios";

const BACKEND_URL =
  "https://expenses-tracker-f495e-default-rtdb.firebaseio.com";

type Expense = {
  description: string;
  amount: number;
  date: number;
};

export function storeExpenses(expensesData: Expense) {
  axios
    .post(`${BACKEND_URL}/expenses.json`, expensesData)
    .then((res) => console.log(res));
}

export async function fetchExpenses() {
  const result = await axios.get(`${BACKEND_URL}/expenses.json`);
  const expenses = [];

  for (const key in result.data) {
    const expenseObj = {
      id: key,
      amount: result.data[key].amount,
      date: new Date(result.data[key].date),
      description: result.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export async function updateExpense(id: string, expensesData) {
  await axios.put(`${BACKEND_URL}/expenses/${id}.json`, expensesData);
}

export async function deleteExpenseFromDB(id: string) {
  await axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}