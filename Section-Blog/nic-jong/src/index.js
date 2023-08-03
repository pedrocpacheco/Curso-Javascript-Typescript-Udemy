const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(expres.json());

app.get("/", (req, res) => {
    res.send("Hello World!")
});

const posts = [
    {id: 1, title: "Post 1"},
    {id: 2, title: "Post 2"},
    {id: 3, title: "Post 3"}
];

app.get("/posts", (req, res) => {
    res.json(posts);
})

app.post("/posts", (req, res) =>{
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }
    res.status(201).json(newPost);
})

app.listen(PORT, () => {
    console.log(`API server listening to port ${PORT}`);
});