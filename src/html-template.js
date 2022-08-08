const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// generate manager cards
const generateManagerCard = managerData => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <div class="bg-primary">
                <h5 class="card-title">${managerData.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${managerData.getRole()}</h6>
            </div>
            <div class="shadow-sm p-3 mb-5 bg body rounded">
                <p class="card-text">ID: ${managerData.id}</p>
                <p>Email: <a href="mailto:${managerData.email}" class="card-link">${managerData.email}</a></p>
                <p class="card-text">Office number: ${managerData.officeNumber}</p>
            </div>
        </div>
    </div>`
}
// generate engineer cards
const generateEngineerCard = engineerData => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <div class="bg-primary">
                <h5 class="card-title">${engineerData.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${engineerData.getRole()}</h6>
            </div>
            <div class="shadow-sm p-3 mb-5 bg body rounded">
                <p class="card-text">ID: ${engineerData.id}</p>
                <p>Email: <a href="mailto:${engineerData.email}" class="card-link"> ${engineerData.email}</a></p>
                <p>Github: <a href="https://github.com/${engineerData.getGithub}" class="card-link"> ${engineerData.getGithub}</a>
            </div>
        </div>
    </div>`
}
// generate intern cards
const generateInternCard = internData => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <div class="bg-primary">
                <h5 class="card-title">${internData.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${internData.getRole()}</h6>
            </div>
            <div class="shadow-sm p-3 mb-5 bg body rounded">
                <p class="card-text">ID: ${internData.id}</p>
                <p>Email: <a href="mailto:${internData.email}" class="card-link"> ${internData.email}</a><p>
                <p class="card-text">School: ${internData.getSchool}</p>
            </div>
        </div>
    </div>`
}
// build employee cards
function buildCards(teamArr) {
    // loop though our teamArr
    for (let i = 0; i < teamArr.length; i++) {
     // check what kinda OBJECT)
     if (teamArr[i].title == "Manager") {
        generateManagerCard(teamArr[i]);
      }
     if (teamArr[i].title == "Engineer") {
        generateEngineerCard(teamArr[i]);
      }
     if (teamArr[i].title == "Intern") {
        generateInternCard(teamArr[i]);
      }
  };
  }

// generate HTML template
module.exports = templateData => {
    const [managerData, ...employeeData] = templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
    </head>
  
    <body>
      <header class="container text-center bg-danger">
        <div class="row">
          <h1 class="col-12">My Team</h1>
        </div>
      </header>
      <main class="container text-center">
        <div class="row align-items-center">
        ${generateManagerCard(managerData)}
        ${buildCards(templateData)}
        </div>
      </main>
    </body>
    </html>
    `;
  }


