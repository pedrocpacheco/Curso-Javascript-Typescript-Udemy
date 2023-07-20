// ! Ao invez de sempre criar algo, uma função pode fazer isso

function criaPessoa(nome, sobrenome) {
    const pessoa = {
        nome,
        sobrenome
    }
    return pessoa
}

const Pedro = criaPessoa("Pedro", "Pacheco")

// ? Forma mais facil de criar coisas da mesma estrutura