const nome = "Luis"

function usaNome(){
    console.log(nome); 
}

usaNome() // * Luis

function usaUsaNome(){
    usaNome() 
}

usaUsaNome() // * Luis