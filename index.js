const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny') is a logging tool
// app.use allows me to run code on every single request

app.use(morgan('common'))
//the next line literally moves on the next request
app.use((req, res, next) =>{
    console.log("I got next")
    return  next(); // makes sure nothing happens after next
})

app.get('/', (req, res) => {
    res.send("The Crib")
})

app.get('/dogs', (req, res) => {
    res.send('grrr bark bark!')
}) 

// keep the 404 at the end to catch errors in routing

app.use((req, res) => {
    res.status(404).send('What you looking for bruh')
})

app.listen(3000, () =>{
    console.log("we fast boi!!")
})