class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  // Methods
  toDrink() {
    console.log(`${this.name} está bebendo.`);
  }
}

const aPerson = new Person('Enzo', 'Evangelista');
const anotherPerson = new Person('Anastácia', 'Evangelista');

// Construction function
function Person2 (name, surname) {
  this.name = name;
  this.surname = surname;
}

Person2.prototype.toDrink = function () {
  console.log(`${this.name} está bebendo.`);
};

const aPerson2 = new Person2('Enzo', 'Evangelista');
const anotherPerson2 = new Person2('Anastácia', 'Evangelista');

