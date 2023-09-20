import User from "./User.js";

class Admin extends User{
  constructor(nome, email, nascimento, role="admin"){
    super(nome, email, nascimento)
  }

  criaCurso()
}

const novoAdmin = new Admin("Pedro", "2", "280705")
console.log(novoAdmin);