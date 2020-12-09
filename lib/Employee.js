// TODO: Write code to define and export the Employee class
class Employee {
    constructor(id, email, name) {
      this.id = id;
      this.email = email;
      this.name = name;
    }
  
    printInfo() {
      console.log(`Employee id ${this.id}`);
      console.log(`The email is ${this.email}`);
    }

    
  }
  module.exports = Employee;
  