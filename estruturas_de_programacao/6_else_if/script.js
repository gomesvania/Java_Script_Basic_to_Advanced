let nome = "Isabela";
let idade = 31;

if (nome != undefined) {
    console.log("O nome está definido");
} else if (nome == "Isabela" && nome.length > 5) {
    console.log("O nome é Isabela");
} else {
    console.log("O nome não é Isabela");
}

if (nome != undefined && nome == "Romildo") {
    console.log("O nome está definido");
} else if (nome == "Isabela" && nome.length > 5 && idade == 50) {
    console.log("O nome é Isabela");
} else {
    console.log("O nome não é Isabela");
}

if (1 > 2) {
    console.log("teste");
} else if (1 == 1) {
    console.log("teste 2");
}