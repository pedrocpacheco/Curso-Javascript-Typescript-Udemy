const verdadeira = true

// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função

// 1- Escopo de Bloco 

let nome = 'Pedro'
// let nome = 'Pacheco' -> Da erro, não pode (pois ja tem uma no bloco)

var nome2 = 'Thiago'
// var nome2 = 'Fritz' -> Funciona, o nome2 é redeclarado (globalmente)

console.log(nome, nome2);

if(verdadeira){
    let nome = 'Pacheco' // pode -> criando outra variavel neste novo bloco
    var nome2 = 'Dante' // Redeclarada
    console.log(nome, nome2);
    if(verdadeira){
        let  nome = 'Carvalho' // pode -> criando outra variavel nesse novo bloco
        var nome2 = 'Aliglieri' // Redeclarada
        console.log(nome, nome2);
    }
}

console.log(nome, nome2); // let = Pedro | var = Aliglieri
// Ou seja, quando redeclaramos um let, é só no escopo, o var é global

// 2- Escopo de Função

function sayName(){
    var l = 'L'
    console.log(l);
}
// console.log(l); -> Não pode fazer isso, L so existe na função
// variaveis dentro de uma função, só existem dentro dela

var sobrenome = 'Lawiet'
function sayLastName() {
    console.log(sobrenome);
}

console.log(sobrenome);
// variaveis fora de uma função, pode ser usadas dentro dela

// 3- Elevação
console.log(naoDefinida); // O que aparece? Sem proxima linha -> Erro | Com proxima linha -> undefined
var naoDefinida = 'Agora Definiu' // sem essa linha apareceria um erro
/* O que o Javascript faz, é ler seu Codigo inteiro, e colocar la em cima
   todas as variaveis criadas, inicializando elas, e esperando então seus valores 
   (isso só acontece com var, com let e const não) */
