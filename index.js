const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const allEmployees = [];

function init() {
  // creating function to call at the end of each questionair
  createTeam();
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
      .then(function (userInput) {
        switch (userInput.addEmployee) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
        }
      });
  }

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "Please input your manager's ID.",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is your manager's email?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is your manager's office number?",
        },
      ])
      .then((data) => {
        const manager = new Manager(
          data.managerName,
          data.managerId,
          data.managerEmail,
          data.officeNumber
        );
        allEmployees.push(manager);
        createTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's ID?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email?",
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
        allEmployees.push(engineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is your intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is your intern's ID?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email?",
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
        allEmployees.push(intern);
  });
  }
}

function buildHTML() {}

// send to inquirer directory:
// What do you want to do next? - add Engineer, add Intern, done adding employees
init();