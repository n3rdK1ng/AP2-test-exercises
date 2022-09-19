"use strict";
const prompt = require("prompt-sync")({ sigint: true });

const getInputNumber = () => {
  let inputNumber;

  while (!inputNumber) {
    inputNumber = Number(prompt("Enter a number: "));
  }

  return inputNumber;
};

const getSum = (d, h, b) => {
  let sum = 0;

  for (d; d < h; d++) {
    if (d % b == 0) continue;
    sum += d;
  }

  return sum;
};

const main = () => {
  const d = getInputNumber();
  const h = getInputNumber();
  const b = getInputNumber();
  const sum = getSum(d, h, b);
  console.log(sum);
};

main();
