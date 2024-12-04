// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const number = 5;

const squireNumber = (number) => {
  return number * number;
};
const doubleNumber = (number) => {
  return number * 2;
};
const addFive = (number) => {
  return number + 5;
};

const combine = (number) => {
  const squire = getSquire(number);
  const double = getDouble(squire);
  const result = add5(double);
  console.log(result);
  return result;
};

combine(number);
