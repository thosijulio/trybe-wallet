import { ADD_EXPENSES, REMOVE_EXPENSE } from "../actions";

const INITIAL_STATE = {
  expenses: [],
  totalExpense: 0,
}

const walletReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch(type) {
    case ADD_EXPENSES: {
      return {
        expenses: payload.expenses,
        totalExpense: payload.totalExpense,
      }
    }

    case REMOVE_EXPENSE: {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id),
        totalExpense: state.totalExpense - payload.valueConverted,
      };
    }

    default:
      return state;
  }
}

export default walletReducer;
