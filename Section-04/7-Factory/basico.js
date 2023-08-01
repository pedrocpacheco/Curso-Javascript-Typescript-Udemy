// ! Se eu for criar a Julia, vou ter que  repetir toda a estrutura

const pedro = {
    firstName: "Pedro",
    middleName: "Carvalho",
    lastName: "Pacheco",
    age: 18
}
console.log(pedro);

// ? Então, utilizamos uma função que tem o molde, uma fabrica.

function createPerson (firstName, middleName, lastName, age) {
    return{
        firstName, 
        middleName, 
        lastName,
        age,     
    }
}

const julia = createPerson("Julia", "Carvalho", "Pacheco", 14)
console.log(julia);

// * Assim, fica mais facil de criar objetos parecidos
