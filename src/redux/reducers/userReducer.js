import { CHANGE_EMAIL } from "../actions";

const INITIAL_STATE = {
  email: '',
}

const userReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch(type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: payload,
      };
    default:
      return state;
  }
}

export default userReducer;
