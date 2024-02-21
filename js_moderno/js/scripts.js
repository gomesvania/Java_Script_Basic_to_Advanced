//1 - var, let, const
var x = 10; // => console.log(10);
var y = 20;

if (y > 10) {
  var x = 30;
  console.log(x); // => console.log(30);
}

console.log(x); // => console.log(10);

let a = 10; // => console.log(10);
let b = 20;

if (b > 10) {
  let a = 50;
  console.log(a); // => console.log(50);
}

console.log(a); // => console.log(10);

let i = 25; // => console.log(25);
console.log(i); // => console.log(25);

for (let i = 0; i < 5; i++) {
  console.log(i); // => console.log(0, 1, 2, 3, 4);
}

function myName() {
  const myName = "João";
  console.log(myName); // => console.log('João');
}

const logName = "Pedro"; // => console.log('Pedro');
console.log(logName); // => console.log('Pedro');
myName(); // => console.log('João');

//com let e const os seus respectivos valores não podem ser reatribuidos
//com var os valores podem ser reatribuidos
//com const os valores são imutáveis

// 2 - Arrow Functions
const sum1 = function (a, b) {
  return a + b; // => console.log(10);
};

const sum = (a, b) => a + b;
console.log(sum(5, 5)); // => console.log(10);

const arrowSum = (a, b) => {
  return a + b; // => console.log(10);
};

const teste = () => console.log("teste"); // => console.log('teste');

console.log(sum1(5, 5)); // => console.log(10);
console.log(sum(5, 5)); // => console.log(10);
console.log(arrowSum(5, 5)); // => console.log(10);

// 3 - Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers); // => console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const filter = numbers.filter((number) => number > 5);
console.log(filter); // => console.log([6, 7, 8, 9, 10]);

const users = [
  { name: "João", available: true },
  { name: "Pedro", available: false },
  { name: "Maria", available: true },
  { name: "Ana", available: false },
  { name: "Julia", available: true },
  { name: "Marcos", available: false },
  { name: "Mariana", available: true },
  { name: "Paulo", available: false },
  { name: "André", available: true },
  { name: "Jéssica", available: false },
];

const avaliableUsers = users.filter((user) => user.available);
const unavailableUsers = users.filter((user) => !user.available);

console.log(avaliableUsers); // => console.log([{ name : 'João', available: true }, { name : 'Maria', available: true }, { name : 'Julia', available: true }, { name : 'Mariana', available: true }, { name : 'André', available: true }]);
console.log(unavailableUsers); // => console.log([{ name : 'Pedro', available: false }, { name : 'Ana', available: false }, { name : 'Marcos', available: false }, { name : 'Paulo', available: false }, { name : 'Jéssica', available: false }]);

// 4 - Map

const products = [
  { name: "Camiseta", price: 50.0, category: "Vestuário" },
  { name: "Calça", price: 100.0, category: "Vestuário" },
  { name: "Meia", price: 10.0, category: "Vestuário" },
  { name: "Tênis", price: 200.0, category: "Vestuário" },
  { name: "Boné", price: 30.0, category: "Vestuário" },
  { name: "Óculos", price: 150.0, category: "Vestuário" },
  { name: "Relógio", price: 500.0, category: "Vestuário" },
  { name: "Celular", price: 1000.0, category: "Eletrônico" },
  { name: "Notebook", price: 2000.0, category: "Eletrônico" },
  { name: "Tablet", price: 1500.0, category: "Eletrônico" },
  { name: "Fone de ouvido", price: 100.0, category: "Eletrônico" },
  { name: "Carregador", price: 50.0, category: "Eletrônico" },
  { name: "Mouse", price: 50.0, category: "Eletrônico" },
  { name: "Teclado", price: 100.0, category: "Eletrônico" },
  { name: "Monitor", price: 500.0, category: "Eletrônico" },
  { name: "Geladeira", price: 2000.0, category: "Eletrodoméstico" },
  { name: "Fogão", price: 1000.0, category: "Eletrodoméstico" },
  { name: "Micro-ondas", price: 500.0, category: "Eletrodoméstico" },
  { name: "Liquidificador", price: 200.0, category: "Eletrodoméstico" },
  { name: "Sanduicheira", price: 100.0, category: "Eletrodoméstico" },
  { name: "Aspirador de pó", price: 500.0, category: "Eletrodoméstico" },
  { name: "Máquina de lavar", price: 1000.0, category: "Eletrodoméstico" },
];

products.map((product) => {
  if (product.category === "Vestuário") {
    product.onSale = true;
  }
});

console.log("Produtos em promoção", products);

products.map((product) => {
  if (product.name === "Meia") {
    product.price = product.price + 10.0;
  }
});

console.log("Aumento do preço", products);

// 5 - Literals
const yourName = "Isadora";
const age = 20;

console.log(`Meu nome é ${yourName} e tenho ${age} anos.`);

// 6 - Desestruturação em Arrays
const frutas = ["Banana", "Maçã", "Uva", "Pera", "Abacaxi"];

const [f1, f2, f3, f4, f5] = frutas;

console.log(f3); // => console.log('Uva');
console.log(f5); // => console.log('Abacaxi');

// 6 - Desestruturação em Objetos
const pessoa = {
  nome: "Isadora",
  idade: 20,
  endereco: {
    rua: "Rua dos Bobos",
    numero: 0,
  },
};

const { nome: nomePessoa, idade, endereco: enderecoPessoa } = pessoa;

console.log(nomePessoa); // => console.log('Isadora');
console.log(idade); // => console.log(20);
console.log(enderecoPessoa); // => console.log({ rua: 'Rua dos Bobos', numero: 0 });

// 7 - Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

const arr4 = [13, 9, 7, ...arr3, 3, 17];
console.log(arr4); // => console.log([13, 9, 7, 1, 2, 3, 4, 5, 6, 3, 17]);

const obj1 = { animal: "cachorro" };
const obj2 = { sexo: "femêa" };
const obj3 = { raca: "vira-lata" };
const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4); // => console.log({ animal: 'cachorro', sexo: 'femêa', raca: 'vira-lata' });

// 8 - Classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camiseta", 50.0);
console.log(shirt.name); // => console.log('Camiseta');
console.log(shirt.productWithDiscount(5)); // => console.log(42.5);

const dress = new Product("Vestido", 100.0);
console.log(dress.name); // => console.log('Vestido');
console.log(dress.productWithDiscount(5)); // => console.log(85);

// 9 - Herança
class ProductWithAttribute extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são: ");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttribute("Boné", 30.0, [
  "vermelho",
  "azul",
  "preto",
]);

console.log(hat.name); // => console.log('Boné');
console.log(hat.price); // => console.log(30);
console.log(hat.colors); // => console.log(['vermelho', 'azul', 'preto']);
console.log(hat.productWithDiscount(10)); // => console.log(28.5);
hat.showColors(); // => console.log('As cores são: vermelho azul preto');
