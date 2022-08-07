const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const questions = require("./src/questions");

// initialize app
// prompt general employee questions
promptEmployee()
  // prompt manager specific questions
.then(answers => promptManager(answers))
  // add employee & manager answers to an array
.then((answersObj) => {
  const answersArr = [answersObj]
    // if user adds an engineer
  if (answersObj.nextMove == "Engineer") {
    promptEmployee(answersArr)
      .then(data => promptEngineer(data))
      .then(dataObj => {
        answersArr.push(dataObj);
        console.log(answersArr);
      })
    // if user adds an intern
  } else if (answersObj.nextMove == "Intern") {
    promptEmployee(answersArr)
      .then(data => promptIntern(data))
      .then(dataObj => {
        answersArr.push(dataObj);
        console.log(answersArr);
      })
    // if user is done adding team members
  } else if (answersObj.nextMove == "I am done profiling") {
    generateHTML(answersArr)
    // if no answer is picked - should not happen bc i validated list questions
  } else {
    console.log("Error: try again!")
  }
})

// prompt general employee questions function
function promptEmployee() {
  return inquirer.prompt(questions.employee);
}

// prompt manager specific questions function
function promptManager(answers) {
  return inquirer
    .prompt(questions.manager)
    .then((answer) => {
      const answersObj = answers;
      answersObj.officeNumber = answer.office;
      answersObj.nextMove = answer.next;
      console.log(answersObj)
      return answersObj;
    })
}

// prompt engineer specific questions function
function promptEngineer(answers) {
  return inquirer
    .prompt(questions.engineer)
    .then((answer) => {
      const answersObj = answers;
      answersObj.github = answer.github;
      answersObj.nextMove = answer.next;
      console.log(answersObj)
      return answersObj;
    })
}

// prompt intern specific questions
function promptIntern(answers) {
  return inquirer
    .prompt(questions.intern)
    .then((answer) => {
      const answersObj = answers;
      answersObj.school = answer.school;
      answersObj.nextMove = answer.next;
      console.log(answersObj)
      return answersObj;
    })
}

// write/generate HTML file
function generateHTML() {
  console.log("generate HTML");
}
