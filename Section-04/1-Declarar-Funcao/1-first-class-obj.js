// First-class objects (Objetos de Primeira classe)
const nome = "Luiz"

const funcao = function (){
    console.log("Sou um dado");
    return "Retorno"
}
// Funções podem ser tratadas como dado (Function Expression)

funcao() // -> Chamando o dado que tem a função

// Com isso, podemos passar uma função como parametro de outra função
function executaFuncao(funcao){
    console.log("Executando Função:");
    funcao()
}

executaFuncao(funcao)

// A diferença, é que passamos a função como parametro, e não seu retorno
function soComRetorno(funcaoEmSi){
    console.log(`Retorno da Função: ${funcaoEmSi}`);
//  funcaoEmSi() -> isso so vai funcionar se passarmos a funcao sem o () no (par)
}

soComRetorno(funcao()) // Passa o retorno como parametro
soComRetorno(funcao)   // Passa a função como parametro
