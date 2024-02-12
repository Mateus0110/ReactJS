// Filter -> Always returns an array, with the same amount of elements or less.
// Return the numbers greater than 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27];

const highersThanTen = numbers.filter(currentValue => currentValue > 10);

console.log(highersThanTen);

// Return the people who have the name with 5 letters or more
// Return people over 50
// Return the people whose name ends with the letter "a"
const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 19 },
  { name: 'Rosana', age: 32 },
  { name: 'Wallace', age: 47 }
];

// Names greater than or equal to 5 letters
const peopleWithBigNames = people.filter(currentValue => currentValue.name.length >= 5);
// console.log(peopleWithBigNames);

// people over 50 years old
const peopleOver50YearsOld = people.filter(currentValue => currentValue.age > 50);
// console.log(peopleOver50YearsOld);

// Names that end with the letter "a"
const namesEndWithA = people.filter(currentValue => {
  currentValue.name.toLowerCase().endsWith('a');
});
console.log(namesEndWithA);