const firstUserData: [number, string] = [1, 'Enzo'];
const secondUserData: [number, string, string] = [2, 'Enzo', 'Evangelista'];
const thirdUserData: [number, string, string?] = [3, 'Enzo'];
const fourthUserData: readonly [number, string, ...string[]] = [
  4,
  'Enzo',
  'Miranda',
];

firstUserData[0] = 100;
firstUserData[1] = '100';

secondUserData[0] = 200;
secondUserData[1] = 'Anastácia';

thirdUserData.pop();
// fourthUserData.pop(); // Error for being Readonly

console.log(firstUserData);
console.log(secondUserData);
console.log(thirdUserData);
console.log(fourthUserData);
