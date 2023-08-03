const express = require("express")

const app = express();
const PORT = process.env.PORT || 3000

app.use(expres.json());

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`API server listening to port ${PORT}`);
});