/*
Primitivos (imutaveis) - string, number, boolean, undefined, null(bigint, symbol)
*/
//          01234
let nome = "Pedro" // -> Array de caracteres
nome = "Kauã"
console.log(nome); // Ué? Mas mudou o valor? -> Mudou o valor, e não o dado

array = ["Um", "Dois", "Três"]
array[0]  = ["Zero"] // Isso Pode acontecer

nome[0] = "P" // Continua sendo Kauã, e não Pauã, pois String é imutavel