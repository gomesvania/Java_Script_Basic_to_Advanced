function criaCachorro(nome, raca, cor) {
    let cachorro = Object.create({});
    cachorro.nome = nome;
    cachorro.raca = raca;
    cachorro.cor = cor;
    cachorro.dormir = function () {
      console.log('Zzzzzzz');
    }
    return cachorro;
}

let cachorro1 = criaCachorro('Totó', 'Poodle', 'Branco e preto');
let cachorro2 = criaCachorro('Viki', 'Viralata', 'Branco e preto');

console.log(cachorro1);
console.log(cachorro2);
cachorro2.dormir();