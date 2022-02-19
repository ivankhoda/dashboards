/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from "redux";
import { currencies, currency } from "./currencyReducer";

export const rootReducer = combineReducers({
  currencies,
  currency,
});
export type RootState = ReturnType<typeof rootReducer>;
