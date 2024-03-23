type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  preferredCor?: string;
};

type ColorRGB = 'Vermelho' | 'Verde' | 'Blue';
type ColorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type preferredColor = ColorRGB | ColorCMYK;

const secondPerson: Person = {
  name: 'Enzo',
  age: 16,
  salary: 200_000, // 200000
};

export function setPreferredColor(person: Person, color: preferredColor): Person {
  return { ...person, preferredCor: color };
};

console.log(setPreferredColor(secondPerson, 'Ciano'));
