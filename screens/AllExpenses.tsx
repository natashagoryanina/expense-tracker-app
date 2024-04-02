import { useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput.tsx/ExpensesOutput";
import { useAppDispatch, useAppSelector } from "../store/redux/hooks";
import {
  fetchExpenses,
  getExpenses,
} from "../store/redux/slices/expensesSlice";
import Loading from "../components/common/Loading/Loading";

const AllExpenses = () => {
  const dispatch = useAppDispatch();
  const expenses = useAppSelector(getExpenses);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    // Dispatch the fetchExpenses action when the component mounts
    dispatch(fetchExpenses());
    setIsLoading(false);
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ExpensesOutput periodName="Total" expenses={expenses} />
      )}
    </>
  );
};

export default AllExpenses;
