let diaSemana = new Date().getDay() - 3
let diaSemanaTexto

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo'
        break // se for 0 mas nao tiver esse break, diaSemanaTexto vai virar 'Segunda'
    case 1:
        diaSemanaTexto = 'Segunda'
        break // pois ele chega no primeiro break e para a execução
    case 2:
        diaSemanaTexto = 'Terça'
        break
    case 3:
        diaSemanaTexto = 'Quarta'
        break
    case 4:
        diaSemanaTexto = 'Quinta'
        break
    case 5:
        diaSemanaTexto = 'Sexta'
        break
    case 6: 
        diaSemanaTexto = 'Sabado'
        break
    default:
        diaSemanaTexto = 'Dia invalido'
        break
}

console.log(diaSemana, diaSemanaTexto);


// 2- Em uma função (break pode virar return)
function getWeekDayName(weekDay){
    let weekDayText
    switch(weekDay){
        case 0:
            weekDayText = 'Domingo'
            return weekDayText
        case 1:
            weekDayText = 'Segunda' 
            return weekDayText
        case 2:
            weekDayText = 'Terça'
            return weekDayText
        case 3:
            weekDayText = 'Quarta'
            return weekDayText
        case 4:
            weekDayText = 'Quinta'
            return weekDayText
        case 5:
            weekDayText = 'Sexta'
            return weekDayText
        case 6: 
            weekDayText = 'Sabado'
            return weekDayText
        default:
            weekDayText = 'Dia invalido'
            return weekDayText
    }
    return weekDayText // -> errado so deixar esse
}

console.log(getWeekDayName(2));