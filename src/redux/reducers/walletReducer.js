import { ADD_EXPENSES, EDIT_EXPENSE, REMOVE_EXPENSE } from "../actions";

const INITIAL_STATE = {
  expenses: [],
}

const walletReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch(type) {
    case ADD_EXPENSES:
      return {
        expenses: payload,
      }
    case EDIT_EXPENSE:
      return state;
    case REMOVE_EXPENSE:
      return state;
    default:
      return state;
  }
}

export default walletReducer;
