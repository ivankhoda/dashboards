import { Select } from "antd";
import React, { useState } from "react";
import { store } from "../../store";
import { StyledSelectContainer } from "./StyledSelectConatiner";
export const selectCurrency = (currency: string) => {
  return { type: currency };
};
export const SelectContainer = () => {
  const defaultCurrency = store.getState().setCurrency;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currency, setCurrency] = useState(defaultCurrency);

  const { Option } = Select;

  const handleChange = (value: string) => {
    store.dispatch(selectCurrency(value));
    setCurrency(store.getState().setCurrency);
  };

  return (
    <StyledSelectContainer>
      <h3>Currency</h3>
      <Select
        style={{ width: 73, height: 32, borderRadius: 8, marginLeft: 10 }}
        onChange={handleChange}
        defaultValue="USD"
      >
        <Option value="EURO">EUR</Option>
        <Option value="USD">USD</Option>
      </Select>
    </StyledSelectContainer>
  );
};
