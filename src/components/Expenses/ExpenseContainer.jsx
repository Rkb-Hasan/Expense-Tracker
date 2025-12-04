import ExpenseCard from "../common/ExpenseCard";

export default function ExpenseContainer() {
  return (
    <div
      className="mx-auto 
                grid 
                grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3 
                gap-4"
    >
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
    </div>
  );
}
