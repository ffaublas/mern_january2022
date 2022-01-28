//import the controller file and give it a variable name to reference
const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/products/", ProductController.findAllProducts);
    app.post("/api/products/new", ProductController.createNewProduct);  
    app.get("/api/products/random", ProductController.findRandomProduct);
    app.get("/api/products/:id", ProductController.findOneSingleProduct);
    app.put("/api/products/update/:id", ProductController.updateExistingProduct);  
    app.delete("/api/products/delete/:id", ProductController.deleteAnExistingProduct);
    
};