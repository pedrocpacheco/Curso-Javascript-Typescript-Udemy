// ! Função toca escopo Global

function teste(){
    console.log("teste");
}

teste();

// ? Usando Imediata

(function(idade) {
    function createName(nome){
        const sobrenome = "Pacheco";
        return nome + " " + sobrenome;
    }
    function sayName(){
        console.log(createName("Pedro") + " " + idade);
    }
    sayName();
})(18)