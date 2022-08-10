const Employee = require('./Employee.js');
// create Manager class
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.officeNumber = office;
    }

   getOfficeNumber()  {
    return this.officeNumber;
   }

   getRole()  {
    return "Manager";
   }
}


module.exports = Manager;