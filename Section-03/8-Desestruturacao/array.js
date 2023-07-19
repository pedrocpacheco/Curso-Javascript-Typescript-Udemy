// Criando Array e acessando valor de indice
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros[0]);

// Esse jeito de separar é bem ruim
const primeiroNum = numeros[0]
const segundoNum = numeros[1]
const tereiroNum = numeros[2]
const quartoNum = numeros[3]
const quintoNum = numeros[4]

/* Atribuição via desestruturação:
    Criando varias variaveis do mesmo tipo de uma vez so
    Significa desmontar um array pra salvar uma variavel
*/

// 1- Pegando na Ordem
const [pNum, sNum] = numeros // pNum = numeros[0] | sNum = numeros[1]
console.log(pNum, sNum);

// 2- Pegando o resto (... rest) | tbm pode ser ...spread
const [um, dois, ...resto] = numeros
console.log(`Numeros Selecionados: ${um} & ${dois}`);
console.log(`Resto: ${resto}`);
console.log(resto);

// 3- Pulando
const [uno, ,tres, , cinco, , siete, , nueve, ...rest] = numeros // pulou os pares
console.log(rest); // os pulados não são salvos no resto, eles são jogados ao ar so
console.log(uno, tres, cinco, siete, nueve); 

// 4- Array de 2 dimensões
const tabela = [ [1,2,3], [4,5,6], [7,8,9] ]
//                0 1 2    0 1 2    0 1 2
//                  0        1        2
const [,[,,seis]] = tabela
console.log(seis); // 6
// Isso aqui mostra o quão ruim pode ser usar isso pra algo especifico

// 5- Maneira mais facil de salvar 
const six = tabela[1][2] // Segunda tabela -> Item 3
console.log(six);
const [lista1, lista2, lista3] = tabela
console.log(lista3[2]); // 9

// 6- Como pode ser util?
/*
A Atribuição por Desestruturação se mostra ruim quando queremos salvar 
algo especifico, pois temos que percorrer todo um caminho pulando o que
não queremos, ao inves de pega-lo direto

Mas, quando queremos pegar varias coisas de uma vez so, ela é boa
*/

const idades = [17, 18, 19, 20]
const [idadePedro, idadeKaua, idadeJoao, idadeJapa] = idades

console.log(`Pedro tem ${idadePedro}`);
console.log(`Kaua tem ${idadeKaua}`);
console.log(`Joao tem ${idadeJoao}`);
console.log(`Japa tem ${idadeJapa}`);

// 7 - Valor padrão
const [a=5, b=7] = [1]
console.log(a); // teve indice 0, então mudou para 1
console.log(b); // n teve indice 1, então manteve o padrão 7