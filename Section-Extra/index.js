const express = require("express");

const app = express();

app.get("/test", (request, response) => {
    response.send("Tudo Certo!")
})

app.listen(3000, () => console.log("Rodando"));