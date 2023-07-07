// Nesse arquivos, vemos as funcionalidades do metodo slice de um array

const students = ['Pedro', 'Luane', 'Daniel', 'Heloise', 'Kaua']

// 1- Positivo (da esquerda para a direita)
const slice = students.slice(0, 3) // [Pedro, Luane, Daniel]
console.log(slice);
// o ultimo elemento não é incluido, se você quer até o Daniel, coloque o index da Heloise

// 2- Negativo (da direita para a esquerda)
const ecils = students.slice(2, -1) // [Daniel, Heloise]
console.log(ecils);
// ele pega e da como se fosse a volta, andando no sentido contrario
