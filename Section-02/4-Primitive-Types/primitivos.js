// Neste arquivo aprendemos os diferentes tipos de dados primitivos existentes em JavaScript

// 1- Strings
const name1 = 'Pedro' // string
const name2 = "Pedro" // string
const name3 = `Pedro` // string

// 2- Numbers
const num1 = 10 // number
const num2 = 9.5 // number
// Não existe float ou double

// 3- undefined / null
let firstName // undefined => não aponta para local na memoria
let lastName = null // Nulo => não aponta para local na memoria
// usamos o null para descofigurar o valor da variavel
// Nulo -> Quero que ela não aponte para nada || undefined -> não há como setar, a linguagem vai, espera valor

// 4- Boolean
const approved = true // boolean
const reproved = false // boolean
// valor logico (como um interruptor)

// Console log para ver tipo e valor
console.log(typeof approved, approved)