/* Bloco Try Catch basico   
   Definimos que as coisas que aconteceram quando um erro rolar, estão no catch{}
   Podemos salvar o erro em uma variavel para utiliza-lo como bem entedermos depois
*/
try{
    console.log(naoExisto);
}catch(e){
    console.log("Variavel não existe");
}

// Criando Nossos Proprios erros
const soma = (x, y) => {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('x e y precisam ser numeros')
    }
    return x + y 
}

// Trantando os nossos erros
try{
    console.log(soma('1',2));
}catch(error){
    console.log("Você precisa informar dois numeros");
}finally{
    console.log("Chegou ao fim");
}