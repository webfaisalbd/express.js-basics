const express = require('express');
const app = express();
const PORT = 3000;

// views folder হচ্চে static, যার ভিতরে সকল static data থাকবে। for example: image, style css
app.use(express.static("views"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(PORT,()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
})