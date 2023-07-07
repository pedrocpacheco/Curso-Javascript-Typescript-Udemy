// 1- Criando Const
const nome = "Pedro" // Sempre se inicia a constante
console.log(nome)
// const nome = "Pacheco" // Não se modifica o valor da constante

// 2- Reutilizando o valor de uma const
const num1 = 10
const num2 = num1

const result = num1 * num2
const doubleResult = result * 2

console.log(doubleResult)
// Os valores aqui nunca se modificam
// Podendo assim ser reutilizados

// 3- Descobrindo tipo de algo
console.log(typeof(num1)) 
console.log(typeof num2)
// Pode ser escrito das duas maneiras

// 4- Messing around with data types
const type1 = 10 // Number
const type2 = '5' // String
const count = type1 + type2 // 105
console.log(count)
// Aconteceu uma concatenação, e não uma soma
// Pois um deles é uma String, e outro um number
console.log(typeof count) // String
console.log(typeof(type1 + type2))