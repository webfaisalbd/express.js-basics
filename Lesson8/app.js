const express = require('express');
const app = express();
const userRouter = require('./routes/user.route')

app.use('/api/user',userRouter);

app.get('/',(req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+ '/views/index.html')
})

app.get("/register",(req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+ '/views/register.html')
})
app.get("/login",(req,res)=>{
    res.statusCode = 200;
    res.send("I am login, be alert")
    // res.cookie("name","tasnim");
    res.cookie("age","30");
    res.clearCookie("name");
    res.append("id","16141");
    res.end();
})


app.use((req,res)=> {
    res.send("<h2>404!!! Not a valid URL</h2>");
})


module.exports = app;