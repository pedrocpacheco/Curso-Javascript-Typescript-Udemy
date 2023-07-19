sayYes() // -> exemplo de Hoisting

function sayYes(){
    console.log("yes");
}

sayNo() // -> Hoisting não funciona com Arrow Functions

const sayNo = () => console.log("no");

// Hoisting é chamar uma função antes dela ser criada
// Funciona com function e não com arrow function