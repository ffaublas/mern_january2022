//import the controller file and give it a variable name to reference
const JokerController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes/", JokerController.findAllJokers);
    app.post("/api/jokes/new", JokerController.createNewJoker);  
    app.get("/api/jokes/random", JokerController.findRandomJoke);
    app.get("/api/jokes/:id", JokerController.findOneSingleJoker);
    app.put("/api/jokes/update/:id", JokerController.updateExistingJoker);  
    app.delete("/api/jokes/delete/:id", JokerController.deleteAnExistingJoker);
    
};

