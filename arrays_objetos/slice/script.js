// slice() retorna um novo array com os elementos do array original

let numero = [0, 1, 2, 3, 4, 5, 6, 7,8];

console.log(numero.slice(0)); // [0, 1, 2, 3, 4, 5, 6, 7, 8]  
console.log(numero.slice(2)); // [2, 3, 4, 5, 6, 7, 8]
console.log(numero.slice(2, 5)); // [2, 3, 4]
console.log(numero.slice(2, 5).reverse()); // [4, 3, 2]
console.log(numero(-2)); // 7
console.log(numero(4,-2)); // [4, 5, 6]