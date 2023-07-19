// Podemos usar o resto para evitar de passar uma [] no parametro
function conta(operador, inicio, ...numeros){ // ... sempre é o ultimo
    for(let numero of numeros){
        if(operador === "+") inicio += numero
        if(operador === "-") inicio -= numero 
    }
    console.log(inicio);
}

conta("+", 0, 20, 30, 40, 50, 60)

// Podemos usar o ... para simular um arguments em uma ()=>
const soma = (...args) => {
    let total = 0;
    for(let arg of args){
        total += arg
    }
    console.log(total);
}

soma(1,2,3,4)