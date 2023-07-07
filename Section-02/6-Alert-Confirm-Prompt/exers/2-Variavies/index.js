// Neste exercicio, precisamos transformar o valor dar variaveis
// Sem ser com o valor bruto, e sim com as das outras proprias variaveis

// Variaveis no Começo
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Primeira Opção
const varATemp = varA
varA = varB
varB = varC
varC = varATemp

console.log(varA, varB, varC);

// Segunda Opção
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

