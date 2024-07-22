const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://devabdalla:Qdsrlu3m1GR3Etuh@cluster0.3dlmk4a.mongodb.net/').then( () =>{
  console.log("database")
  app.get('/', (req, res) => {
  res.sendFile("./views/home.html",{root: __dirname})
})
}).catch((arr) => {console.log(err)});

app.listen(port, () => {
  console.log(`http://localhost:$(port)/`) 
})