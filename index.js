const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

promptEmployee() {
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email?",
    }
])
  .then(answers => {
    console.log(aswers);
  })
};