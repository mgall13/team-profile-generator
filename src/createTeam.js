
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');



function createTeam(team) {
    return `<!doctype html>
    <html lang="en">
      <head>
        
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="style.css">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      </head>
      <body>

      ${generateCards(cards)}
          
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
    </html>
    `
}


function generateCards(cards) {
    let team = [];
    for(let i = 0; i < cards.length; i++) {
        const teamArray = cards[i];
        switch(teamArray.getRole()) {
        case 'Manager':
            const manager = new Manager(
                teamArray.id, 
                teamArray.name, 
                teamArray.email, 
                teamArray.officeNumber);
            team.push(managerCard(manager));
            break;
        case 'Engineer':
            const engineer = new Engineer(
                teamArray.id, 
                teamArray.name, 
                teamArray.email, 
                teamArray.github);
            team.push(engineerCard(engineer));
            break;
        case 'Intern':
            const intern = new Intern(
                teamArray.id, 
                teamArray.name, 
                teamArray.email, 
                teamArray.school);
            team.push(internCard(intern));
            break;
        }
    }
    return team.join(``)
}

// creating cards for Engineer, Intern and Manager
const engineerCard = function(engineer) {
    return `
    <div class="card border-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.name}</div>
        <div class="card-body text-secondary">
            <h5 class="role">Role: ${engineer.getRole}</h5>
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">GitHub: <a href="https://github.com/${engineer.getGithub}">${engineer.github}</a></p> 
        </div>
    </div>
    `
};

const internCard = function(intern) {
    return `
    <div class="card border-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.name}</div>
        <div class="card-body text-secondary">
            <h5 class="role">Role: ${intern.role}</h5>
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p> 
        </div>
    </div>
    `
}

const managerCard = function(manager) {
    return `
    <div class="card border-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager.name}</div>
        <div class="card-body text-secondary">
            <h5 class="role">Role: ${manager.role}</h5>
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="officeNumber">Office Number: ${manager.officeNumber}</p> 
        </div>
    </div>
    `
}

generateCards();
module.exports = generateCards;