// ! 1 - Sabemos e Controlamos a ordem de execução a seguir

function f1(){ console.log("f1"); }

function f2(){ console.log("f2"); }

function f3(){ console.log("f3"); }

f1()
f2()
f3()

console.log("Depois das funções"); // * Isso vem depois das func

// ? Nem sempre saberemos e controlaremos a ordem de execução



// ! 2- Precisarmos fazer coisas que não controlamos o tempo que demora
 
function rand(min=1000, max=3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}

function funcao1(){ setTimeout(() => { console.log("f1"); }, rand()) }

function funcao2(){ setTimeout(() => { console.log("f2"); }, rand()) }

function funcao3(){ setTimeout(() => { console.log("f3"); }, rand()) }

// * Funcao1 não sera sempre a primeira
funcao1() 
funcao2()
funcao3()
console.log("Antes das funções"); // * Isso vem direto, as func depois.

// ? Um jeito de escapar disso é utilizando os callbacks



// ! Utilizando o Callback, mas criando um Callback Hell

function primeira(callback){ 
    setTimeout(() => { 
        console.log("primeira"); 
        if(callback) callback(); // * Algo foi passado por param? Execute isso!
    }, rand())
}

function segunda(callback){
    setTimeout(() => { 
        console.log("segunda"); 
        if (callback) callback(); 
    }, rand())
}

function terceira(callback){
    setTimeout(() => { 
        console.log("terceira");
        if(callback) callback();
    }, rand())
}

primeira(() => segunda(() => terceira(() => console.log("Fim do Ciclo"))))

// ? Se tivessem mais Callbacks, isso ficaria enorme, uma arvore de natal



// ! Vamos melhorar as identações