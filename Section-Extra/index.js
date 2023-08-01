const express = require("express");

const app = express();

app.get("/movies", (request, response) => {
    response.send("Tudo Certo!")
})

app.listen(3000, () => console.log("Rodando"));