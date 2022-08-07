const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter a name!');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's ID number?",
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log('Please enter an id!');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter an email address!');
        return false;
      }
    }
  },
];

function promptEmployee() {
  return inquirer.prompt(employeeQuestions);
}

function promptManager(answers) {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "office",
        message: "what is the Manager's office number?",
      },
      {
        type: "list",
        name: "next",
        message: "Add a team member:",
        choices: ["Engineer", "Intern", "I am done profiling"]
      }
    ])
    .then((answer) => {
      const answersObj = answers;
      answersObj.officeNumber = answer.office;
      console.log(answersObj);
    })
    .then()
}

function init() {
  promptEmployee()
    .then((answers) => {
      promptManager(answers);
    })
    .then((answersObj) => {
      console.log(answersObj);
    });
}

init();
