const express = require('express')
/* const nunjucks = require('nunjucks') */

const server = express()

server.set("view engine", "html")

server.get("/", function(req, res){
    return res.send("Hello world!")
})

server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("server is running!")
})