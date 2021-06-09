const express = require("express");
const app = express();
const path = require('path');

app.use('/public/img', express.static(__dirname +'/public/img'));
app.use('/public/css', express.static(__dirname + '/public/css'));
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})


app.get("/", (req, res) => {
    let htmlPath= path.join(__dirname, "/views/home.html")
    res.sendFile(htmlPath)
});

app.get("/", (req, res) => {
    let htmlPath= path.join(__dirname, "/views/register.html")
    res.sendFile(htmlPath)
});

app.get("/", (req, res) => {
    let htmlPath= path.join(__dirname, "/views/login.html")
    res.sendFile(htmlPath)
});