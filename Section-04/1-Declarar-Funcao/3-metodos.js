const pessoa = {
    name: "Pedro",
    falar(){
        console.log(`Olá, meu nome é ${this.name}`);
    },
    xingar: () => {
        console.log(`${this.name} esta a xingar`);
    }
}

pessoa.falar()
pessoa.xingar()

// this. é diferente em ()=> (e pior)