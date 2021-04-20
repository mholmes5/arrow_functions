import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// function square(x) {
//   return x * x;
// }

var numbers = [3, 56, 2, 48, 5];

const squareNums = numbers.map((x) => x * x);
//console.log(squareNums);

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.
const newFilterNumbers = numbers.filter((num) => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
var newReduceNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

////Find - find the first item that matches from an array.
const newFindNumber = numbers.find((num) => num > 10);

////FindIndex - find the index of the first item that matches.
const newFindIndexNumber = numbers.findIndex((num) => num > 10);
