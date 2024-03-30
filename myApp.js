let express = require('express');
let app = express();

// //Serving a string
// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

// Responding to requests with a file using res.sendFile(path)
//In this excercise we are serving and index.html file on "/"
app.get(`/`, (req, res) => {
    res.sendFile(__dirname + `/views/index.html`)
})


































 module.exports = app;
