function recursiva(atual, fim){
    console.log(atual);
    if(atual >= fim) return
    atual++
    recursiva(atual, fim)
}

recursiva(0, 10)