function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = function () {
        console.log('Au au');
    }
}

let cachorro1 = new Cachorro('Poodle', 4, 'Branco e preto');

console.log(cachorro1);
cachorro1.latir();