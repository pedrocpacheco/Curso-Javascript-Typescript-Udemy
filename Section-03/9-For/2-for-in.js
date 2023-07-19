// Arrays
const lista = ['Pedro', 'Thiago', 'Fritz']

for(let indice in lista){
    console.log(`Index: ${indice} | Valor: ${lista[indice]}`);
}

// Objetos
const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Pacheco', 
    idade: 17
}

for (const key in pessoa) {
    console.log(`Chave: ${key} | Valor: ${pessoa[key]}`);
}