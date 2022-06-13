import { combineReducers } from "redux";
import userReducer from "./userReducer";
import wallerReducer from './walletReducer';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: wallerReducer,
});

export default rootReducer;
