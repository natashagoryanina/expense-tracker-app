import { RootState } from "./../store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
});

export const { addExpense, deleteExpense } = expensesSlice.actions;

export const getExpenses = (state: RootState) => state.expenses.expensesData;
export default expensesSlice.reducer;
