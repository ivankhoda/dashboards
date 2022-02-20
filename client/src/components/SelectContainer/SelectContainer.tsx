import { Select } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_CURRENCY } from "../../actions/actions";
import { RootState } from "../../reducers/reducer";
import { StyledSelectContainer } from "./StyledSelectConatiner";

export const selectCurrency = (currency: string) => {
  return { type: SELECT_CURRENCY, payload: currency };
};
export const SelectContainer = () => {
  const { Option } = Select;
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currency, setCurrency] = useState("");

  const handleChange = (value: string) => {
    dispatch(selectCurrency(value));
    setCurrency(value);
  };
  const currencyData = useSelector((state: RootState) => state.currencies);

  return (
    <StyledSelectContainer>
      <h3>Currency</h3>
      <Select
        style={{ width: 73, height: 32, borderRadius: 8, marginLeft: 10 }}
        onChange={handleChange}
        defaultValue="USD"
      >
        {Array.isArray(currencyData) ? (
          currencyData.map((currency) => (
            <Option key={currency.value} value={currency.value}>
              {currency.name}
            </Option>
          ))
        ) : (
          <></>
        )}
      </Select>
    </StyledSelectContainer>
  );
};
