// Add all numbers (reduce)
// Return an array with even numbers (filter)
// Return an array with twice the values (MAP)
//
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Returning the sum of all elements
const allNumbers = numbers. reduce((acc, curr, ind, arr) => {
  // console.log(ind, arr);
  acc += curr;
  return acc;
  }, 0);

// console.log(allNumbers);

// Returning an array only with the even numbers. Remembering that it is not recommended to use reduce, but we will use it.
const pairNumbers = numbers.reduce((acc, curr) => {
  curr % 2 === 0 ? acc.push(curr) : false;
  return acc;
}, []);

console.log(pairNumbers);

// Retoning twice the values.For this function, it would be better to use the MAP, but we will use Reduce.
const twiceNumbers = numbers.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);

console.log(twiceNumbers);

// Return the older person
const people = [
  { name: 'Luiz', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Letícia', age: 10 },
  { name: 'Rosana', age: 64 },
  { name: 'Wallace', age: 63 },
];

const olderPerson = people.reduce((acc, curr) => {
  return acc.age > curr.age ? acc : curr;

});

console.log(olderPerson);