const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


function creatingCards(cards) {
    let team = [];
    for (let i = 0; i < team.length; i++) {
        const userTeam = cards[i];
        switch(userTeam.getRole()) {
            case 'Manager':
                const manager = new Manager(
                    userTeam.name,
                    userTeam.id,
                    userTeam.email,
                    userTeam.officeNumber
                );
                cards.push(managerCard(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(
                    userTeam.name,
                    userTeam.id,
                    userTeam.email,
                    userTeam.github
                );
                cards.push(engineerCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(
                    userTeam.name,
                    userTeam.id,
                    userTeam.email,
                    userTeam.school
                );
                cards.push(internCard(intern));
                break;
        }
    }
}

// creating cards for Engineer, Intern and Manager
const engineerCard = function(engineer) {
    return `
    <div class="card border-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.name}</div>
        <div class="card-body text-secondary">
            <h5 class="role">Role: ${engineer.role}</h5>
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p> 
        </div>
    </div>
    `
};

// const internCard = function(intern) {
//     return `
//     <div class="card border-secondary mb-3" style="max-width: 18rem;">
//         <div class="card-header">${intern.name}</div>
//         <div class="card-body text-secondary">
//             <h5 class="role">Role: ${intern.role}</h5>
//             <p class="id">ID: ${intern.id}</p>
//             <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
//             <p class="school">School: ${intern.school}</p> 
//         </div>
//     </div>
//     `
// }

// const managerCard = function(manager) {
//     return `
//     <div class="card border-secondary mb-3" style="max-width: 18rem;">
//         <div class="card-header">${manager.name}</div>
//         <div class="card-body text-secondary">
//             <h5 class="role">Role: ${manager.role}</h5>
//             <p class="id">ID: ${manager.id}</p>
//             <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
//             <p class="officeNumber">Office Number: ${manager.officeNumber}</p> 
//         </div>
//     </div>
//     `
// }

creatingCards();
module.exports = creatingCards;