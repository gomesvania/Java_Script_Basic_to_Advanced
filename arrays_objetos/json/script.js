let pessoa = {
  "nome": "Vania",
  "sobrenome": "Gomes",
  "idade": 30,
  "endereco": {
    "rua": "Rua dos Rios",
    "numero": 0,
    "complemento": "Apto 101"
  },
  "profissao": "Desenvolvedora Front-end",
  "hobbies": [
    "Leitura",
    "Música",
    "Viagens",
    "Correr",
    "Meditar"
  ]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto);
console.log(pessoaJson);
console.log(pessoaJson.hobbies[2]);