class Gato {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  miar() {
    console.log('Miau!');
  }
}

Gato.prototype.patas = 4;
Gato.prototype.cor = 'preto';

let faisca = new Gato('Faisca', 2);
let chin = new Gato('Chin', 3);
let pandora = new Gato('Pandora', 1);

console.log(faisca);
console.log(chin);
console.log(pandora.cor);
pandora.miar();
console.log(Gato.prototype.cor);
console.log(Gato.prototype.patas);