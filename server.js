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
    const aboutData = {
        avatar_url: "https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactnative/3.0.1/1588456740326/Microsoft.VisualStudio.Services.Icons.Default",
        title: "Rocketseat",
        description: "Evolua rápido como a tecnologia. Junte-se a milhares de devs e acelere na direção dos seus objetivos.",
        technologies: ["HTML", "Javascript", "React", "React Native"]
    }
    return res.render('about', { aboutData })
})

server.get("/courses", function(req, res) {
    return res.render('courses', { items: courseContents })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});