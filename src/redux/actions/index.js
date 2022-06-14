export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_CURRENCIES = 'CHANGE_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const changeEmailAction = (payload) => ({
  type: CHANGE_EMAIL,
  payload,
});

export const changeCurrenciesAction = (payload) => ({
  type: CHANGE_CURRENCIES,
  payload,
});

export const addExpensesAction = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});
