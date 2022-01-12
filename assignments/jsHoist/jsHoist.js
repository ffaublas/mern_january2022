// Assignment: JavaScript Hoisting

// Objectives:
// Practice reading JavaScript the same way as the interpreter reads it.

// Question 1
console.log(example);  // ReferenceError: Cannot access 'example' before initialization
let example = "I'm the example!";

// HOW WOULD INTERPRETER READ THIS:
let example
console.log(example); // undefined
example = "I'm the example!";

// Question 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); // magnet
}
// HOW WOULD INTERPRETER READ THIS:
var needle = 'haystack';
var needle
function test(){
    test();
    var needle 
    console.log(needle);  // haystack
}


// Question 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);  // super cool

// HOW WOULD INTERPRETER READ THIS:

var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);    // super cool

// Question 4
var food = 'chicken';
console.log(food);    // chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);    // half chicken
    var food = 'gone';
}


// HOW WOULD INTERPRETER READ THIS:
var food = 'chicken';
var food

function eat(){
    food = 'half-chicken';
    console.log(food);      // half chicken
    food = 'gone';
}
eat();
console.log(food);           // gone

// Question 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);     // meaning is not a function

// HOW WOULD INTERPRETER READ THIS:
var food
var mean = function() {
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
mean();
console.log(food);

// OUTPUT// undefined
// OUTPUT//chicken
// OUTPUT//fish
// OUTPUT//fish


// Question 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// OUTPUT//undefined
// OUTPUT//rock
// OUTPUT//r&b
// OUTPUT// disco


// HOW WOULD INTERPRETER READ THIS:

var genre = "disco";
var genre
function rewind() {
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
rewind();
console.log(genre);

// OUTPUT// disco
// OUTPUT//rock
// OUTPUT//r&b
// OUTPUT//r&b

// Question 7
dojo = "san jose";
console.log(dojo);        // OUTPUT - ReferenceError: dojo is not defined
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// HOW WOULD INTERPRETER READ THIS:
var dojo 
function learn() {
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

// OUTPUT// san jose
// OUTPUT//seattle
// OUTPUT//burbank
// OUTPUT//burbank

// Question 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// HOW WOULD INTERPRETER READ THIS:

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
