import { ADD_EXPENSES } from "../actions";

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
    default:
      return state;
  }
}

export default walletReducer;
