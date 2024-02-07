class Gato {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  miar() {
    console.log('Miau');
  }
}

Gato.prototype.patas = 4;

let faisca = new Gato('Faisca', 2);
let chin = new Gato('Chin', 3);

console.log(faisca.patas);
console.log(chin.patas);

faisca.miar();