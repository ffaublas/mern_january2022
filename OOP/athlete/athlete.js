// Create a class using the class keyword
class Athlete {
    // constructor functions runs when  a new athlete is created/constructed/instantiated and this function will initialize the new athlete with the attributes defined in the constructor
    constructor(nameParam, speedParam) {
        this.name = nameParam;
        this.energy = 100;
        this.speed = speedParam;
        this.strength = 75;
    }
    // functionalities an Athlete can perform goes here
    sayName() {
        console.log('My name is ' + this.name)// this refers to the object calling the method
    }
    playAGame(sportName, energySpent) {
        console.log(this.name + " is playing " + sportName);
        this.energy -= energySpent;
    }
}

let a1 = new Athlete("Jordan", 99)
let a2 = new Athlete("Serena", 85)
let a3 = new Athlete("Phelps", 80)

console.log(a1) // Athlete { name: 'Jordan', energy: 100, speed: 99, strength: 75 }
console.log(a2)// Athlete { name: 'Serena', energy: 100, speed: 85, strength: 75 }
console.log(a3)// Athlete { name: 'Phelps', energy: 100, speed: 80, strength: 75 }

a1.sayName()  // My name is Jordan (console.log from line 12)
a2.sayName()
a3.sayName()

console.log("a1 and a2 are playing some games/sports")
a2.playAGame("Tennis", 30) // Serena is playing Tennis (console.log from line 15)
a3.playAGame("Swimming", 50)

console.log(a1) // 
console.log(a2)// Energy drops after playing sports
console.log(a3)// Energy drops after playing sports 