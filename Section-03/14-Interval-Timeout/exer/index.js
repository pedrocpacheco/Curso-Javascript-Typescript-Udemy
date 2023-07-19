function secondsToHours(seconds){
    const date = new Date(seconds * 1000) // pois é em milisec
    return date.toLocaleTimeString('pt-BR', { hour12: false, timeZone: "GMT",  })
}

let seconds = 0
const timer = setInterval(() => {
        seconds++;
        console.log(secondsToHours(seconds));
    }, 1000)


const tempoRelogio = 
    setTimeout(() => {
        clearInterval(timer)
    }, 3000)




