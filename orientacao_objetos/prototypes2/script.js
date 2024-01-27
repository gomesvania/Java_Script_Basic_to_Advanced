const pessoa = {
  cabeca: 1,
  maos: 2,
  pernas: 2,
  olhos: 2,
  nariz: 1,
  ouvidos: 2,
  boca: 1,
  bracos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('cabeca'));
console.log(pessoa.hasOwnProperty('cor'));

const pessoaNova = Object.create(pessoa);
console.log(pessoaNova.cabeca);
console.log(pessoaNova.cor);
console.log(pessoaNova.hasOwnProperty('cabeca'));
console.log(Object.getPrototypeOf(pessoaNova) === pessoa);