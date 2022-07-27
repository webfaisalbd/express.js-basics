const express = require('express');
const app = express();
const PORT = 3000;

// query parameter
// app.get('/', (req, res) => {
//     // const id = req.query.id;
//     // const name = req.query.name;
//     const { id, name } = req.query;
//     res.send(`<h1>Student id is : ${id} and name is : ${name}</h1>`);
// })

// route parameter
// app.get('/userId/:id/userAge/:age',(req,res)=>{
//    const id = req.params.id;
//    const age = req.params.age;

//    res.send(`<h1>Student id is : ${id} and age is : ${age}</h1>`)

// })

// headers
// app.get('/',(req,res)=>{
//    const id = req.header('id');
//    const name = req.header('name');

//    res.send(`<h1>Student id is : ${id} and name is : ${name}</h1>`)

// })


// post 

const bodyParser = require('body-parser');
// form er maddhome data send
app.use(bodyParser.urlencoded({ extended: false }))
// json er maddhome data send
app.use(bodyParser.json())

app.post('/user',(req,res)=> {
    const name = req.body.name;
    const age = req.body.age;
    res.send(`Welcome ${name}. And You are ${age} years old.`);
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
