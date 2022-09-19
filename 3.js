"use strict";

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "Not prime";
    }
  }

  return "Prime";
};

const getNaturalDividers = (number) => {
  const dividers = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }

  return dividers;
};

const getLastDigit = (number) => {
  return number % 10;
};

const getHowManyTimesNumberFive = (number) => {
  let count = 0;

  while (number > 0) {
    if (number % 10 === 5) {
      count++;
    }
    number = Math.floor(number / 10);
  }

  return count;
};

const main = (number) => {
  let isNumberPrime = isPrime(number);
  let dividers = getNaturalDividers(number);
  let lastDigit = getLastDigit(number);
  let howManyTimesNumberFive = getHowManyTimesNumberFive(number);

  console.log("Is prime: " + isNumberPrime);

  console.log("Natural dividers: " + dividers);

  console.log("Last digit: " + lastDigit);

  console.log("How many times number five: " + howManyTimesNumberFive);
};

main(555);
