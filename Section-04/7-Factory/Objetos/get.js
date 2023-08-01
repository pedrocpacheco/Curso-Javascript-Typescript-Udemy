// ! Temos um atributo firstName e um lastName, mas nao temos o fullName

function createPerson(firstName, lastName, age){ 
    return {
    firstName,
    lastName,
    age,
    get fullName(){
        return firstName + " " + lastName;
    }
    }
}

// ? Criamos uma função que retorna algo, e colocamos o get para simular um atributo

const pedro = createPerson("Pedro", "Pacheco", 18)
pedro.firstName() // * Isso não existe 
pedro.firstName   // * Isso Existe

pedro.fullName()  // * Isso é como acessamos uma função
pedro.fullName    // * Mas com o get, ela simula um atributo agora

// TODO Concluindo então, o GET faz uma função que retorna algo, simular um atributo.