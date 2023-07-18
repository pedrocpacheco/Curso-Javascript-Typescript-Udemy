const usuario = {
    pontuacao: 999,
    nivel: ''
}

// var = (condição) ? 'Valor para Verdadeiro' : 'Valor para falso'
usuario.nivel = usuario.pontuacao >= 1000 ? "VIP" : "Normal"

console.log(usuario.nivel);