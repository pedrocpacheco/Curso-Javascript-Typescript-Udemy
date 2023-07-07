// Neste arquivo vamos entender o basico de como criar funções

// 1- Função sem parametro
function saudation(){
    console.log("Bom dia!");
}

// 2- Função com parametro
function helloFella(name){
    console.log(`Hello ${name}!`);
}

// Chamando funções
saudation()
helloFella('Pedro')
helloFella('Luane')

// 3- Função com retorno
function adition(num1, num2){
    const result = Number(num1 + num2)
    return result
}

// Salvando o valor retornado
const result = adition(10, 2)
console.log(result);

// 4- Função com valor padrão
function subtraction(num1 = 1, num2 = 1){
    const result = Number(num1 - num2)
    return result
}
// Se algum dos parametros não for passado na hora da execução
// Os valores padrões são utilizados

const resultSub = subtraction(10) // num1 = 10 num2 = padrão -> 1
console.log(resultSub);

// 5- Função Anonima (dentro de uma variavel)
const raiz = function (num){
    return num ** 0.5
}

console.log(raiz(9))

// 6- Arrow Function (mesma coisa da outra, mas sem function)

// Estrutura completa
const potenciaCompleta = (num) =>{
    return num ** 2
}

// Estrutura Simplificada
const potencia = num => num ** 2
/* Detalhes da Arrow Function
    1- Quando cabe tudo na mesma linha, não precisa das {} e também o return
    2- Quando só há um parametro, não precisa dos parenteses
*/