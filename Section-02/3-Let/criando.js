// Salvando Nome
let nome = 'Pedro' // Salva uma String em memoria
console.log(nome) // Printa a String salvada -> Pedro

// Salvando Numero
nome = 10         // Não há tipagem
console.log(nome) // Printa o Numero salvo -> 10

// Não inicalizando
let naoDeclarada // Apenas declarou
console.log(naoDeclarada) // Não da erro -> undefined

naoDeclarada = "Declarada"
console.log(naoDeclarada) // Printa Declarada

// Alterando o valor de uma let
let valor = 10 // Valor = 10
valor += 5 // Valor = 15
// Aqui, perdeu-se o valor inicial de valor

