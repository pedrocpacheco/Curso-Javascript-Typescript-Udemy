// Não sabe quantas vezes vai rolar até parar
let i = 0;

while(i <= 10){
    console.log(i);
    i++
}

let nome = 'Pedro'

while(i < nome.length){
    console.log(nome[i]);
}
// Essas formas são melhores de fazer com o For

// Boa forma de usar o While
function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const [min, max] = [1, 20]
let rand = random(min, max)

while(rand !== 10){
    rand = random(min, max)
    console.log(rand);
}