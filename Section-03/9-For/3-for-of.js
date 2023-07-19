// O for of pega um item de algo iteravel
// Usado quando so quer o valor

// De String é o Char
const nome = 'Pedro'

for (let char of nome){
    console.log(char);
}

// De Array é o Item
const lista = ['Pedro', 'Thiago', 'Fritz']

for (let item of lista) {
    console.log(item);
}

// De Objeto não da pra usar, pois não é iteravel
const pessoa = {nome: 'Pedro', sobrenome: 'Pacheco', idade: 17}
for (const item of pessoa) {
    console.log(item);
}
// Uncaught TypeError TypeError: pessoa is not iterable