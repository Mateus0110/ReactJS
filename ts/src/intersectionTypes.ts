type ItHasAname = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };
type Person = ItHasAname & HasSurname & HasAge; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;

const thirdPerson: Person = {
  name: 'Enzo',
  surname: 'Evangelista',
  age: 17,
}

console.log(thirdPerson);

export { thirdPerson };

