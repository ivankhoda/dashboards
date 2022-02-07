import { EURO, USD } from "../actions/actions";

const initialState = {
  usd: "$",
  euro: "€",
};

export const setCurrency = (state = initialState.usd, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case EURO:
      return initialState.euro;
    case USD:
      console.log(action);
      return initialState.usd;

    default:
      return state;
  }
};
