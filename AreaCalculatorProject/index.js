const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get('/circle', (req, res) => {
    res.sendFile(__dirname + "/views/circle.html")
})

app.get('/triangle', (req, res) => {
    res.sendFile(__dirname + "/views/triangle.html")
})



app.post('/circle', (req, res) => {
    const radius = req.body.radius;
    const area = 3.1416 * radius * radius;
    res.send(`<h2>Area of Circle ${area}</h2>`)
})

app.post('/triangle', (req, res) => {
    const base = req.body.base;
    const height = req.body.height;
    const area = 0.5 * height * base;
    res.send(`<h2>Area of Triangle ${area}</h2>`)
})




app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
})
