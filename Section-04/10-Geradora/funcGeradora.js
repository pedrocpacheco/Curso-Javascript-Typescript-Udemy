// ? Função que retorna um valor diferente toda vez que for chamada
function* geradora(){
  yield 1;
  yield 2;
  yield 3;
}

const g1 = geradora()

// * Printando o Gerador
console.log(g1); // Genatator

// Printando os valores
console.log(g1.next().value); // 1
console.log(g1.next().value); // 2
console.log(g1.next().value); // 3

// Printando se ainda tem iteraveis
console.log(g1.next()); // false

const g2 = geradora()

for (valor of g2) {
  console.log(valor);
}
