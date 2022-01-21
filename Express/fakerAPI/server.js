const faker = require('@faker-js/faker');
const express = require("express"); //require is a way of importing something in a js file
const app = express(); //create a varible called app --> this variable is an instance of express
const port = 8002;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

class User{
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName= faker.name.firstName();
        this.lastName= faker.name.lastName();
        this.phoneNumber= faker.phone.phoneNumber();
        this.email= faker.internet.email();
        this.password= faker.internet.password();
    }
}
class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name= faker.name.firstName();
        this.address= faker.address.streetAddress();
        this.street= faker.address.streetName();
        this.city= faker.address.city();
        this.state= faker.address.state();
        this.zipcode= faker.address.zipCode();
        this.country= faker.address.country();

    }
}

//Get Random New User
app.get("/api/users/new", (req, res) =>{
    let newUser = new User()
    res.json({result:newUser})
})


//Get Random New Company
app.get("/api/companies/new", (req, res) =>{
    let newCompany = new Company()
    res.json({results:newCompany})
})

// Get Random New User and Random New Company
app.get("/api/user/companies/new", (req, res) =>{
    let newUser = new User()
    let newCompany = new Company()

    res.json({results: newUser,newCompany})
})


app.listen( 8002, () => console.log (`Listening on port: ${port}`));