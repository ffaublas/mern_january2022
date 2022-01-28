const mongoose = require('mongoose');// Import Mongoose to allow us to make a table

// Teh new mongoose.schema just allows us to write the instructions for what each product should have.  The ID field is auto-generated so we don't need to include it here.
// This is how you create a Schema for Products; with validations:
const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "A title is required"],
			minlength: [10, "A title must be at least 10 characters long"]
		},
		price: {
			type: Number,
			required: [true, "A price is required"],
			min: [0, "Price must be at least 0"]
		},
		description: {
			type: String,
			required: [true, "A description is required!"],
			minlength: [10, "A description must be at least 10 characters!"]
		},
		isNewToMarket: { // Not a required field so it wont have validators
			type: Boolean
		}
	},
	// { timestamps: true }
);

// To register the ABOVE code as a table in MongoDB:
// This is how you create a constructor for our model and store in the variable "Product"
// Here we are creating a variable "Product" which is going to represent the name of our table(collection)
const Product = mongoose.model("Product", ProductSchema); //mongoose is creating a table called "Product" using instructions from "ProductSchema"

module.exports = Product;