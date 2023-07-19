// Estrutura de For classico
for(let i = 0; i < 10; i++){
    console.log(i);
}

// Mudando inicio e intervalo
for(let i = 10; i < 100; i+= 10){
    console.log(i);
}

// Indo ao contrario
for(let i = 100; i > 10; i-= 10){
    console.log(i);
}

// Pares
for (let i = 0; i <= 10; i += 1) {
    i % 2 === 0 ? console.log(i) : null;
}

// Percorrendo array
const lista = ['Pedro', 'Thiago', 'Rick', 'Daryl']
for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}