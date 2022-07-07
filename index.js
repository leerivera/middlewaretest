const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny')
// app.use allows me to run code on every single request
app.use(() =>{
    console.log('here')
})

app.get('/', (req, res) => {
    res.send("The Crib")
})

app.get('/dogs', (req, res) => {
    res.send('grrr bark bark!')
}) 

app.listen(3000, () =>{
    console.log("we fast boi!!")
})