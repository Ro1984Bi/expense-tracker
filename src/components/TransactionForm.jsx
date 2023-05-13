import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { v4 } from "uuid";

function TransactionForm() {
  const { addTransaction } = useGlobalContext();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: v4(),
      description,
      amount: +amount,
    });
    setDescription("");
    setAmount(0);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-md block mb-2 w-full"
          value={description}
        />
        <input
          type="number"
          placeholder="00.00"
          step="0.01"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-md block mb-2 w-full"
          value={amount}
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
