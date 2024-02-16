// /* eslint-disable */
const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Valor A',
  keyB: 'Valor B',
};

// objectA.keyA = 'Outro valor';
objectA.keyC = 'Nova chave';
objectA.keyD = 'Nova chave';

console.log(objectA);
