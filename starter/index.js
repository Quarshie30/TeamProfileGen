const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const render = require("./starter/src/page-template.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

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
];

function promptManager() {
    return inquirer.prompt(managerQuestions);
}

function promptEngineer() {
    return inquirer.prompt(engineerQuestions);
}

function promptIntern() {
    return inquirer.prompt(internQuestions);
}

function addManager(data) {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    team.push(manager);
    console.log("Manager added successfully!");
    menu();
}

function addEngineer(data) {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    team.push(engineer);
    console.log("Engineer added successfully!");
    menu();
}

function addIntern(data) {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    team.push(intern);
    console.log("Intern added successfully!");
    menu();
}

function renderTeam() {
    const html = render(team);
    fs.writeFile(outputPath, html, err => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Team HTML generated successfully! Check ${outputPath}`);
        }
    });
}

function menu() {
    inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "What you like to do?",
            choices: ["Add an Engineer", "Add an Intern", "Finish building the team"]
        }
    ]).then(answer => {
        switch (answer.option) {
            case "Add an Engineer":
                promptEngineer().then(addEngineer);
                break;
            case "Add an Intern":
                promptIntern().then(addIntern);
                break;
            case "Finish building the team":
                renderTeam();
                break;
        }
    });
}

console.log("Welcome to the Team Profile Generator!");

promptManager().then(addManager);
