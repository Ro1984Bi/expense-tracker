import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalContext } from "../context/GlobalContext";

function ExpenseChart() {
  const { transactions } = useGlobalContext();

  const totalIncomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentages = Math.round(
    (totalExpenses / totalIncomes) * 100
  );

  const totalIncomesPercentages = 100 - totalExpensesPercentages
  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expenses", y: totalExpensesPercentages },
        { x: "Incomes", y: totalIncomesPercentages },
      ]}
      animate={{
        duration: 2000,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}

export default ExpenseChart;
