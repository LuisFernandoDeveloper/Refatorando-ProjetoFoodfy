const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', (req, res) => {
    res.render('index')
});

server.get('/about', (req, res) => {
    res.render('about')
})

server.get('/recipes', (req, res) => {
    res.render('recipes', { recipes })
})

server.get('/recipe', (req, res) => {
    const id = req.query.id
    
    const recipe = recipes.find(function(recipe){
        if(recipe.id == id){
            return true
        }
    })
    if(!recipe){
        return res.send("Receita não encontrada")
    }
    return res.render("recipe", {recipe})
})

server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("server is running!")
})