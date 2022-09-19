"use strict";

const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }

    return true;
  }

  return false;
};

const getDaysInYear = (year) => {
  return isLeapYear(year) ? 366 : 365;
};

const getDaysInMonth = (month, year) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      return isLeapYear(year) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
};

const getAmountOfDaysFrom1900 = (year, month, day) => {
  const startingDay = 1;
  const startingMonth = 1;
  const startingYear = 1900;
  let sum = 0;

  for (let i = startingYear; i < year; i++) {
    sum += getDaysInYear(i);
  } // 365 * (year - 1900)

  for (let i = startingMonth; i < month; i++) {
    sum += getDaysInMonth(i, year);
  } // 30 * (month - 1)

  sum += day - startingDay; // day - 1

  return sum;
};

getAmountOfDaysInInterval = (year1, month1, day1, year2, month2, day2) => {
  const amountOfDays1 = getAmountOfDaysFrom1900(year1, month1, day1);
  const amountOfDays2 = getAmountOfDaysFrom1900(year2, month2, day2);

  return amountOfDays2 - amountOfDays1;
};

console.log(getAmountOfDaysInInterval(2022, 9, 15, 2023, 9, 15));
