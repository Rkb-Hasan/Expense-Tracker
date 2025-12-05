const TableHeadings = () => {
  return (
    <tr className="border-b-2">
      <th className="text-left">Month</th>
      <th className="text-left">Expense</th>
      <th className="text-left">Target</th>
      <th className="text-left">Balance</th>
      <th className="text-right"></th> {/* Empty for Edit */}
      <th className="text-right"></th> {/* Empty for Delete */}
    </tr>
  );
};

export default TableHeadings;
