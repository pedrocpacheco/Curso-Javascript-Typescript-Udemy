// Neste arquivo, veremos os metodos e utilidades de uma string

// Escapando caracteres e usando especiais

// 1- Aspas Duplas
let aspas = "Um \"texto\""
console.log(aspas); // Um "texto"

// 2- Barra
let barra = "Uma \\barra inversa"
console.log(barra); // Uma \barra inversa

// Pegando um char especifico da string

// 1- Usando o index da string
let idolo = "Rick Grimes"
console.log(idolo[4]); // k

// 2- Usando a função charAt()
let father = "Daryl Dixon"
console.log(father.charAt(6)); // ' ' 

// Concatenando String
let historia = "Um dia"
console.log(historia.concat(' era muito lindo', ' e bem maneiro')) // Metodo concat()
console.log(historia + ' era muito lindo' + ' e bem maneiro') // Operador +
console.log(`${historia} + era muito lindo e bem maneiro`) // Template String

// indexOf() e lastIndexOf()

// 1- Pegando o index de algo
console.log(historia.indexOf("dia")); // 3
console.log(historia.indexOf("Dia")); // -1 -> não encontrou nada -> case sensitive

// 2- Pegando o index de algo apartir de tantas casas
console.log(father.indexOf('D')); // 0 
console.log(father.indexOf('D', 3)); // 6 -> Vai pegar o index da primeira letra O depois do index 3

// 3- Mesma coisa do anterior, mas começando de tras pra frente
console.log(idolo.lastIndexOf('i')); // 7
console.log(idolo.lastIndexOf('i', 4)); // 1 -> vai pegar o index do primeiro i, apartir da 4 letra, indo de tras pra frente

// Replace
let poema = 'o rato roeu o roupa do rei de roma'
console.log(poema.replace('r', 'g')); // o gato goeu o goupa do gei de goma

// Length 
let tamanhoPoema = poema.length
console.log(tamanhoPoema); // 34
// Ele armazena o valor do tamanho, e nao o valor do ultimo index (10, e não 0->9)

// Também tem outros metodos, slice, substring, mas eu to com muita preguiça de ficar anotando metodozinho que eu ja manjo
// então vou dar sequencia, seguimos! se você leu isso você precisa rever sua vida (menos se você for um recruiter!)