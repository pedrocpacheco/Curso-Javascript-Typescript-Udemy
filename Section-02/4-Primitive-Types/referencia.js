// Demonstração da diferença entre um tipo primitivo de dado, e por referencia

// 5- Valores por referencia
const lista = [1,2,3]
const lista2 = lista
lista2.push(4) // Muda na lista -> ambos apontam no mesmo ponto na memoria

console.log(lista2, lista)

// Não acontece isso com os tipos primitivos, pois so copia o valor
let original = 10
let copy = original
copy += 5 // Não muda, pois não aponta nada na memoria, so apontam seu valor

console.log(original, copy)
