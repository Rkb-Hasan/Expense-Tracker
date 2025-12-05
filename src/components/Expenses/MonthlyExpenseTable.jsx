import TableHeadings from "./TableHeadings";
import TableRow from "./TableRow";

const MonthlyExpenseTable = () => {
  return (
    <table className="border w-full ">
      <TableHeadings />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </table>
  );
};

export default MonthlyExpenseTable;
