//import the controller file and give it a variable name to reference
const FavoriteController = require("../controllers/favorite.controller")

module.exports = app => {
    app.get("/api/author/", FavoriteController.findAllAuthors);
    app.post("/api/author/new", FavoriteController.createNewAuthor);  
    app.get("/api/author/random", FavoriteController.findRandomAuthor);
    app.get("/api/author/:id", FavoriteController.findOneSingleAuthor);
    app.put("/api/author/update/:id", FavoriteController.updateExistingAuthor);  
    app.delete("/api/author/delete/:id", FavoriteController.deleteAnExistingAuthor);
    
};