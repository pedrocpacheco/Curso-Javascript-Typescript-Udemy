const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Continue
for (let numero of numeros) {
    
    if(numero === 2){
        console.log('Olha um 2, vamos seguir!'); 
        continue;
    }

    if(numero === 8){
        console.log('Um 8? Vamo parar por aqui'); 
        break;
    }

    console.log(numero);
}