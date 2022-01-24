
const express = require("express") //import express



const app = express(); //initialize express
const port = 8001; //specify port in variable 

app.use(express.json() ); //tells my app that it can parse json
app.use(express.urlencoded({ extended: true })); //tells my app that it can gather form information

//connecting to our mongodb database using mongoose
require("./server/config/mongoose.config")




//import the routes and pass the app object to the routes
require('./server/routes/jokes.routes')(app)


app.listen( port, () => console.log(`Listening on port: ${port}`) );