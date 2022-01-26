
const express = require("express") //import express

const cors = require("cors") //importing cors (cross origin resource sharing) - which allows us to share our api info with our react application on the front end

const app = express(); //initialize express
const port = 8001; //specify port in variable 

//These 2 lines are needed to be able to read and extract the information received from post, put, and patch requests:
app.use(express.json() ); //tells my app that it can parse json
app.use(express.urlencoded({ extended: true })); //tells my app that it can gather form information

app.use(cors()) //have the app be able to use "cross-origin-resource sharing" features"
//connecting to our mongodb database using mongoose
require("./server/config/mongoose.config")


//import the routes and pass the app object to the routes
require('./server/routes/jokes.routes')(app)


app.listen( port, () => console.log(`Listening on port: ${port}`) );