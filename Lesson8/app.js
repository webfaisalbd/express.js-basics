const express = require('express');
const app = express();
const userRouter = require('./routes/user.route')

app.use('/api/user',userRouter);

app.get('/',(req,res)=>{
    res.send("<h2>This is home route.");
})

app.use((req,res)=> {
    res.send("<h2>404!!! Not a valid URL</h2>");
})


module.exports = app;