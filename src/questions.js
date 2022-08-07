questions = {
  employee: [
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
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
      message: "What is the employee's ID number?",
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
      message: "What is the employee's email?",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email address!");
          return false;
        }
      },
    },
  ],
  manager: [
    {
      type: "input",
      name: "office",
      message: "what is the Manager's office number?",
    },
    {
      type: "list",
      name: "next",
      message: "Add a team member:",
      choices: ["Engineer", "Intern", "I am done profiling"],
    },
  ],
  engineer: [
    {
      type: "input",
      name: "github",
      message: "What is the engineer's github username?",
    },
    {
      type: "list",
      name: "next",
      message: "Add a team member:",
      choices: ["Engineer", "Intern", "I am done profiling"],
    },
  ],
};

module.exports = questions;
