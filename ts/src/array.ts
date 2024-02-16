// Array<T> - T[]
export function mutipleArguments(...args: Array<number>): number {
  return args.reduce((acc, curr) => acc * curr, 1);
}

export function concatenateStrings(...args: string[]): string {
  return args.reduce((acc, curr) => acc + curr, '');
}

export function toUpperString(...args: string[]): string[] {
  return args.map((curr) => curr.toUpperCase());
}

const multiplication = mutipleArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const concatenation = concatenateStrings('a', 'b', 'c');
const toUpper = toUpperString('a', 'b', 'c');

console.log(multiplication);
console.log(concatenation);
console.log(toUpper);
