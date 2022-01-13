const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const allEmployees = [];

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the manager's name?"
            },
            {
                type: 'input',
                name: 'managerId',
                message: "Please input your manager's ID."
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is your manager's email?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is your manager's office number?"
            }
        ])
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber)

            allEmployees.push(manager);

            directory();
        })
}

function directory() {

}

function addEngineer() {}

function addIntern() {}

function buildHTML() {}

// send to inquirer directory:
// What do you want to do next? - add Engineer, add Intern, done adding employees

addManager();