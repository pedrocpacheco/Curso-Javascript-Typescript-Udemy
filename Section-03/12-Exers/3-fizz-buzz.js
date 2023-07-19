const fizzBuzz = (numero) =>{
    if(typeof numero != "number") {console.log("Digite um numero");}

    if(numero % 3 === 0 && numero % 5 === 0){return "FizzBuzz"}

    if(numero % 3 === 0){return "Fizz"}
    else if(numero % 5 === 0){return "Buzz"}
    else{return numero}
}

console.log(fizzBuzz(15));