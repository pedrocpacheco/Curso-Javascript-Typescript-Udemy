// Escreva uma função que recebe 2 numeros e retorne o maior deles

// Com função normal
function maiorNumero(num1, num2){
    return num1 > num2 ? num1 : num2;
}

// Com Arrow Function
const maiorNum = (num1, num2) => num1 > num2 ? num1 : num2

console.log(maiorNumero(1,2));
console.log(maiorNum(3,4));