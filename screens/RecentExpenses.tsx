import ExpensesOutput from "../components/ExpensesOutput.tsx/ExpensesOutput";
import { useEffect, useState } from "react";
import { fetchExpenses } from "../firebase/http";

const RecentExpenses = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchExpenses();
      setData(result);
    };
    getData();
  }, []);

  return <ExpensesOutput periodName="Recent" expenses={data} />;
};

export default RecentExpenses;
