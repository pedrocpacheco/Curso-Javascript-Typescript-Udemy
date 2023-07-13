/*
Primitivos (imutaveis) - string, number, boolean, undefined, null(bigint, symbol)
*/

// 1- Imutabilidade de Strings 
//          01234
let nome = "Pedro" // -> Array de caracteres
nome = "Kauã"
console.log(nome); // Ué? Mas mudou o valor? -> A variavel muda, o valor, seja ele qual for, não.

array = ["Um", "Dois", "Três"]
array[0]  = ["Zero"] // Isso Pode acontecer

nome[0] = "P" // Continua sendo Kauã, e não Pauã, pois String é imutavel

// 2- Copiando valores Primitivos
let a = "A"
let b = a // Copiando valor de A pra B
console.log(a, b)
// Eles são independentes, se o a mudar, o b não muda

/*
Referência (mutavel) - array, object, fucntion
*/

// 3- "Copiando" valores por referencia
let alunos = ["Pedro", "Kauã"]
let pessoas = alunos // Não esta copiando, esta "apontando", pro mesmo local na memoria
console.log(a, b);

// Mudando o alunos
alunos.push("Vinicius")
console.log(a, b); // Os dois vão ter o vinicius, pois apontam pro mesmo lugar

// Mudando o pessoas
alunos.pop()
console.log(a, b); // A e B foram afetados pelo POP

// Valores de Referencia apontam pra um local na memoria