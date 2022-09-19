"use strict";
const prompt = require("prompt-sync")({ sigint: true });

const getBaseSize = () => {
  let baseSize;

  while (!baseSize) {
    baseSize = Number(prompt("Enter the base size (integer): "));
  }

  return baseSize;
};

const getChar = () => {
  const character = prompt("Enter the character: ");

  return character;
};

const generatePyramid = (baseSize, character) => {
  for (let i = 1; i <= baseSize; i++) {
    let space = " ".repeat(baseSize - i);
    let char = character.repeat(i * 2 - 1);

    console.log(space + char + space);
  }
};

const main = () => {
  const baseSize = getBaseSize();
  const character = getChar();
  generatePyramid(baseSize, character);
};

main();
