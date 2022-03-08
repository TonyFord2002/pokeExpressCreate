require('dotenv').config()
const express = require('express')
const Pokemon = require('./models/pokemon')
const app = express()
const mongoose = require('mongoose')
const port=3000
app.use(express.urlencoded({extended:false}))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/pokemon', (req, res)=>{
    Pokemon.find({}, (error, allPokemon)=>{
        res.render('Index', {pokemon: allPokemon})
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('New')
})
app.get('/pokemon/:id', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {pokemon:foundPokemon})
    })
})

app.post('/pokemon', (req,res)=>{
    Pokemon.create(req.body, (error, createdFruit)=>{
       res.redirect('/pokemon')//send user back to index page
})
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

app.listen(port, ()=>{
    console.log('Listening on port: ', port)
})