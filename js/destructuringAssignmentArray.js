let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

[a, b, c] = [b, c, a];

console.log(a, b, c);

// Array Number and Rest Operator
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, , , quintoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, quintoNumero);
console.log(resto);

// Array Aninhado
const numeros2 = [ [1, 2, 3,], [4, 5, 6], [7, 8, 9]];
const [, [, , seis]] = numeros2;
// A forma acima é mais complexa. Irá te confundir com toda a certeza.
console.log(seis);

const [listas1, listas2, listas3] = numeros2;
console.log(listas2[2], listas2[3] = 'Não existe!');
// listas2[3]: O índice não existe, mas, possui um valor padrão.