const lista = ['Pedro', 'Thiago', 'Fritz']

// Classico
for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

// For in 
for(let indice in lista){
    console.log(`Index: ${indice} | Valor: ${lista[indice]}`);
}

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Pacheco', 
    idade: 17
}

for (const key in pessoa) {
    console.log(`Chave: ${key} | Valor: ${pessoa[key]}`);
}