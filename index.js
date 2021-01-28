const inquirer = require("inquirer");
const fs = require('fs');
const { Manager, Engineer, Intern } = require('./libs/Employee');
const { listenerCount } = require("process");
var manager;
var otherEmployees = [];

function buildHtml() {
    var employeeHtml = "";
    for (var i = 0; i < otherEmployees.length; i++) {
        employeeHtml += `<div class = "card">
            <div class = "card-header"> 
                <h4>${otherEmployees[i].getName()}</h4>
                <h4> ${otherEmployees[i].getRole()}</h4>
            </div>
            <div class = "main-section">
                <div class = "info-area">
                    <p>id: ${otherEmployees[i].id}</p>
                </div>
                <div class = "info-area">
                    <p>email: ${otherEmployees[i].email}</p>
    
                </div>
                <div class = "info-area">
                    <p>${otherEmployees[i].getRole() ==="Engineer" ? `GitHub: ${otherEmployees[i].github}` : `School: ${otherEmployees[i].school}` }</p>
                </div>
            </div>
        </div>`;

    }
    var html = `<!DOCTYPE html>
    <html>
        <head>
            <title>Team Information</title>
            <link rel="stylesheet" href = "./style.css">
        </head>
    
        <body>
            <header>
                <h1> My Team </h1>
            </header>
            <div class= "new-section"> 
                <div>
                    Manager
                    ${manager.getName()}
                </div>
                ${employeeHtml}
            </div>
        </body>
    </html>`;
    fs.writeFile('./dist/index.html', html, function() {});
}

function askForEngineer() {
    inquirer.prompt([{ type: "input", name: "name", message: "What is the engineer's name?" },
            { type: "input", name: "github", message: "What is the engineer's github user name?" }
        ])
        .then(function(data) {
            var engineer = new Engineer(data.name, "id", "email", data.github);
            otherEmployees.push(engineer);
            askForAnotherEmployee();
        })
}

function askForIntern() {
    inquirer.prompt([{ type: "input", name: "name", message: "What is the intern's name?" },
            { type: "input", name: "school", message: "What is the intern's school?" }
        ])
        .then(function(data) {
            var intern = new Intern(data.name, "id", "email", data.school);
            otherEmployees.push(intern);
            askForAnotherEmployee();
        })
}

function askForAnotherEmployee() {
    var choices = ["Add an  engineer", "Add an intern", "Finished building my team"];
    inquirer.prompt([{
            type: "list",
            name: "selection",
            message: "which option do you want to choose?",
            choices: choices
        }])
        .then(function(data) {
            var selection = data.selection;

            if (selection === choices[0]) {
                askForEngineer();
            } else if (selection === choices[1]) {
                askForIntern();
            } else {
                buildHtml();
            }
        });
}
inquirer.prompt([{ type: "input", name: "name", message: "What is the manager's name?" }])
    .then(function(data) {
        manager = new Manager(data.name, 'abc', 'email', 'office number');
        askForAnotherEmployee();
    })