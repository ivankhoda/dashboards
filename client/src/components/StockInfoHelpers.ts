export type StockInfo = {
  index?: number;
  name: string;
  currentPrice: number;
  previousPrice: number;
};
export const getDifference = (currentValue: number, previousValue: number) => {
  const result = ((currentValue - previousValue) / currentValue) * 100.0;

  return result;
};

export const numberTofixedDigits = (num: number, digits: number) => num.toFixed(digits);
export const checkIfValueIsNegative = (value: number) => (value >= 0 ? "positive" : "negative");
