"use strict";
const prompt = require("prompt-sync")({ sigint: true });

const getTwentyRandomNumbers = () => {
  const randomNumbers = [];

  for (let i = 0; i < 20; i++) {
    let randomNumber = getRandomIntInclusive(1, 80);

    if (randomNumbers.includes(randomNumber)) {
      console.log("Number is already entered");
      i--;
      continue;
    }

    randomNumbers.push(randomNumber);
  }

  randomNumbers.sort(numericSort);
  return randomNumbers;
};

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return randomNumber;
};

const numericSort = (a, b) => {
  return a - b;
};

const inputTenNumbers = () => {
  const inputNumbers = [];

  for (let i = 0; i < 10; i++) {
    console.log("Enter a number between 1 and 80");
    let inputNumber = Number(prompt());

    if (inputNumber < 1 || inputNumber > 80) {
      console.log("Number is not between 1 and 80");
      i--;
      continue;
    }

    if (!inputNumber) {
      console.log("Input is not a number");
      i--;
      continue;
    }

    if (inputNumbers.includes(inputNumber)) {
      console.log("Number is already entered");
      i--;
      continue;
    }

    inputNumbers.push(inputNumber);
  }
  inputNumbers.sort(numericSort);

  return inputNumbers;
};

const compareNumbers = (randomNumbers, inputNumbers) => {
  const matchedNumbers = [];

  for (let i = 0; i < randomNumbers.length; i++) {
    for (let j = 0; j < inputNumbers.length; j++) {
      if (randomNumbers[i] === inputNumbers[j]) {
        matchedNumbers.push(randomNumbers[i]);
      }
    }
  }

  return matchedNumbers;
};

const getWinningPrize = (matchedNumbers) => {
  const prize = {
    0: "1x",
    1: "No prize",
    2: "No prize",
    3: "No prize",
    4: "No prize",
    5: "3x",
    6: "10x",
    7: "20x",
    8: "500x",
    9: "10 000x",
    10: "200 000x",
  };

  return prize[matchedNumbers.length];
};

const main = () => {
  const randomNumbers = getTwentyRandomNumbers();
  const inputNumbers = inputTenNumbers();
  const matchedNumbers = compareNumbers(randomNumbers, inputNumbers);
  const winningPrize = getWinningPrize(matchedNumbers);
  console.log("The winning numbers are: " + randomNumbers);
  console.log("Your numbers are: " + inputNumbers);
  console.log("You matched: " + matchedNumbers);
  console.log("You won: " + winningPrize);
};

main();
