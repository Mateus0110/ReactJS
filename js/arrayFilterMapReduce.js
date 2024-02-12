// Return the double sum of all pairs
// -> Filter pairs
// -> double the values
// -> Reduce (add everything)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const AddingFoldedPairs = numbers
      .filter(curr => curr % 2 === 0)
      .map(curr => curr * 2)
      .reduce((acc, curr) => acc + curr);

console.log(AddingFoldedPairs);


