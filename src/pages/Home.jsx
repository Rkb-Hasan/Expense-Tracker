import { useState } from "react";
import ExpenseContainer from "../components/Expenses/ExpenseContainer";
import MonthlyExpenseTable from "../components/Expenses/MonthlyExpenseTable";
import BalanceSummary from "../components/BalanceSummary";

export default function Home() {
  const [showExpenseTable, setShowExpenseTable] = useState(false);
  return (
    <>
      <div>
        <BalanceSummary onShow={() => setShowExpenseTable((prev) => !prev)} />
        {showExpenseTable && <MonthlyExpenseTable></MonthlyExpenseTable>}
      </div>
    </>
  );
}
