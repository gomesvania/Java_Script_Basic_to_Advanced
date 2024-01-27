let cachorro = {
  raca: 'SRD',
  patas: 4,
  latir: function() {
    console.log('Au au');
  }
}

// Cria um novo objeto com o prototype de cachorro
let golden = Object.create(cachorro);
console.log(golden.raca);

let labrador = Object.create(cachorro);
console.log(labrador.raca);

console.log(cachorro.isPrototypeOf(golden));
console.log(cachorro.isPrototypeOf(labrador));

// Adiciona o método latir() ao objeto golden e labrador
golden.latir();
labrador.latir();
