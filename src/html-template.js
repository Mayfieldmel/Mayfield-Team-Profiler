const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// generate manager cards
const generateManagerCard = managerData => {
    return `
    <div class="card border-0" style="width: 18rem;">
        <div class="card-body">
            <div class="bg-primary py-2 text-white shadow-lg rounded-top">
                <h5 class="card-title">${managerData.name}</h5>
                <h6 class="card-subtitle mb-2">🍵${managerData.getRole()}</h6>
            </div>
            <div class="shadow-lg p-3 mb-5 bg-body rounded-bottom">
                <p class="card-text bg-light border">ID: ${managerData.id}</p>
                <p class="card-text bg-light border">Email: <a href="mailto:${managerData.email}" class="card-link">${managerData.email}</a></p>
                <p class="card-text bg-light border">Office number: ${managerData.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}
// generate engineer cards
const generateEngineerCard = engineerData => {
    return `
    <div class="card border-0" style="width: 18rem;">
        <div class="card-body">
            <div class="bg-primary py-2 text-white shadow-lg rounded-top">
                <h5 class="card-title">${engineerData.name}</h5>
                <h6 class="card-subtitle mb-2">👓${engineerData.getRole()}</h6>
            </div>
            <div class="shadow-lg p-3 mb-5 bg-body rounded-bottom">
                <p class="card-text bg-light border">ID: ${engineerData.id}</p>
                <p class="card-text bg-light border">Email: <a href="mailto:${engineerData.email}" class="card-link"> ${engineerData.email}</a></p>
                <p class="card-text bg-light border">Github: <a href="https://github.com/${engineerData.getGithub()}" target="_blank" class="card-link"> ${engineerData.getGithub()}</a>
            </div>
        </div>
    </div>
    `;
}
// generate intern cards
const generateInternCard = internData => {
    return `
    <div class="card border-0" style="width: 18rem;">
        <div class="card-body">
            <div class="bg-primary py-2 text-white shadow-lg rounded-top">
                <h5 class="card-title">${internData.name}</h5>
                <h6 class="card-subtitle mb-2">🧑‍🎓${internData.getRole()}</h6>
            </div>
            <div class="shadow-lg p-3 mb-5 bg-body rounded-bottom">
                <p class="card-text bg-light border">ID: ${internData.id}</p>
                <p class="card-text bg-light border">Email: <a href="mailto:${internData.email}" class="card-link"> ${internData.email}</a><p>
                <p class="card-text bg-light border">School: ${internData.getSchool()}</p>
            </div>
        </div>
    </div>
    `;
}

// build employee cards
function buildCards(teamArr) {
     // check what kinda OBJECT
    if (teamArr.getRole() == "Engineer") {
        return generateEngineerCard(teamArr);
      }
      if (teamArr.getRole() == "Intern") {
       return generateInternCard(teamArr);
      }
  };
  

// generate HTML template
module.exports = templateData=> {
    // deconstruct array by employee type
    const [managerData, engineerData, internData] = templateData;
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
      <header class="container text-center bg-danger py-5">
        <div class="row">
          <h1 class="col-12 text-white">My Team</h1>
        </div>
      </header>
      <main class="container text-center">
        <div class="row align-items-center">
        ${generateManagerCard(managerData)}
        ${engineerData.map(buildCards)}
        ${internData.map(buildCards)}
        </div>
      </main>
    </body>
    </html>
    `;
  }
