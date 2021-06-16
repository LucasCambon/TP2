const express = require("express");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes")
var path = require('path');

app.use('/public', express.static(__dirname +'/public'));


app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use("/", mainRoutes)

/*app.get("/", (req, res) => {
    let htmlPath= path.join(__dirname, "/views/home.html")
    res.sendFile(htmlPath)
});
*/
