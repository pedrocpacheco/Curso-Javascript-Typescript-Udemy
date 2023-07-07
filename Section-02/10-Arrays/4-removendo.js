// Removendo valores de um array

const students = ['Pedro', 'Luane', 'Daniel']

// 1- Metodo pop()
const lastStudent = students.pop() // remove o ultimo valor, e o retorna
console.log(`Students: ${students} |  Student Removed: ${lastStudent}`);

// 2- Metodo shift()
const firstStudent = students.shift() // remove o primeiro valor, e o retorna
console.log(`Students: ${students} |  Student Removed: ${firstStudent}`);

// 3- Usando o delete
delete students[0] // remove apenas o valor do index, e não ele, deixando um empty item 
console.log(students); // [ <1 empty item> ]
