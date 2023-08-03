// ! Preste atenção nos usos de atributos em alguns locais do objeto

function createPerson(firstName, lastName, age){ 
    return {
    firstName, 
    lastName,
    age,
    alive: true,
    speak(subject){
        return `${firstName} says: ${subject}`
    },
    die(){
        this.alive = false;
    },
    get isAlive(){
        if(this.alive === true) return `${firstName} is alive!`
        else return `${firstName} is dead...`
    }
    }
}

// ? Se o atributo esta no () da função criadora, não precisa do this.

const pedro = createPerson("Pedro", "Pacheco", 18)
console.log(pedro.speak("Corinthians"));
console.log(pedro.isAlive);
pedro.die()
console.log(pedro.isAlive);

// * Quer entender como o get funciona e faz o isAlive n precisar do ()?
// * Veja o outro arquivo nesta pasta!