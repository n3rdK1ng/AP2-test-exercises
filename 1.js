'use strict';

const BMI = (weight, height) => {
  return weight / (height * height);
};

const checkBMI = (BMI) => {
  if (BMI < 18.5) {
    return "Underweight";
  } else if (BMI < 25) {
    return "Normal";
  } else if (BMI < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

const main = () => {
  const weight = 65;
  const height = 1.8;
  const bmi = BMI(weight, height);
  const result = checkBMI(bmi);
  console.log(result);
}

main();
