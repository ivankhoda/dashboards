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

//QTY of random numbers
//random numbers

const calculateIntervals = (point1: number, point2: number) => {
  const totalPoints = point1 > point2 ? point1 - point2 : point2 - point1;
};

const lines = ["Line 1", "Line 2", "Line 3"];

const generateQuantityOfRandomNumber = (lines: string[], interval: number) => {
  const generateFakePrice = () => randomValueBetweenInterval(1, 150).toString();
  const values: any = [];
  const dataSets: any = [];
  for (let i = 0; i <= interval; i++) {
    values.push({ interval: i, price: generateFakePrice() });
  }
  lines.forEach((line) => {
    dataSets.push({
      line: line,
      prices: values,
    });
  });

  return dataSets;
};

app.get("/prices", (req: any, res: any) => {
  const result = generateFakePrices(goods, 20000);
  console.log(result);
  res.json(result);
});

app.get("/lines", (req: any, res: any) => {
  const result = generateQuantityOfRandomNumber(lines, 10);

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
