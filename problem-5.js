// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Eve", age: 40, gender: "female" },
  { name: "Frank", age: 22, gender: "male" },
];

const name = "Diana";

const modifyAge = (people, name) => {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      people[i].age += 1;
    }
  }

  console.log(people);

  return people;
};
modifyAge(people);
