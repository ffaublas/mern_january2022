class Ninja{
    constructor(nameParam, healthParam) {
        this.name = nameParam;
        this.health = healthParam;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log('My name is ' + this.name, )
    }

    showStats(){
        // console.log(this.name  +  "strenth is  " , + "his speed:  ", + "and his health: + " )
    }

    drinkSake(){
        console.log('This sake energy drink is weak!!!')
        this.health += 10;
    }

}

// // Method that is Logging in Ninja's name to the console:
// let n1 = new Ninja("Roku", 90);
// n1.sayName();

// // Method that adds 10 points to Ninja's Health:
// n1.drinkSake();

// // Method that is Showing the Ninja's name, strength, speed and health:
// console.log(n1);

class Sensei extends Ninja{
    constructor(nameParam, healthParam, wisdomParam){
        super(nameParam, healthParam, wisdomParam)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = wisdomParam;
    }

    speakwisdom(drinkSake){
        console.log("Failure is not an option")
        this.health += drinkSake;
    }
}

let s1 = new Sensei ("Coda", 200, 10);
s1.sayName();
s1.speakwisdom();
console.log(s1);
