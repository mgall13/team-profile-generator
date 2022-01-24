const createTeam = require('./src/createTeam')
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// creating empty array to hold out team data
const teamArray = [];

// initializing question prompts
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Manager's name!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "Please input your manager's ID.",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your manager's ID.")
            return false;
          }
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?",
        validate: email => {
          valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
          if (valid) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter in your manager's office number.")
            return false;
          }
        }
      },
      // initiliazing next employee prompts
      {
        type: 'list',
        name: 'addTeammate',
        message: 'What type of team member would you like to add next?',
        choices: ['Engineer', 'Intern', "That completes my team!"],
      }
    ])
    .then((managerAnswers) => {
      const manager = new Manager(
        managerAnswers.managerName,
        managerAnswers.managerId,
        managerAnswers.managerEmail,
        managerAnswers.officeNumber
      )
      teamArray.push(manager);
      switch(managerAnswers.addTeammate) {
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
        default: 
          writeToFile('./dist/index.html', createTeam(teamArray))
      }
    });
};

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Manager's name!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's ID?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your manager's ID.")
            return false;
          }
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
        validate: email => {
          valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
          if (valid) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is your engineer's GitHub username?",
      },
      // calling for next employee
      {
        type: 'list',
        name: 'addTeammate',
        message: 'What type of team member would you like to add next?',
        choices: ['Engineer', 'Intern', "That completes my team!"],
      }
    ])
    .then((engineerAnswers) => {
      const engineer = new Engineer(
        engineerAnswers.engineerName,
        engineerAnswers.engineerId,
        engineerAnswers.engineerEmail,
        engineerAnswers.gitHub
      );
      teamArray.push(engineer);
      switch(engineerAnswers.addTeammate) {
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
        default:
          writeToFile('./dist/index.html', createTeam(teamArray))
      }
    });
};

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Manager's name!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's ID?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your manager's ID.")
            return false;
          }
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
        validate: email => {
          valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
          if (valid) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: "input",
        name: "school",
        message: "What school is your intern currently attending?",
      },
      // calling for next employee
      {
        type: 'list',
        name: 'addTeammate',
        message: 'What type of team member would you like to add next?',
        choices: ['Engineer', 'Intern', "That completes my team!"],
      }
    ])
    .then((internAnswers) => {
      const intern = new Intern(
        internAnswers.internName,
        internAnswers.internId,
        internAnswers.internEmail,
        internAnswers.school
      );
      teamArray.push(intern);
      switch(internAnswers.addTeammate) {
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
        default:
          writeToFile('./dist/index.html', createTeam(teamArray))
      }
  });
};

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      throw err;
    } else 
    console.log('Your team is now being generated!')
  });
};

// send to inquirer directory:
addManager()