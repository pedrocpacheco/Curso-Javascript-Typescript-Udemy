/* 
    If pode ser usado sozinho
    Else ou Else if precisa de if
    Else if podem haver quantos quiser
    Else é o resto feito por ultimo 
*/

const hora = 19
if(hora < 0 || hora > 23) {console.log("Essa hora não existe");}
if(hora <= 12){
    console.log("Bom dia");
} else if(hora <= 18){
    console.log("Boa Tarde");
} else{
    console.log("Boa Noite");
}