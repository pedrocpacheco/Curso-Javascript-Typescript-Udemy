// 1- Com Objetos
function funcao({ nome, sobrenome, idade })
console.log(nome, sobrenome, idade);

funcao({nome: "Pedro", sobrenome: "Pacheco", idade: 17})

// 2- Com Arrays
function funcao2([v1, v2, v3]){
    console.log(v1, v2, v3);
}

funcao2([1, 2, 3])