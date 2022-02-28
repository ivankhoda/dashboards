/* eslint-disable @typescript-eslint/no-explicit-any */
import { SELECT_CURRENCY } from "../actions/actions";

const initialState = [
  {
    name: "USD",
    value: "$",
  },
  {
    name: "EUR",
    value: "€",
  },
];
export const currencies = (state = initialState, action?: { type: string; payload?: string }) => {
  switch (action?.type) {
    default:
      return state;
  }
};
export const currency = (state = initialState[0].value, action?: { type: string; payload?: string }) => {
  switch (action?.type) {
    case SELECT_CURRENCY:
      action?.payload !== (null || undefined) ? (state = action.payload) : state;
    default:
      return state;
  }
};
