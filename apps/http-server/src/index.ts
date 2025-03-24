import express from "express";

const app = express();

app.get("/signup", (req, res) => {
    res.send("sign up page");
})

app.get("/signin", (req, res) => {
    res.send("sign in page");
})

app.get("/chat", (req, res) => {
    res.send("chat page");
})

app.listen(3001);