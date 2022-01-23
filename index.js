const generateHTML = require('./src/generateHTML')
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArray = [];

// creating function to call at the end of each questionair
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee will you be adding?",
        name: "addEmployee",
        choices: ["Manager", "Engineer", "Intern", "Team is complete!"],
      },
    ])
    .then((userInput) => {
      switch (userInput.addEmployee) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "Team is complete!":
          return console.log(teamArray);
      }
    });
};

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
    ])
    .then((data) => {
      const manager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.officeNumber
      );
      teamArray.push(manager);
      createTeam();
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
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.engineerName,
        data.engineerId,
        data.engineerEmail,
        data.gitHub
      );
      teamArray.push(engineer);
      createTeam();
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
    ])
    .then((data) => {
      const intern = new Intern(
        data.internName,
        data.internId,
        data.internEmail,
        data.school
      );
      teamArray.push(intern);
      createTeam();
  });
};

const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Success! Your Team Profile is now being generated!');
    }
  });
};

// send to inquirer directory:
// What do you want to do next? - add Engineer, add Intern, done adding employees
createTeam();