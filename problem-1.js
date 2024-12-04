// Array Filtering and Mapping

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Eve", age: 40, gender: "female" },
  { name: "Frank", age: 22, gender: "male" },
];

const func = (people) => {
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

func(people);
