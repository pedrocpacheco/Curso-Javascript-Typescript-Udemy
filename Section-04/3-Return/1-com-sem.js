// ! Aprendendo a diferença de funções com Retorno e Sem Retorno

// * Função com Retorno -> Armazena valor em Variavel
const soma = (a, b) => a + b

const resultado = soma(1,2) 

// * Função sem Retorno -> Armazena undefined em Variavel
const semRetorno = (msg) => console.log(`Mensagem: ${msg}`);

const semValor = semRetorno() 

console.log(resultado, semValor);
 
// ? Aprendemos que uma função pode ou não retornar algo
// ? Retornando ou não, ela pode fazer alguma coisa
