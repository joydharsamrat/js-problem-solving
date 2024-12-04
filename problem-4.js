// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Focus", year: 2017 },
  { make: "Chevrolet", model: "Malibu", year: 2020 },
  { make: "Nissan", model: "Altima", year: 2019 },
];

const sortCars = (cars) => {
  const sortedCars = cars.sort((a, b) => a.year - b.year);
  console.log(sortedCars);
  return sortedCars;
};

sortCars(cars);
