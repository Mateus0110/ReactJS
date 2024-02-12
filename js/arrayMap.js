// Bend the numbers
const numbers = [5, 10, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];
const foldedNumbers = numbers.map(currentValue => currentValue * 2);
console.log(foldedNumbers);

// For each element:
// return only one string with the person's name
// Remove only the "name" key from the object
// Add an ID key to each object

const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'Rosana', age: 32 },
  { name: 'Wallace', age: 47 },
];

// Returning only people's names
const nameStringOnly = people.map(currentValue => currentValue.name );
// console.log(nameStringOnly

// Returning only the object name of the object
const onlyKeyAge = people.map(currentValue => ({ age: currentValue.age }));
console.log(onlyKeyAge);

// Adding id key to each object
const addingId = people.map((currentValue, indice) => {
  const ObjectWithID = { ...currentValue };

  return Object.defineProperty(ObjectWithID, 'id', {
    value: indice,
    enumerable: true
  });
});

console.log(people)
console.log(addingId);