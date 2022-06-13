import { CHANGE_CURRENCIES, CHANGE_EXPENSES } from "../actions";

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
}

const walletReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch(type) {
    case CHANGE_CURRENCIES:
      return {
        ...state,
        currencies: payload,
      };
    case CHANGE_EXPENSES:
      return {
        ...state,
        expenses: payload,
      }
    default:
      return state;
  }
}

export default walletReducer;
