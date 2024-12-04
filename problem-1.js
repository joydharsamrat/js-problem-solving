// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Eve", age: 40, gender: "female" },
  { name: "Frank", age: 22, gender: "male" },
];

const getNames = (people) => {
  let names = [];

  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    if (p.gender !== "female") {
      names.push(p.name);
    }
  }

  console.log(names);

  return names;
};

getNames(people);
