const inquirer = require("inquirer");
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

//need to link inquirer prompts from all employees : so that when node is ran through this file, user can answer the prompts
const managerQs = (
    inquirer
    .prompt([
        {
            type:"input",
            name: "manager-name",
            message:"What is the team manager's name?",
        },
        {
            type:"input",
            name: "manager-email",
            message:"What is the team manager's email?",
        },
        {
            type:"input",
            name: "office",
            message:"What is the team manager's office number?",
        },
        {
        //List option that allows users to select an option
            type:"list",
            name: "menu",
            message:"Would you like to add an engineer, add an intern, or finish building the team?",
            choices: ["Add an engineer","Add an intern", "Finish building team"]
        },
    ])
);

const engineerQs = (
    inquirer
    .prompt([
        {
            type:"input",
            name: "engineer-name",
            message:"What is this engineer's name?",
        },
        {
            type:"input",
            name: "engineer-email",
            message:"What is this engineer's email?",
        },
        {
            type:"input",
            name: "school",
            message:"What is this engineer's GitHub username?",
        },
        {
            type:"list",
            name: "menu",
            message:"Would you like to add an engineer, add an intern, or finish building the team?",
            choices: ["Add an engineer","Add an intern", "Finish building team"]
        },
    ])
);

const internQs = (
    inquirer
    .prompt([
        {
            type:"input",
            name: "intern-name",
            message:"What is this intern's name?",
        },
        {
            type:"input",
            name: "intern-email",
            message:"What is this intern's email?",
        },
        {
            type:"input",
            name: "school",
            message:"What school is this intern attending?",
        },
        {
            type:"list",
            name: "menu",
            message:"Would you like to add an engineer, add an intern, or finish building the team?",
            choices: ["Add an engineer","Add an intern", "Finish building team"]
        },
    ])
)



function managerBuild(){
//function calls package populating with the questions specific for the manager
    inquirer.prompt(managerQs).then(answers => {
//constructs a new object with the responses from the prompt
    const managerObj = new Manager(response.name,);
//new object is pushed to the array
    employeeObjs.push(managerObj);
//if function: determines what comes next depending on selection from menu list 
    if(response.menu === "Add an engineer"){
        engineerBuild();
    } else if(response.menu === "Add an intern"){
        internBuild();
//finish build option selected: generate HTML
    } else (completeTeam())
    })
};

function engineerBuild(){
    inquirer.prompt(engineerQs).then(answers => {
    const engineerObj = new Engineer(response.name,);
    employeeObjs.push(engineerObj);
    if(response.menu === "Add an engineer"){
        engineerBuild();
    } else if(response.menu === "Add an intern"){
        internBuild();
    } else (completeTeam())
    })
};

function internBuild(){
    inquirer.prompt(internQs).then(answers => {
    const internObj = new Intern(response.name,);
    employeeObjs.push(internObj);
    if(response.menu === "Add an engineer"){
        engineerBuild();
    } if(response.menu === "Add an intern"){
        internBuild();
    } else (completeTeam())
    })
};

function completeTeam(); //called when user selects option to complete team profile

var employeeObjs = [];
//need an empty array where constructed objects can be pushed
//array later referenced when generating HTML
//different array for each type of employee?

function init(){
    //should start with manager inquirer prompts
    managerBuild()
};

init();