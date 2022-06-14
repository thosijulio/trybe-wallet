export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const changeEmailAction = (payload) => ({
  type: CHANGE_EMAIL,
  payload,
});

export const addExpensesAction = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});
