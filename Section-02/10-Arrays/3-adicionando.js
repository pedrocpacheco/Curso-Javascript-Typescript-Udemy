// Diferentes formas de adicionar itens em um array

// 1- Adicionando com o valor do proximo index
const students = ['Pedro', 'Luane', 'Daniel'] // ultimo index -> 2
students[3] = 'Heloise'
// !- Esta forma de adicionar é ruim, pois precisamos sempre saber o tamanho do array

// 1.5 - Indexes vazios
students[6] = 'Kaua' 
console.log(students); 
// aqui, o index 4 e o 5 não tem valor, então sera printado <2 empty items> no lugar

// 1.5.5 -> Usando o length como forma de adicionar
students[students.length] = 'Guedes'
// assim é uma tatica, pois o length é sempre mais que o ultimo index, mas a função push faz exatamente isso

// 2- Adicionando com o metodo push
students.push('Carlos')
console.log(students); 
// assim, fica mais facil de salvar sem ter que saber sempre o tamanho do array

// 3- Adicionando no começo
students.unshift('Pacheco')
console.log(students);
// o index 0 do students agora é Pacheco

