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
    res.render('recipes')
})

server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("server is running!")
})