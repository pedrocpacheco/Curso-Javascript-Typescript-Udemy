class Pessoa {
  constructor(nome, idade) {
    this.nome = nome,
    this.idade = idade;
  }

  falar(){
    console.log("Estou falando");
  }
}

const pedro = new Pessoa("Pedro", 18)
console.log(pedro.nome);