const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 8000;
const localhost = "http://localhost:4000/";
app.use(
  cors({
    origin: "*",
  })
);
const goods = ["Water", "Fire", "Wood", "Wind"];

const countries = ["Russia", "China", "United States", "Spain"];

const rows = [
  "Row1",
  "Row2",
  "Row3",
  "Row4",
  "Row5",
  "Row6",
  "Row7",
  "Row8",
  "Row9",
  "Row10",
  "Row11",
  "Row12",
  "Row13",
  "Row14",
  "Row15",
];

const randomInt = (range: number) => Math.floor(Math.random() * range);
const randomValueBetweenInterval = (max: number, min: number) => Math.floor(Math.random() * (max - min + 1)) + min;

interface Array<T> {
  pickRandom: () => string;
}
Array.prototype.pickRandom = function () {
  return this[randomInt(this.length)];
};

interface Data {
  name: string;
  currentPrice: number;
  previousPrice?: number;
}
const generateFakePrices = (items: string[], limit: number) => {
  const generateFakePrice = () => randomValueBetweenInterval(1, limit);
  const values: Data[] = [];
  items.forEach((item) => {
    values.push({
      name: item,
      currentPrice: generateFakePrice(),
      previousPrice: generateFakePrice(),
    });
  });
  return values;
};

const lines = ["Line 1", "Line 2", "Line 3"];
type IntervalInfo = {
  interval: number;
  price: number;
};
const generateQuantityOfRandomNumber = (lines: string[], interval: number) => {
  const generateFakePrice = () => randomValueBetweenInterval(1, 150);

  const dataSets: any = [];

  lines.forEach((line) => {
    const values: number[] = [];
    for (let i = 0; i < interval; i++) {
      const price = generateFakePrice();
      values.push(price);
    }
    dataSets.push({
      name: line,
      data: values,
    });
  });

  return dataSets;
};

app.get("/prices", (req: any, res: any) => {
  const result = generateFakePrices(goods, 20000);

  res.json(result);
});

app.get("/statistics", (req: any, res: any) => {
  const result = generateFakePrices(rows, 20000);

  res.json(result);
});

app.get("/lines", (req: any, res: any) => {
  const interval = req.query.interval;

  const result = generateQuantityOfRandomNumber(lines, interval);

  res.json(result);
});

app.get("/countries", (req: any, res: any) => {
  const result = generateFakePrices(countries, 10000);

  res.json(result);
});

app.get("/", (req: any, res: any) => {
  const result = "hello";

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
