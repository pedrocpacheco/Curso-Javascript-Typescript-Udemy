// ! Cria o objeto e o retorna automaticamente
function Pessoa(nome, sobrenome) {
    const privado = "So acesso dentro" // * Privado

    this.nome = nome;           // * Publico
    this.sobrenome = sobrenome; // * Publico

    this.metodo = () =>{
        console.log("Metodo");
    }
}

const p1 = new Pessoa("Pedro", "Pacheco");
// ? Precisa conter a palavra new

console.log(`Nome: ${p1.nome}, Sobrenome: ${p2.sobrenome}`);
p1.metodo();