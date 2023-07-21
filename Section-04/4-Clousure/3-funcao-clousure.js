// ! Funções Clousure fão como funções molde para outras
// !    - Você pode retornam uma função, e ela se lembrara.

function multiplicarPor(multiplicador){
    return (valor) => { valor * multiplicador }
}

const porDois = multiplicarPor(2)
const porTres = multiplicarPor(3)
const porQuatro = multiplicarPor(4)

console.log(porDois(2));
console.log(porTres(3));
console.log(porQuatro(4));

// ? Dessa forma, temos um molde de uma função, e mudamos 
// ? Ela dinamicamente somente quando necessario