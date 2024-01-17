let num = 1;
let num1 = 6;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;

function imprimirNumeros(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros(num, num1, num2);
console.log('pausa');
imprimirNumeros(num4, num5);
console.log('pausa');
imprimirNumeros(2,3,4,5,6,7,8,9,1);