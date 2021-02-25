const express = require ("express");
const app = express ();

//creates the channel of communication between server and client
const PORT = process.env.PORT || 3001

// express static creates a static url path for public
app.use (express.static("public"))

//express.urlencoded is the data parser to make it the original data format again and stores it in req.body
app.use (express.urlencoded({extended: true }))
app.use (express.json())

app.use(require("./routes/html"))
app.use(require("./routes/api"))

app.listen(PORT,function(){
    console.log("app is listening on "+PORT)
})

