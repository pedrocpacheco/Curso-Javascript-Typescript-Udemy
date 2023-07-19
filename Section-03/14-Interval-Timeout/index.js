const constancia = setInterval(() => console.log(criaHora()), 1000);

const intervalo = setTimeout(() => clearInterval(constancia),6000);

function criaHora() {
    let date = new Date();

    return date.toLocaleTimeString("pt-BR", {
        hour12: false
    });
}