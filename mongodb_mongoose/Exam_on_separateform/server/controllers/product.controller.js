const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({ result: allProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
    .then(newlyCreatedProduct => res.json({ result: newlyCreatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleProduct = (req, res) => {
	Product.findOne({ _id: req.params.id })
    .then(oneSingleProduct => res.json({ result: oneSingleProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(updatedProduct => res.json({ result: updatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findRandomProduct = (req, res) => {
    Product.find()
    .then(allProducts =>{
        let lengthOfAllProducts = allProducts.length;
        //get a random number from 0 to length of allProducts
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        let randomIndex = getRandomInt(lengthOfAllProducts)

        console.log(allProducts[randomIndex])
        res.json({ result: allProducts [randomIndex]})
    })
    
    .catch(err => res.json({ message: "Something went wrong", error: err }));
} 