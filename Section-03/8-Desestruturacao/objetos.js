// Criando objeto pessoa
const pessoa = {
    nome: "Pedro",
    sobrenome: "Pacheco",
    endereco: {
        rua: "Av Brasil",
        numero: 320
    }
}

// 1- Atribuição Normal
const name = pessoa.nome
console.log(name);

// 2- Atribuição por Desestruturação
const { nome, sobrenome } = pessoa // automatico por serem o mesmo nome
console.log(nome);
console.log(sobrenome);

// 2.1 - No caso do nome da variavel nao ser o mesmo do atributo
const { nome: nomePessoa, sobrenome: sobrenomePessoa } = pessoa // diferente, entao diz qual é
console.log(nomePessoa);
console.log(sobrenomePessoa);

// 2.2 - Valor Padrão
const { sexualidade: sex = 'Padrão' } = pessoa
console.log(sex);
// como não tem, salvou como 'Padrão'

// Definindo valor depois
pessoa.sexualidade = 'Hetero' 
const { sexualidade: sex2 = 'Padrão' } = pessoa
console.log(sex2);
// como existe, agora é Hetero

// 2.3 - Exemplo de quando tem dentro de obj
const { endereco: { rua: street='Rua do Canavial', numero: number=0, bairro: neighboorhood='Senac'} } = pessoa
console.log(`Endereço de ${pessoa.nome} é: ${street} ${number} do bairro ${neighboorhood}`);
// tanto o rua quanto numero estavam criadas, então o valor padrão sumiu, menos o bairro, pois nao existe em pessoa

// 2.4 - Resto
const {nomeP, ...resto} = pessoa
console.log(nomeP);
console.log(resto);