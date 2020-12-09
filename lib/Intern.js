// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(id, email, name, gitHub) {
    super(id, email, name);
    this.schoolUniversity = schoolUniversity;
    }
  
}

module.exports = Intern;