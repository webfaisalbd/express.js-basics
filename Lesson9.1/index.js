const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/register',(req,res)=>{
    // console.log(__dirname);
    res.sendFile(__dirname+'/views/register.html');
})

app.post('/register',(req,res)=>{
    // res.send("hello R.")
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`Full Name is ${fullName} and age is ${age}`)

})

app.listen(PORT, ()=> {
    console.log(`Server running at http://localhost:${PORT}`);
})