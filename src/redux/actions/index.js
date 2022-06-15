export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const changeEmailAction = (payload) => ({
  type: CHANGE_EMAIL,
  payload,
});

export const addExpensesAction = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const removeExpenseAction = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});
