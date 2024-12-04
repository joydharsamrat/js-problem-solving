// 6.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [3, 5, 4, 6, 9];

const getSum = (numbers) => {
  const sum = numbers.reduce((acc, number) => {
    return number % 2 === 0 ? acc + number : acc;
  }, 0);
  console.log(sum);
  return sum;
};

getSum(numbers);
