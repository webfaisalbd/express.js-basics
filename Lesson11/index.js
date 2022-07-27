require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const myMiddleWare = (req, res, next) => {
    console.log("Middleware function.");
    req.currentTime = new Date(Date.now());
    next();
}

// app.use(myMiddleWare);

app.get('/', myMiddleWare, (req, res) => {
    console.log('I am sleeping at ' + req.currentTime);
    res.send("<h1>I am at home</h1>");
})

app.get('/about', myMiddleWare, (req, res) => {
    console.log('I am about at ' + req.currentTime);
    res.send("<h1>I am About Route</h1>");
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})