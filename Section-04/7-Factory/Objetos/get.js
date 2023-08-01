// ! Temos um atributo firstName e um lastName, mas nao temos o fullName

function createPerson(firstName, lastName, age){ 
    return {
    firstName,
    lastName,
    age,
    get fullName(){
        return `${firstName} ${lastName}`
    }
    }
}

// ? Criamos uma função que retorna algo, e colocamos o get para simular um atributo

const pedro = createPerson("Pedro", "Pacheco", 18)
pedro.firstName() // * Isso não existe (TypeError -> firstName is not function)
pedro.firstName   // * Isso Existe

pedro.fullName()  // * Isso é como acessamos uma função (TypeError -> fullName is not function)
pedro.fullName    // * Mas com o get, ela simula um atributo agora

// TODO Concluindo então, o GET faz uma função que retorna algo, simular um atributo.

// * Quer entender o porquê de usar o this. sempre é melhor?
// * Quer aprender também os metodos set? Então veja o proximo arquivo