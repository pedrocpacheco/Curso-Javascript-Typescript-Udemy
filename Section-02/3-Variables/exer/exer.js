/*
Pedro Pacheco tem 30 anos, pesa 84 kg
tem 1.7 de altura e seu IMC é de 20
Pedro Pacheco nasceu em 1980
*/

const firstName = "Pedro"
const lastName = "Pacheco"
const age = 17
const weightKg = 70 
const heigthM = 1.75
let imc
let birthDate

imc = weightKg / (heigthM * 2)
birthDate = 2023 - age

console.log(`${firstName} ${lastName} tem ${age} anos, e pesa ${weightKg}`)
console.log(`tem ${heigthM} e seu IMC é de ${imc}`)
console.log(`${firstName} nasceu em ${birthDate}`)