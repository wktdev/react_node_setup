//____________________________________BEGIN setup
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))



//____________________________________END setup


app.get("/", function(req, res) {
    res.sendFile("public/index.html")
})


// app code



//____________________________________BEGIN Start server

app.listen("3000", function(err) {

    if (err) {
        console.log("server is not working");
    } else {
        console.log("Server is working on 3000");
    }
})
//____________________________________END Stat server