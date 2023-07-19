// Lembra das conexões em JDBC e tal? 
// Pensa nelas pra entender o Finally

try{
    abrirConexaoBanco()
}catch(e){
    console.log("Não foi possivel estabelecer conexão");
}finally{
    fecharConexaoBanco()
}

// Funções que nao importam
function abrirConexaoBanco(){ 
    let dado = (Math.floor(Math.random() * 10));
    
    if(dado > 5){ console.log("Conexão aberta"); }
    else{ throw new Error(); }
}
function fecharConexaoBanco(){ console.log("Conexão Fechada"); }
