import { combineReducers } from "redux";
import { authenticate } from "./authReducer";

export const rootReducer = combineReducers({
  authenticate
});
