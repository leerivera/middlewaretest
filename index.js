const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("The Crib")
})

app.get('/dogs', (req, res) => {
    res.send('grrr bark bark!')
}) 

app.listen(3000, () =>{
    console.log("we fast boi!!")
})