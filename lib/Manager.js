const Employee = require('./Employee.js');
// create Manager class
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.officeNumber = office;
    }

    
}


module.exports = Manager;