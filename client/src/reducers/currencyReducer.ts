/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from "react-redux";
import { SET_CURRENCY } from "../actions/actions";
import { StatisticsTable } from "../components/StatisticsTable/StatisticsTable";

const initialState = { currency: "$" };

export const setCurrency = (state = initialState.currency, action?: { type: string; payload?: string }) => {
  switch (action?.type) {
    case SET_CURRENCY:
      return action?.payload !== (null || undefined) ? (state = action.payload) : state;
    default:
      return state;
  }
};

const mapStateToProps = (state: any) => {
  return {
    currecy: setCurrency(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onClick: (value: any) => {
      console.log(value);
      dispatch(setCurrency(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsTable);
