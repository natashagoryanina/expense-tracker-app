import { RootState } from "./../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL =
  "https://expenses-tracker-f495e-default-rtdb.firebaseio.com/";

export type Expense = {
  id: string;
  description: string;
  amount: number;
  date: number;
};

interface Expenses {
  expensesData: Expense[];
}

const initialState: Expenses = {
  expensesData: [],
};

export const fetchExpenses = createAsyncThunk<Expense[]>(
  "expenses/fetchExpenses",
  async () => {
    const result = await axios.get(
      `https://expenses-tracker-f495e-default-rtdb.firebaseio.com/expenses.json`
    );
    const expenses: Expense[] = [];

    for (const key in result.data) {
      const expenseObj: Expense = {
        id: key,
        amount: result.data[key].amount,
        date: result.data[key].date,
        description: result.data[key].description,
      };
      expenses.push(expenseObj);
    }
    return expenses;
  }
);

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expensesData.push(action.payload);
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      const idToDelete = action.payload;
      state.expensesData = state.expensesData.filter(
        (item) => item.id !== idToDelete
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchExpenses.fulfilled,
      (state, action: PayloadAction<Expense[]>) => {
        state.expensesData = action.payload.reverse();
      }
    );
  },
});

export const { addExpense, deleteExpense } = expensesSlice.actions;

export const getExpenses = (state: RootState) => state.expenses.expensesData;
export default expensesSlice.reducer;
