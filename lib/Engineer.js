// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, email, name, gitHub) {
    super(id, email, name);
    this.gitHub = gitHub;
    }
  
}

module.exports = Engineer;