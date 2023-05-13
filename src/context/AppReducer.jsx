export default (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "delete":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
