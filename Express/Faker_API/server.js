class User {
  constructor() {
    this.id = faker.commerce.productName();
    this.firstName = faker.commerce.productName();
    this.lastName = faker.commerce.productName();
    this.phoneNumber = faker.commerce.productName();
    this.email = faker.commerce.productName();
    this.password= faker.commerce.productName();
  }
}
console.log(new User());

class Company {
  constructor() {
    this.id = faker.commerce.productName();
    this.name = faker.commerce.productName();
    this.address = faker.commerce.productName();
    this.address.street = faker.commerce.productName();
    this.address.city = faker.commerce.productName();
    this.address.state = faker.commerce.productName();
    this.address.zidCode = faker.commerce.productName();
    this.address.country = faker.commerce.productName();

  }
}
console.log(new Company());