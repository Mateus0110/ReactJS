/* eslint-disable */
// let username: string = 'Enzo';

// Basic types (here type inference occurs)
const username: string = 'Enzo'; // Any kind of strings: '', "", ``
const age: number = 16; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
const adult: boolean = false; // true, false
const symbol: symbol = Symbol('any-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
const listOfNumbers: Array<number> = [1, 2, 3];
const listOfStrings: string[] = ['a', 'b', 'c'];

// Objects
const person: {
  name: string;
  age: number;
  adult?: boolean;
} = {
  name: 'Enzo',
  age: 16,
  adult: false,
};

console.log(person);

// Functions
function add(x: number, y: number) {
  return x + y;
}

const result = add(2, 2);

const add2: (x: number, y: number) => number = (x, y) => x + y;
const result2 = add2(2, 5);
