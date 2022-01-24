const mongoose = require('mongoose');


// This is how you create a Schema for Jokers; with validations:
const JokerSchema = new mongoose.Schema(
	{
		Setup: {
			type: String,
			required: [true, "A set up is required"],
			minlength: [10, "Setup must be at least 10 characters long"]
		},
		Punchline: {
			type: String,
			required: [true, "A punchline is required"],
			minlength: [3, "Punchline must be at least 3 characters long"]
		},
	},
	// { timestamps: true }
);

// To register the ABOVE code as a table in MongoDB:
// This is how you create a constructor for our model and store in the variable "User"
const Joker = mongoose.model("Joker", JokerSchema);

module.exports = Joker;