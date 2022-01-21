const express = require("express"); //require is a way of importing something in a js file
const app = express(); //create a varible called app --> this variable is an instance of express
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let quotes = [
    {content: "It is not the mountains ahead that will wear you out, it is the pebble in your shoe", author:"Muhammad Ali"},
    {content:"A wise man once said nothing at all", author:"Wes"},
    {content:"Comparison is a theif of joy", author:"Theodore Roosevelt"},
    {content:"Fall down 7 times stand up 8", author:"Japanese Proverb"},
    {content:"You Attract what you vibrate", author:"Fritz"},
    {content:"Wherever you go, there you are", author:"Eckhart Tolle"}
]
app.get("/api/hello", (req, res)=>{
    res.json({msg:"hello express"})
})

//get all quotes
app.get("/api/quotes", (req, res) =>{
    res.json({count: quotes.length, results: quotes})
})

//get one quote
app.get("/api/quotes/:idx", (req, res) =>{
    res.json({results: quotes[req.params.idx]})
})

//add a new quote
app.post("/api/quotes", (req, res) => {
    console.log("req.body", req.body)
    quotes.push(req.body)
    res.json({msg: "success", results: quotes})
})

//update a quote
app.put("/api/quotes/:idx", (req, res) => {
    //2 Parts: -> which thing we want to update (idx); and what data we want to update it with (req.body)
    console.log("req.body", req.body)
    quotes[req.params.idx] = req.body //update quotes array at 
    res.json({count: quotes.length, results: quotes})
})

app.delete("/api/quotes/:idx", (req, res)=>{
    //you can use splice to remove something from an array
    quotes.splice(req.params.idx,1)
    res.json({count: quotes.length, results: quotes})
})

app.listen( 8000, () => console.log (`Listening on port: ${port}`));