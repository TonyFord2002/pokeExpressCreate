require('dotenv').config()
const express = require('express')
const Pokemon = require('./models/pokemon')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/pokemon/seed', (req, res)=>{
    Pokemon.create([       
     {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
     {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
     {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
     {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
     {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
     {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
     {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
    ], (err, data)=>{
        res.redirect('/pokemon')
    })
})
//Redirect to Index page
app.get('/', (req,res)=>{
    res.redirect('/pokemon')
})
//Index page
app.get('/pokemon', (req, res)=>{
    Pokemon.find({}, (err, allPokemon)=>{
        res.render('Index', {pokemon: allPokemon})
    })
})
//New page
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})
//Show page
app.get('/pokemon/:id', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {pokemon:foundPokemon})
    })
})
//Create New Pokemon
app.post('/pokemon', (req,res)=>{
    Pokemon.create(req.body, (err, createdPokemon)=>{
       res.redirect('/pokemon')//send user back to index page
})
})
//Delete Pokemon
app.delete('/pokemon/:id', (req,res)=>{
    Pokemon.findByIdAndRemove(req.params.id, (err,data)=>{
        res.redirect('/pokemon')
    })
})
//Update a Pokemon
app.put('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/pokemon')
    })
})
//Edit Page
app.get('/pokemon/:id/edit', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        if(!err){
            res.render('Edit', {pokemon: foundPokemon})
        } else {
            res.send({ msg: err.message })
        }
    })
})

//Connect to mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
//listening on port 3000
app.listen(PORT, ()=>{
    console.log('Listening on port: ', PORT)
})