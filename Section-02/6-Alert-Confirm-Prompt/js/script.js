// Neste arquivo, veremos metodos do objeto window
// Estas, so funcionam no navegador, e não no node, e tem seus atalhos

// Apenas Chamando as Funções:

// 1- Alert 
alert("Alertando!!!") // cria um popup no navegador
// não retorna nada
window.alert("Alertando!!") // mesma coisa

// 2- Confirm
confirm("Deseja realmente, apagar?") // cria um cancelar / ok no navegador
// retorna um booleano
window.confirm("Deseja realmente, apagar")

// 3- Prompt
prompt("Digite seu nome: ") // abre janela de input
// retorna o que foi digitado
window.prompt("Digite o seu nome: ")

// Salvando o valor que elas retornam:

// Retorno do Alerted: undefined
const alerted = alert("Retorna undefined")
console.log(typeof alerted ,alerted)

// Retorno do Confirm: boolean
const confirmed = confirm("Retorna boolean")
console.log(typeof confirmed, confirmed)

// Retorno do Prompt: String
const prompted = prompt("Retorna String")
console.log(typeof prompted, prompted)


