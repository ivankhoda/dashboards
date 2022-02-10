import { Select } from "antd";
import React from "react";
import { SET_CURRENCY } from "../../actions/actions";
import { store } from "../../store";
import { StyledSelectContainer } from "./StyledSelectConatiner";
export const selectCurrency = (currency: string) => {
  return { type: SET_CURRENCY, payload: currency };
};
export const SelectContainer = () => {
  const { Option } = Select;

  const handleChange = (value: string) => {
    store.dispatch(selectCurrency(value));
  };

  return (
    <StyledSelectContainer>
      <h3>Currency</h3>
      <Select
        style={{ width: 73, height: 32, borderRadius: 8, marginLeft: 10 }}
        onChange={handleChange}
        defaultValue="USD"
      >
        <Option value="€">EUR</Option>
        <Option value="$">USD</Option>
      </Select>
    </StyledSelectContainer>
  );
};
