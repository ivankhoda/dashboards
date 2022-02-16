var express = require("express");
var cors = require("cors");
var app = express();
var PORT = 8000;
var localhost = "http://localhost:4000/";
app.use(cors({
    origin: "*"
}));
var goods = ["Water", "Fire", "Wood", "Wind"];
var countries = ["Russia", "China", "United States", "Spain"];
var rows = [
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
var randomInt = function (range) { return Math.floor(Math.random() * range); };
var randomValueBetweenInterval = function (max, min) { return Math.floor(Math.random() * (max - min + 1)) + min; };
Array.prototype.pickRandom = function () {
    return this[randomInt(this.length)];
};
var generateFakePrices = function (items, limit) {
    var generateFakePrice = function () { return randomValueBetweenInterval(1, limit); };
    var values = [];
    items.forEach(function (item) {
        values.push({
            name: item,
            currentPrice: generateFakePrice(),
            previousPrice: generateFakePrice()
        });
    });
    return values;
};
var lines = ["Line 1", "Line 2", "Line 3"];
var generateQuantityOfRandomNumber = function (lines, interval) {
    var generateFakePrice = function () { return randomValueBetweenInterval(1, 150); };
    var dataSets = [];
    lines.forEach(function (line) {
        var values = [];
        for (var i = 0; i < interval; i++) {
            var price = generateFakePrice();
            values.push(price);
        }
        dataSets.push({
            name: line,
            data: values
        });
    });
    return dataSets;
};
app.get("/prices", function (req, res) {
    var result = generateFakePrices(goods, 20000);
    res.json(result);
});
app.get("/statistics", function (req, res) {
    var result = generateFakePrices(rows, 20000);
    res.json(result);
});
app.get("/lines", function (req, res) {
    var dateFrom = new Date(req.query.From);
    var dateTo = new Date(req.query.To);
    var Difference_In_Time = dateTo.getTime() - dateFrom.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    var calculateTime = function (firstDate, nextDate) {
        var oneDay = 24 * 60 * 60 * 1000;
        var oneHour = 60 * 60 * 1000;
        var differenceInDays = (nextDate - firstDate) / oneDay;
        var differenceInHours = (nextDate - firstDate) / oneHour;
        var wholeDay = 1;
        var period;
        var time;
        differenceInDays >= wholeDay
            ? ((period = Math.floor(differenceInDays)), (time = "days"))
            : ((period = Math.floor(differenceInHours)), (time = "hours"));
        return { period: period, time: time };
    };
    var intervals = calculateTime(dateFrom, dateTo);
    console.log(Difference_In_Days);
    console.log(intervals);
    console.log(dateFrom, dateTo, "date back");
    var result = generateQuantityOfRandomNumber(lines, 7);
    res.json(result);
});
app.get("/countries", function (req, res) {
    var result = generateFakePrices(countries, 10000);
    res.json(result);
});
app.get("/", function (req, res) {
    var result = "hello";
    res.json(result);
});
app.listen(PORT, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:".concat(PORT));
});
