"use strict";

const calculateNumericalSeries = (k, n) => {
  sum = 0;

  for (let i = 0; i <= k; i++) {
    sum += Math.pow(-1, i) / (n + i);
  }

  return sum;
};

const main = () => {
  console.log(calculateNumericalSeries(3, 2));
};

main();
