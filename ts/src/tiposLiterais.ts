let x = 10;
x = 0b1010;

const y = 10;

let a: 100 = 100;
// a = 120;

let d = 100 as const;

const person = {
  nome: 'Enzo' as const,
  sobrenome: 'Evangelista',
};

function chooseColor(color: 'Vermelho' | 'Amarelo' | 'Azul') {
  return color;
}

console.log(chooseColor('Azul'));

// Module mode
export default 1;
