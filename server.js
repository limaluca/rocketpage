const express = require('express');
const nunjucks = require('nunjucks');
const courseContents = require('./data');

const server = express();
server.set('view engine', '.njk');

server.use(express.static('public'));

nunjucks.configure("views", {
    express: server
});

server.listen(5000, function() {
    console.log("My server is running. . .")
})



server.get("/", function(req, res) {
    return res.render('about')
})

server.get("/courses", function(req, res) {
    return res.render('courses', { items: courseContents })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});