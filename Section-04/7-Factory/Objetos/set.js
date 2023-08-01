// ! Apredemos anteriomente o get, agora o set

function createPerson(firstName, lastName){
    return{
        firstName,
        lastName,
        get fullName(){
            return `${this.firstName} ${this.lastName}`
        },
        set fullName(value){
            value = value.split(" ")
            this.firstName = value.shift();
            this.lastName = value.join(" ")
        }
    }
}

/* 
  ? Se você for mudar o valor de um atributo, lembre-se de usar o this. em  
  ? Tudo dentro do objeto. Pois sem o this, ele pega o do parametro da função
  ? Que não muda, diferente do valor do atributo.
*/ 

const p1 = createPerson("Thiago", "Fritz")
p1.fullName = "Pedro Pacheco";
console.log(p1.fullName); // * Sem o this. ainda apareceria Thiago Fritz 

// * O get é chamado automaticamente quando queremos acessar o valor do "atributo"
// * E o set é usado automaticamente quando queremos modificar o valor do "atributo"

