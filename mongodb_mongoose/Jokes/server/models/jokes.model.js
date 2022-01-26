const mongoose = require('mongoose');// Import Mongoose to allow us to make a table

// Teh new mongoose.schema just allows us to write the instructions for what each joker should have.  The ID field is auto-generated so we don't need to include it here.
// This is how you create a Schema for Jokers; with validations:
const JokerSchema = new mongoose.Schema(
	{
		setUp: {
			type: String,
			required: [true, "A set up is required"],
			minlength: [10, "Setup must be at least 10 characters long"]
		},
		punchLine: {
			type: String,
			required: [true, "A punchline is required"],
			minlength: [3, "Punchline must be at least 3 characters long"]
		},
		firstName: {
			type: String,
			required: [true, "First Name is required!"],
			minlength: [2, "First name must be at least 2 characters!"]
		},
		lastName: {
			type: String,
			required: [true, "Last Name is required!"]
		},
		numBelts: {
			type: Number,
			required: [true, "Number of belts is required!"],
			min: [0, "Number of belts must be at least 0!"]
		},
		isVeteran: { //isVeteran is not a required field so it wont have validators
			type: Boolean
		}
	},
	// { timestamps: true }
);

// To register the ABOVE code as a table in MongoDB:
// This is how you create a constructor for our model and store in the variable "Joker"
// Here we are creating a variable "Joker" which is going to represent the name of our table(collection)
const Joker = mongoose.model("Joker", JokerSchema); //mongoose is creating a table called "Joker" using instructions from "JokerSchema"

module.exports = Joker;