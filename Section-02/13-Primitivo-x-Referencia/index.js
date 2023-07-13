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

// 2 - Copiando valores Primitivos
let a = "A"
let b = a // Copiando valor de A pra B
console.log(a, b)
// Eles são independentes, se o a mudar, o b não muda