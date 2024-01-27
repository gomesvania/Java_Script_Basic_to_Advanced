const cachorro = {
  raca: 'Sem raça definida',
  uivar: function() {
    console.log('auuuuuu auuuuuuuu')
  },
  rosnar: function() {
    console.log('grrrrrrrrr grrrrrrrrr')
  },
  setRaca: function(raca) {
    this.raca = raca;
  },
  getRaca: function() {
    return "A raça é " + this.raca;
  }
}

cachorro.uivar();
cachorro.rosnar();

console.log(cachorro.raca);
cachorro.setRaca('Poodle');
console.log(cachorro.raca);

console.log(cachorro.getRaca());