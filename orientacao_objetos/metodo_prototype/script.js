function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.latir = function () {
    console.log('Au au');
}

let viki = new Cachorro('Pug', 4, 'Branca e preta');

viki.latir();
console.log(viki);