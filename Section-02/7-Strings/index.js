// Escapando caracteres e usando especiais

// 1- Aspas Duplas
let aspas = "Um \"texto\""
console.log(aspas); // Um "texto"

// 2- Barra
let barra = "Uma \\barra inversa"
console.log(barra);

// Pegando um char especifico da string

// 1- Usando o index da string
let idolo = "Rick Grimes"
console.log(idolo[4]);

// 2- Usando a função charAt()
let father = "Daryl Dixon"
console.log(father.charAt(6));

// Concatenando String
let historia = "Um dia"
console.log(historia.concat(' era muito lindo', ' e bem maneiro')) // Metodo concat()
console.log(historia + ' era muito lindo' + ' e bem maneiro') // Operador +
console.log(`${historia} + era muito lindo e bem maneiro`) // Template String
