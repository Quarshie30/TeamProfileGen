const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


const team = [];

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the manager's name:",
    },
    {
        type: "input",
        name: "id",
        message: "Enter the manager's employee ID:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter the manager's email:",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:",
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
    },
    {
        type: "input",
        name: "id",
        message: "Enter the engineer's employee ID:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username:",
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
    },
    {
        type: "input",
        name: "id",
        message: "Enter the intern's employee ID:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's email:",
    },
    {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
    }
];    function promptManager() {
    return inquirer.default.prompt(managerQuestions);
}

function promptEngineer() {
    return inquirer.default.prompt(engineerQuestions);
}

function promptIntern() {
    return inquirer.default.prompt(internQuestions);
}


console.log("Welcome to the Team Profile Generator!");

promptManager().then(addManager);

;