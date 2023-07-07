// 1- Operador +

// Adição
const num1 = 5
const num2 = 10
console.log(num1 + num2) // 15

// Concatenação
const sNum = '28'
const nNum = 07
console.log(sNum + nNum) // 510
// Numa operação com string, mesmo com um number, a concatenação

const sNum1 = "20"
const sNum2 = "05"
console.log(sNum1 + sNum2)
// O mesmo ocorre com uma operação apenas com strings

// 2- Subtração - 
console.log(num2 - num1) // 5

// 3- Divisão /
console.log(num2 / num1) // 2

// 4- Multiplicação *
console.log(num2 * num1) // 50

// 5- Potenciação **
console.log(num2 ** num1) //10000

// 6- Resto da Divisão %
console.log(num2 % num1) // 10/5 = 0 então sobra 0
const value = 10
const divisor = 3
console.log(value % divisor) // 10/3 = 9 e sobra 1

// 7- Ordem de realização
console.log(num1 + num2 * value) // Primeiro * depois +
// Segue a Matematica
console.log((num1 + num2) * value) // Primeiro () depois Fora

// 8 - Incremento ++
let contador = 1

// Primeira forma de fazer
contador = contador + 1
console.log(contador) // 2

// Segunda forma de fazer
contador += 1
console.log(contador) // 3

// Terceira forma de fazer
constador++
console.log(contador) // 4

// Pegadinha do console.log
console.log(contador++) // 4 e não 5
 // Imprimi-se o valor e depois incrementa
console.log(contador) // 5

// Constantes não podem ser incrementadas