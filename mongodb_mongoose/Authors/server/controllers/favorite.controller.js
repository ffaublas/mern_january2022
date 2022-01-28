const Author = require("../models/favorite.model");

module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then(allAuthors => res.json({ result: allAuthors }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
    .then(newlyCreatedAuthor => res.json({ result: newlyCreatedAuthor }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
    .then(oneSingleAuthor => res.json({ result: oneSingleAuthor }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(updatedAuthor => res.json({ result: updatedAuthor }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findRandomAuthor = (req, res) => {
    Author.find()
    .then(allAuthors =>{
        let lengthOfAllAuthors = allAuthors.length;
        //get a random number from 0 to length of allAuthors
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        let randomIndex = getRandomInt(lengthOfAllAuthors)

        console.log(allAuthors[randomIndex])
        res.json({ result: allAuthors [randomIndex]})
    })
    
    .catch(err => res.json({ message: "Something went wrong", error: err }));
} 