const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
server.set('view engine', 'html');

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
    return res.render('courses')
})