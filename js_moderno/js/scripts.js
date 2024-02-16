//1 - var, let, const
var x = 10;  // => console.log(10);
var y = 20;

if (y > 10) {
    var x = 30;
    console.log(x); // => console.log(30);
}

console.log(x); // => console.log(10);

let a = 10;  // => console.log(10);
let b = 20;

if(b > 10) {
    let a = 50;
    console.log(a); // => console.log(50);
}

console.log(a); // => console.log(10);

let i = 25; // => console.log(25);
console.log(i); // => console.log(25);

for(let i = 0; i < 5; i++) {
    console.log(i); // => console.log(0, 1, 2, 3, 4);
}

function myName() {
    const myName = 'João';
    console.log(myName); // => console.log('João');
}

const logName = 'Pedro'; // => console.log('Pedro');
console.log(logName); // => console.log('Pedro');
myName(); // => console.log('João');

//com let e const os seus respectivos valores não podem ser reatribuidos
//com var os valores podem ser reatribuidos
//com const os valores são imutáveis

// 2 - Arrow Functions
const sum1 = function(a, b) {
    return a + b; // => console.log(10);
}

const sum = (a, b) => a + b;
console.log(sum(5, 5)); // => console.log(10);

const arrowSum = (a, b) => {
    return a + b; // => console.log(10);
}

const teste = () => console.log('teste'); // => console.log('teste');

console.log(sum1(5, 5)); // => console.log(10);
console.log(sum(5, 5)); // => console.log(10);
console.log(arrowSum(5, 5)); // => console.log(10);
