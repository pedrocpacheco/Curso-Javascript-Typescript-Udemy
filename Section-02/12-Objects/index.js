// Neste arquivo, vamos entender como funcionam os objetos (não classes)

// 1- Criando Objeto
const pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Pacheco',
    idade: 17
}

// 2- Acessando dados do Objeto
console.log(pessoa1.nome); 
console.log(pessoa1.sobrenome); 
console.log(pessoa1.idade); 

// 3- Funcao para criar pessoa
function criaPessoa(nome, sobrenome, idade){
    const pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
    return pessoa
}

// 4- Criando pessoa com o retorno da função 
const pessoa2 = criaPessoa('Pedro', 'Pacheco', 17)

// 5- Deixando a função um pouco menor
function criaPessoaMenor(nome, sobrenome, idade){
    const pessoa = {
        nome,
        sobrenome,
        idade
    }
    return pessoa
}
// Se os atributos tem os mesmos nomes dos parametros, pode so colocar uma vez

// 6- Criando metodo
const advogado = {
    nome: 'Jimmy',
    sobrenome: "McGuil",
    idade: 38,

    argumenta(adversario){
        console.log(`${this.nome.toUpperCase()} IS SO FAR BEYOND YOU ${adversario.toUpperCase()}`);
    },

    incrementaIdade(){
        this.idade++
    }
}

advogado.argumenta("Howard")