const Joker = require("../models/jokes.model");

module.exports.findAllJokers = (req, res) => {
    Joker.find()
    .then(allJokers => res.json({ result: allJokers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoker = (req, res) => {
    Joker.create(req.body)
    .then(newlyCreatedJoker => res.json({ result: newlyCreatedJoker }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoker = (req, res) => {
	Joker.findOne({ _id: req.params.id })
		.then(oneSingleJoker => res.json({ result: oneSingleJoker }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.updateExistingJoker = (req, res) => {
    Joker.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(updatedJoker => res.json({ result: updatedJoker }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoker = (req, res) => {
    Joker.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findRandomJoke = (req, res) => {
    Joker.find()
    .then(allJokers =>{
        let lengthOfAllJokers = allJokers.length;
        //get a random number from 0 to length of allJokers
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        let randomIndex = getRandomInt(lengthOfAllJokers)

        console.log(allJokers[randomIndex])
        res.json({ result: allJokers [randomIndex]})
    })
    
    .catch(err => res.json({ message: "Something went wrong", error: err }));
} 