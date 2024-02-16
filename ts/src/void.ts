// /* eslint-disable */
function noReturn(...args: string[]): void {
  console.log(args);
}

export const person = {
  name: 'Enzo',
  surname: 'Evangelista',
  showTheName(): string {
    return `${this.name} ${this.surname}`;
  },
};

noReturn('Enzo', 'Mateus');
person.showTheName();
