// Método shift() e unshift() - Removendo e adicionando elementos no início do array

let frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

console.log(frutas);
let primeiraFruta = frutas.shift();
console.log(primeiraFruta)
console.log(frutas);

frutas.unshift("Laranja");
console.log(frutas);