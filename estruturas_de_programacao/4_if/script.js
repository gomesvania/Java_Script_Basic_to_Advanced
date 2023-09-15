let idade = 19;
let nome = "Felipe";
let passaporte = true;

if (idade == 19) {
    console.log("Você tem 19 anos");
}

if (idade > 25) {
    console.log("Você tem mais de 25 anos");
}

if (nome == "Felipe" && idade >= 18) {
    console.log("Libera acesso");
}

if ((nome == "Felipe" && idade >= 18) || passaporte == true) {
    console.log("Libera acesso");
}