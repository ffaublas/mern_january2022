//import the controller file and give it a variable name to reference
const ShelterController = require("../controllers/shelter.controller")

module.exports = app => {
    app.get("/api/author/", ShelterController.findAllAuthors);
    app.post("/api/author/new", ShelterController.createNewAuthor);
    app.get("/api/author/random", ShelterController.findRandomAuthor);
    app.get("/api/author/:id", ShelterController.findOneSingleAuthor);
    app.put("/api/author/update/:id", ShelterController.updateExistingAuthor);
    app.delete("/api/author/delete/:id", ShelterController.deleteAnExistingAuthor);

};