import { useGlobalContext } from "../context/GlobalContext";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useGlobalContext();
  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold w-full">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
