const mongoose = require('mongoose');// Import Mongoose to allow us to make a table

// Teh new mongoose.schema just allows us to write the instructions for what each Author should have.  The ID field is auto-generated so we don't need to include it here.
// This is how you create a Schema for Authors; with validations:
const AuthorSchema = new mongoose.Schema(
	{
		Author: {
			type: String,
			required: [true, "An Author's name is required"],
			minlength: [3, "The Author's name must be at least 3 characters long"]
		},
	},
	// { timestamps: true }
);

// To register the ABOVE code as a table in MongoDB:
// This is how you create a constructor for our model and store in the variable "Author"
// Here we are creating a variable "Author" which is going to represent the name of our table(collection)
const Author = mongoose.model("Author", AuthorSchema); //mongoose is creating a table called "Author" using instructions from "AuthorSchema"

module.exports = Author;