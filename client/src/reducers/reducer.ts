/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from "redux";
import { setCurrency } from "./currencyReducer";

export const reducer = combineReducers({
  setCurrency: setCurrency,
});
