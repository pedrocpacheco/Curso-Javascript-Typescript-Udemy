function conta(operador, inicio, ...numeros){ // ... sempre é o ultimo
    for(let numero of numeros){
        if(operador === "+") inicio += numero
        if(operador === "-") inicio -= numero 
    }
    console.log(inicio);
}

conta("+", 0, 20, 30, 40, 50, 60)