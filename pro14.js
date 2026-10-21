console.log("Develop an Express.js application using routing and request-response objects.");

import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Express.js");
});

app.get("/student", (req, res) => {
    res.send("I am Chaithanya Sai");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
