class Gato {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  miar() {
    console.log("Miau!");
  }

  get cor() {
    return this._cor;
  }

  set cor(cor) {
    this._cor = cor;
  }
}

let faisca = new Gato("Faisca", 2, "sem cor" );
console.log(faisca);

faisca.cor = "preto";
console.log(faisca.cor);