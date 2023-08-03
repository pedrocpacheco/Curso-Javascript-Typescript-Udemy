// ? Adicionando Dependencia
const express = require("express");

// ? Inicializando app
const app = express()
const PORT = process.env.PORT || 3000;

// * Dizendo que usamos JSON
app.use(express.json()) 

// * Criando Banco em Memoria
const dataSource = [
    {id: 1, name: "Jane Done"},
    {id: 2, name: "Pedro Pacheco"}
]

app.get("api/users", (req, res) => {
    res.json(dataSource);
})

app.post("api/users", (req, res) => {
    const newUser = {
        id: dataSource.length + 1,
        name: req.body.name
    };
    dataSource.push(newUser);
    res.status(201).json(newUser)

})