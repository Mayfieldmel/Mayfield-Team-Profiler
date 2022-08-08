const manager = require("../lib/Manager");
// generate employee cards
const generateManagerCard = managerData => {
    // const teamManager = new Manager()
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${managerData.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${managerData.getRole()}</h6>
            <p class="card-text">ID: ${managerData.id}</p>
            <a href="mailto:${managerData.email}" class="card-link">Email: ${managerData.email}</a>
            <p class="card-text">Office number: ${managerData.officeNumber}</p>
        </div>
    </div>`
}

// generate HTML template
module.exports = templateData => {
     // destructure page data by section
     const [managerData, ...employees] = templateData;
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
      <header class="container text-center">
        <div class="row">
          <h1 class="col-12">My Team</h1>
        </div>
      </header>
      <main class="container text-center">
        <div class="row align-items-center>
        ${generateManagerCard(managerData)}
        </div>
      </main>
    </body>
    </html>
    `;
  }


