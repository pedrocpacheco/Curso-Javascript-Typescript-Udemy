const inicio = 0
const fim = 10

const estagio1 = Math.floor(fim / 3)
const estagio2 = estagio1 * 2

const numero = 8

if(inicio > fim){
    console.log("O inicio não pode ser maior do que o fim");
}

if(numero < inicio || numero > fim){
    console.log(`O numero não esta entre ${inicio} e ${fim}`)
}

if(numero <= estagio1){
    console.log(`Entre ${inicio} e ${estagio1}`);
} else if(numero <= estagio2){
    console.log(`Entre ${estagio1} e ${estagio2}`);
} else{
    console.log(`Entre ${estagio2} e ${fim}`);
}