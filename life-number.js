"use strict";

const getLastDigit = (number) => {
  return number % 10;
};

const getAmountOfDigits = (number) => {
  return number.toString().length;
};

const getSumOfDigits = (number) => {
  let sum = 0;
  const amountOfDigits = getAmountOfDigits(number);

  for (let i = 0; i < amountOfDigits; i++) {
    const lastDigit = getLastDigit(number);

    sum += lastDigit;
    number = Math.floor(number / 10);
  }

  return sum;
};

const getSumOfSumsOfDigits = (number) => {
  while (getAmountOfDigits(number) > 1) {
    number = getSumOfDigits(number);
  }

  return number;
};

const getLifeNumber = (dayOfBirth, monthOfBirth, yearOfBirth) => {
  var SumOfSumsOfDigitsOfDateOfBirth =
    getSumOfDigits(dayOfBirth) +
    getSumOfDigits(monthOfBirth) +
    getSumOfDigits(yearOfBirth);

  while (
    getAmountOfDigits(SumOfSumsOfDigitsOfDateOfBirth) > 1 &&
    !(
      SumOfSumsOfDigitsOfDateOfBirth == 11 ||
      SumOfSumsOfDigitsOfDateOfBirth == 22
    )
  ) {
    SumOfSumsOfDigitsOfDateOfBirth = getSumOfDigits(
      SumOfSumsOfDigitsOfDateOfBirth
    );
  }

  return SumOfSumsOfDigitsOfDateOfBirth;
};

const main = () => {
  console.log(getLifeNumber(5, 5, 1990));
};

main();
