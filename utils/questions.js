questions = {
  manager: [
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the managers's ID number?",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter an id!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the managers's email?",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "office",
      message: "what is the Manager's office number?",
    },
  ],
  engineer: [
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's ID number?",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter an id!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email?",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's github username?",
    },
  ],
  intern: [
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's ID number?",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter an id!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email?",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school name?",
    },
  ],
  nextMove: {
      type: "list",
      name: "next",
      message: "Add a team member:",
      choices: ["Engineer", "Intern", "I am done profiling"],
      validate: (nextChoice) => {
        if (nextChoice) {
          return true;
        } else {
          console.log("Please enter select an option!");
          return false;
        }
      },
    },
};

module.exports = questions;
