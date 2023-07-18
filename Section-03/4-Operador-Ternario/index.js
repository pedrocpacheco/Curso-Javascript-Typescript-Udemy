const usuario = {
    pontuacao: 999,
    nivel: ''
}

// var = (condição) ? 'Valor para Verdadeiro' : 'Valor para falso'
usuario.nivel = usuario.pontuacao >= 1000 ? "VIP" : "Normal"

console.log(usuario.nivel);

// Usando o || para definir algo padrão
const nomeUsuario = null // Mas poderia ter valor
usuario.nome = nomeUsuario || "Usuario" // usuario.nome = "Usuario"
// Dessa forma, o nome do usuario sera sempre "Usuario", ah nao ser que
// O usuario set o seu nome, ou seja, temos um valor padrão
