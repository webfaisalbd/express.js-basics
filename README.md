## Express.js Basics

steps:
- express package ekta external package, so eita install korte hobe.
- external package install korar jonno, first e  `npm init` dite hobe. tahole package.json file create hobe.

- then, `npm install express nodemon` install kora lagbe.
- nodemon er jonno, package.json file e scripts e ,  `"start": "nodemon index.js"` dite hobe. 


### some http method
- post  , for creating 
- get  , for getting
- put  , for updating 
- delete  , for deleting 

## http methods and postman
- install postman
- if server is off, postman not work.


# http response

- body can contain data as html, text, json etc.
- cookies
- headers
- statusCode

---

`json file send with http response`
```javascript
app.get('/register', (req,res)=> {
    res.status(200).json({
        message: "I am register page",
        statusCode: 200,
    })
});
```
---


`html file send with http response`
```javascript
app.get('/register', (req,res)=> {
    res.statusCode = 200;
    res.sendFile(__dirname +'/views/register.html');
});
```

---



`redirect with http response`
```javascript
app.get('/register', (req,res)=> {
    res.redirect('/login');
});
```

---



` cookie send with http response`
```javascript
app.get('/login', (req,res)=> {
    res.cookie('name','Faisal');
    res.cookie('age','25');
    res.end();
});
```

---



`clearCookie send with http response`
```javascript
app.get('/login', (req,res)=> {
    res.clearCookie('name');
    res.end();
});
```

---



`value send with header in http response`
```javascript
app.get('/login', (req,res)=> {
   res.append("name","Ahmed");
   res.end();
});
```

---


# http request


### http request with `query parameter`
- search: `http://localhost:3000/?id=101&name=faisal`
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    // const id = req.query.id;
    // const name = req.query.name;
    const { id, name } = req.query;
    res.send(`<h1>Student id is : ${id} and name is : ${name}</h1>`);
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
```

### http request with `route parameter`
- search: `http://localhost:3000/userId/101/userAge/25`
```javascript
// route parameter
app.get('/userId/:id/userAge/:age',(req,res)=>{
   const id = req.params.id;
   const age = req.params.age;

   res.send(`<h1>Student id is : ${id} and age is : ${age}</h1>`)

})


```

### http request with `headers`

```javascript
// headers
app.get('/',(req,res)=>{
   const id = req.header('id');
   const name = req.header('name');

   res.send(`<h1>Student id is : ${id} and name is : ${name}</h1>`)

})
```

--- 

## Data send and receive using form

- `index.js` file
```javascript
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
```


- `register.html` file
```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Register</title>
</head>

<body>
    <h1>Welcome to Registration Page</h1>
    <form action="/register" method="POST">
        <div>
            <label for="fullName">Full Name</label>
            <input type="text" name="fullName" id="fullName">
        </div>
        <div>
            <label for="age">Age</label>
            <input type="text" name="age" id="age">
        </div>
        <button type="submit">Register</button>
    </form>
</body>

</html>
```

---


## Environment file (.env file)
- .env file full form environment file
- secret/ hidden file, only you can access it

`Why .evn file`
- to store private environment variables for your application. Example:
- http PORT to listen the server
- database url
- api keys etc.

### How to use .env variables
- step 1: create an .env file in the root directory
- `Example`: 
- .env 
- step 2: define environment variable using uppercase letter and for multiple word use underscore. 
- `Example`: 
- PORT
- DATABASE_URL
- step 3: assign the values without double quotation and space
- `Example`:
- PORT=3000
- step 4: you can make a comment using ( # ) in environment file. 
- `Example`:
- # server port
- step 5: npm install dotenv
- step 6: require('dotenv').config();
- step 7: access the env variables from anywhere using process.env.PORT
- `Example`:
- process.env.PORT
- step 8: go to .gitignore and keep .env in .gitignore 


## Middleware

```javascript
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
```


---
--- 


## Static Middleware
- Image / style নিয়ে কাজ করার জন্য `static middleware` ব্যবহার করতে হবে।
- `app.use(express.static("views"));`
-  views হচ্ছে static folder এর নাম, যার ভিতরে সকল static data থাকবে। for example: image, style css

```javascript
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
```

--- 

