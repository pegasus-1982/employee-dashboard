// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, email, name, gitHub) {
    super(id, email, name);
    this.officeNumber = officeNumber;
    }
  
}

module.exports = Manager;