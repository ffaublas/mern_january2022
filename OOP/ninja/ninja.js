class Ninja{
    constructor(nameParam) {
        this.name = nameParam;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log('My name is ' + this.name)
    }

    showStats(){
        // console.log(this.name  +  "strenth is  " , + "his speed:  ", + "and his health: + " )
    }

    drinkSake(){
        console.log('This sake energy drink is weak!!!')
        this.health += 10;
    }

}

// Method that is Logging in Ninja's name to the console:
let n1 = new Ninja("Roku");
n1.sayName();

// Method that adds 10 points to Ninja's Health:
n1.drinkSake();

// Method that is Showing the Ninja's name, strength, speed and health:
console.log(n1);

