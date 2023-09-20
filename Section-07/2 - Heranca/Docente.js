import User from "./User.js";

class Docente extends User{
  constructor(nome, email, nascimento, role="docente"){
    super(nome, email, nascimento)
  }
}

docente = new Docente("Pedro", "@", "ao")