function retornaFuncao(nome){
    return () => nome
}

const funcao = retornaFuncao("Pedro")
const funcao2 = retornaFuncao("João") 
console.log(funcao); // [Function]

console.log(funcao(), funcao2()); // Pedro João

// ? Funções Clousure acessam seu escopo lexico