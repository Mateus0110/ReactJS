const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// Atribuição via destructuring
const { nome = 'Não existe!', sobrenome: teste = '', idade } = pessoa;
console.log(nome, teste, idade);

const { endereco, endereco: { rua: r = 12345, numero } } = pessoa;
console.log(endereco, r, numero);

const { nome: n, ...resto } = pessoa;
console.log(n, resto);