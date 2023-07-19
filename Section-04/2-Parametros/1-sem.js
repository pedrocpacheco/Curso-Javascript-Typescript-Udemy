// 1- Função sem Parametros tendo parametros enviados

function funcao(){
    console.log("Oie");
    console.log(arguments); // Não! Estão aqui!
}

funcao("Mandando sem existir") // Não da erro, mas ué? Sumiu?

// 2- Utilizando o arguments

function somarArgs(){
    let total = 0
    for (let argumento of arguments){
        if(typeof argumento != 'number') { continue } 

        total += argumento
    }
    console.log(total);
}

somarArgs(1,2,3,4,5,6,7)

// Nada disso funciona pra ()=>

