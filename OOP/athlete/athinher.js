// Create a class using the class keyword
class Athlete {
    // constructor functions runs when  a new athlete is created and this function will initialize the new athlete with the attributes defined in the constructor
    constructor(nameParam, speedParam) {
        this.name = nameParam;
        this.energy = 100;
        this.speed = speedParam;
        this.strength = 75;
    }
    // functionalities an Athlete can perfrom goes here
    sayName() {
        console.log('My name is ' + this.name)// this refers to the object calling the method
    }
    playAGame(sportName) {
        console.log(this.name + "is playing " + sportName)
    }
}

// let a1 = new Athlete("Jordan", 99) 
// let a2 = new Athlete("Serena", 85)
// let a3 = new Athlete("Phelps", 80)

// console.log(a1) // Athlete { name: 'Jordan', energy: 100, speed: 99, strength: 75 }
// console.log(a2)// Athlete { name: 'Serena', energy: 100, speed: 85, strength: 75 }
// console.log(a3)// Athlete { name: 'Phelps', energy: 100, speed: 80, strength: 75 }

// a1.sayName()  // My name is Jordan (console.log from line 12)

// a2.playAGame("Tennis") // Serena is playing Tennis (console.log from line 15)

// INHERITANCE - We can create a sub class(es) that inherits from the Athlete class and more specific with more specialized features and functionality 


//now a swimmer can do things that an athlete can do.
class Swimmer extends Athlete {
    constructor(nameParam, lungCapacityParam, speedParam) {
        super(nameParam, speedParam)// Super is a special function that allows us to call the constructor of the parent class.
        // upgrade for the swimmer class below
        this.lungCapacity = lungCapacityParam;
    }

    swim(energySpent) {
        console.log("SWIMMING IN THE OCEAN")
        this.energy -= energySpent;
    }
}
// OUTPUT:
// Swimmer {
//   name: 'Michael Phelps',
//   energy: 100,
//   speed: 70,
//   strength: 75
// }

// creating an instance for a swimmer (class)
let swimmer1 = new Swimmer("Michael Phelps", 100, 100)
let swimmer2 = new Swimmer('Kendrick Lamar', 90, 80)

console.log(swimmer1)
console.log(swimmer2)

// swimmer1.playAGame("Swim", 20)

swimmer1.swim(30)



///////////////////////////////////////////////////////////////////////////////////////////

//now a swimmer can do things that an athlete can do.
class BasketballPlayer extends Athlete {
    constructor(nameParam, verticalJumpParam, speedParam) {
        super(nameParam, speedParam)// Super is a special function that allows us to call the constructor of the parent class.
        // upgrade for the swimmer class below
        this.verticalJumpHeight = verticalJumpParam;
    }

    dunkBall(energySpent) {
        console.log("Sports Center Top Dunk of the Year!!!!")
        this.energy -= energySpent;
    }
}
// OUTPUT:
// Swimmer {
//   name: 'Michael Phelps',
//   energy: 100,
//   speed: 70,
//   strength: 75
// }

// creating an instance for a BasketballPlayer (class)
let b1 = new BasketballPlayer("Lebron James", 50, 95)

console.log(b1)