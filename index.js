const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generatePage = require("./src/html-template");
const writeToFile = require("./utils/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArr = [];

// initialize app
const init = () => {
startProfile();
// prompt manager questions
promptManager()
//prompt next move
.then(() => promptNext());
};

// call app
init();


// start generator
function startProfile() {
  console.log("Welcome to the Mayfield Team Profiler!");
  console.log("Lets start by generating the Team Manager profile.");
}

// prompt user to add new team member
function promptNext() {
  return inquirer.prompt(questions.nextMove)
  .then((answer) => {
    console.log(answer);
    // if user adds an engineer
    if (answer.next == "Engineer") {
      promptEngineer()
      // if user adds an intern
    } else if (answer.next == "Intern") {
      promptIntern()
      // if user is done adding team members
    } else if (answer.next == "I am done profiling") {
        console.log(teamArr)
        // writeToFile(generatePage(teamArr));
        buildCardArr(teamArr);
      // if no answer is picked - should not happen bc i validated list questions
    } else {
      console.log("Error: try again!")
    }
  })
}

// prompt manager specific questions function
function promptManager() {
  return inquirer.prompt(questions.manager).then((answers) => {
    console.log(answers);
    const {name, id, email, office} = answers
    // create the new instance
    let manager = new Manager(name, id, email, office);
    manager.title = manager.getRole();
    console.log(manager)
    // push manager to team array
    teamArr.push(manager);
   console.log(teamArr)
  });
}

// prompt engineer specific questions function
function promptEngineer() {
  return inquirer.prompt(questions.engineer).then((answers) => {
    console.log(answers);
    const {name, id, email, github} = answers
    // create the new instance
    let engineer = new Engineer(name, id, email, github);
    engineer.title = engineer.getRole();
    console.log(engineer)
    // push engineer to team array
    teamArr.push(engineer);
   console.log(teamArr);
   promptNext();
  });
}

// prompt intern specific questions
function promptIntern() {
  return inquirer.prompt(questions.intern).then((answers) => {
    console.log(answers);
    const {name, id, email, school} = answers
    // create the new instance
    let intern = new Intern(name, id, email, school);
    intern.title = intern.getRole();
    console.log(intern)
    // push intern to team array
    teamArr.push(intern);
   console.log(teamArr);
   promptNext();
  });
}

  // sort by employee type for organized display
   function buildCardArr(teamArr) {
    const engineerCards = []
    const internCards = []
    // loop though our teamArr
    for (let i = 0; i < teamArr.length; i++) {
      if (teamArr[i].getRole() == "Engineer") {
          engineerCards.push(teamArr[i]);
       }
      if (teamArr[i].getRole() == "Intern") {
        internCards.push(teamArr[i]);
       }
    };

    // create array of sorted employees
    const cardArr = [];
      cardArr.push(teamArr[0]);
      cardArr.push(engineerCards);
      cardArr.push(internCards);
      console.log(cardArr);

    // write file by interpolating the cardArr into the generatePage template
    writeToFile(generatePage(cardArr));
    }