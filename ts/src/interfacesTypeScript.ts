interface NameType {
  name: string
}

type SurnameType = {
  surname: string;
}

type FullNameType = {
  fullName: () => string;
}

type PersonType = NameType & SurnameType & FullNameType;

interface personType2 extends NameType, SurnameType, FullNameType {}

export class Person implements personType2 {
  constructor(public name: string, public surname: string) {}
  fullName(): string {
    return `${this.name} ${this.surname}`;
  };
}

const personObj: personType2 = {
  name: 'Enzo',
  surname: 'Mateus',
  fullName() {
    return `${this.name} ${this.surname}`;
  }
}

const person = new Person('Enzo', 'Evangelista');
console.log(person.fullName());
