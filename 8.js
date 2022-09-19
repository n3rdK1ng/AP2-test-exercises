"use strict";
const prompt = require("prompt-sync")({ sigint: true });

const inputDayNumber = () => {
  let dayNumber;

  while (!dayNumber) {
    dayNumber = Number(prompt("Enter the day number: "));
  }

  return dayNumber;
};

const printDays = (dayNumber) => {
  console.log("Mon   Tue   Wed   Thu   Fri   Sat   Sun");

  let day = 1;
  let week;
  const space = " ";

  if (day === 1) {
    week = space.repeat(5 * dayNumber - 2);

    for (let i = day; i <= 7 - dayNumber + 1; i++) {
      if (day <= 31) {
        week += day + space.repeat(5);
        day++;
      }
    }
    console.log(week);
  }

  while (day <= 31) {
    week = "";

    for (let i = 0; i < 7; i++) {
      if (day <= 31) {
        if (day < 10) {
          day = day + space;
        }

        week += day + space.repeat(4);
        day++;
      }
    }
    console.log(week);
  }
};

const main = () => {
  const dayNumber = inputDayNumber();
  printDays(dayNumber);
};

main();
