const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const questions = require("./src/questions");

promptEmployee()
.then(answers => promptManager(answers))
.then((answersObj) => {
  const answersArr = [answersObj]
  if (answersObj.nextMove == "Engineer") {
    promptEmployee(answersArr)
      .then(data => promptEngineer(data))
      .then(dataObj => {
        answersArr.push(dataObj);
        console.log(answersArr);
      })
  } else if (answersObj.nextMove == "Intern") {
    promptEmployee(answersArr)
      .then(data => promptIntern(data))
      .then(dataObj => {
        answersArr.push(dataObj);
        console.log(answersArr);
      })
  } else if (answersObj.nextMove == "I am done profiling") {
    generateHTML(answersArr)
  }
  
})
function promptEmployee() {
  return inquirer.prompt(questions.employee);
}

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

function generateHTML() {
  console.log("generate HTML");
}
