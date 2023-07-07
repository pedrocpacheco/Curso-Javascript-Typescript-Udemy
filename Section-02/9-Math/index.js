// Neste arquivo, veremos a funcionalidade do objeto Math, ligado a matemática

// 1- Arredondando
let num1 = 9.673738 

// Arredondando para Baixo
let num2 = Math.floor(num1)
console.log(num2) // 9
// Arredondou mesmo num1 estando mais perto de 10 do que de 9

// Arreondando para mais perto
let num3 = Math.round(num1)
console.log(num3); // 10

// 2- Encontrando o maior numero de uma sequencia
console.log(Math.max(0,1,2,3,4,5,6,7,8,9)) // 9

// 3- Encontrando o menor numero de uma sequencia
console.log(Math.min(0,1,2,3,4,5,6,7,8,9)) // 0

// 4- Gerando numero aleatorio
console.log(Math.random()) // de 0 -> 1 quebrado
console.log(Math.round(Math.random() * (10 - 5) + 5)) // de 5 -> 10 arredondado

// 5- Dividindo por 0
console.log(100 / 0) // Infinity
// Não da erro, e um valor Infinity vale true