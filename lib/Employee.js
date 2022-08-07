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

getId() {
    return this.id;
};

getEmail() {
    return this.email;
};

// Returns 'Employee'
getRole() {
    return Employee.name;
};
};

module.exports = Employee;