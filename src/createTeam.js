// Requiring Employees
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// function to begin building cards 
function creatingCards(team) {
  var cards = []
  for(var i = 0; i < team.length; i++) {
    const employeeArray = team[i];
    switch(employeeArray.getRole()) {
      case 'Manager':
        const manager = new Manager(
            employeeArray.id, 
            employeeArray.name, 
            employeeArray.email, 
            employeeArray.officeNumber);
        cards.push(generateManagerCard(manager));
        break;
      case 'Engineer':
        const engineer = new Engineer(
            employeeArray.id, 
            employeeArray.name, 
            employeeArray.email, 
            employeeArray.github);
        cards.push(generateEngineerCard(engineer));
        break;
      case 'Intern':
        const intern = new Intern(
            employeeArray.id, 
            employeeArray.name, 
            employeeArray.email, 
            employeeArray.school);
        cards.push(generateInternCard(intern));
        break;
    }
  }
  return cards.join(``)
}

// Generating Manager Card using Bootstrap
let generateManagerCard = (Manager) => {
  return `
  <div class="card m-3 shadow" style="width: 18rem">
    <div class='card-header'>
      <h3 class="card-title">${Manager.getId()}</h3>
      <h6 class="card-text"><i class="fas fa-tasks"></i> ${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.getName()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
  `
}

// Generating Engineer Card using Bootstrap
let generateEngineerCard = (Engineer) => {
  return `
  <div class="card m-3 shadow" style="width: 18rem">
    <div class='card-header'>
      <h3 class="card-title">${Engineer.getId()}</h3>
      <h6 class="card-text"><i class="fab fa-wpbeginner"></i> ${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="id">ID: ${Engineer.getName()}</li>
        <li class="list-group-item" id="email">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>
  `
};

// Generating Intern Card using Bootstrap
let generateInternCard = (Intern) => {
  return `
  <div class="card m-3 shadow" style="width: 18rem">
    <div class='card-header'>
      <h3 class="card-title">${Intern.getId()}</h3>
      <h6 class="card-text"><i class="fas fa-user-graduate"></i> ${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Intern.getName()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

function createTeam(team) {
  console.log(team)
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <title>Team Profile Generator</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-info" class="topHeader">
  <div class="container">
    <h1 class="display-4 text-center">Current Employees</h1>
  </div>
</div>
<div class="d-flex flex-row flex-wrap justify-content-center">
${creatingCards(team)}
</div>
</body>
</html>
    `
}

module.exports = createTeam;