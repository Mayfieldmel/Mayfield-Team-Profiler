const Employee = require("./Employee.js");
// create Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return Engineer.name;
    }
}

module.exports = Engineer