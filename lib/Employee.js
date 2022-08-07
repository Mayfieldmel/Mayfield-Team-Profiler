const inquirer = require("inquirer");


// create Employee parent class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

getName() {
    return this.name;
};

};

Employee.prototype.getName();
module.exports = Employee;