/*
Em JavaScript tudo pode ser avaliado ou em verdadeiro ou em falso.
Valores FALSY:
    - false
    - 0
    - '' | "" | ``
    - null | undefined
    - NaN

Valores TRULLY:
    - Todo o resto
*/


// 1- && -> false && true -> retorna FALSE (mas o seu valor, citados acima)

// A Partir do momento que tem operador logico, sera tratado como Boolean
console.log('Pedro Pacheco' && NaN && "Kauã Daiub") // -> Determinou False -> Retorna NaN

console.log('Pedro Pacheco' && 10); // -> Determinou true -> retorna o ultimo (sla pq)

let undefined
console.log('Pedro Pacheco' && undefined); // -> Determinou false -> retorna undefined

let nulo = null
console.log('Pedro Pacheco' && nulo); // -> Determinou false -> retorna undefined

console.log('Pedro Pacheco' && false); // -> Determinou false -> retorna false

/*
Em caso de True -> Retorna o Ultimo 
Em caso de False -> Retorna o Ultimo 
*/

// 2- || -> true || false -> vai retornar o valor verdadeiro

// A Partir do momento que tem operador logico, sera tratado como Boolean
console.log(false || 0 || NaN || null || 'Pedro' || 'Pacheco'); // True -> Retornou Pedro

/*
Em caso de True -> Retorna o Primeiro (bateu nesse ja pode ir que ta liberado)
Em caso de False -> Retorna o Ultimo (perguntou todos vai no ultimo)
*/