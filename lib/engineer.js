const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./employee.js');

//Extends from the parent class (employee)
//Adds github and updates role

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email),
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports = Engineer;


// inquirer
//     .prompt([
//         {
//             type:"input",
//             name: "engineer-name",
//             message:"What is this engineer's name?",
//         },
//         {
//             type:"input",
//             name: "engineer-email",
//             message:"What is this engineer's email?",
//         },
//         {
//             type:"input",
//             name: "school",
//             message:"What is this engineer's GitHub username?",
//         },
//         //result of the menu prompt should call a different method, depending on the choice 
//         //addEngineer(), addIntern(), finishTeam();
//         {
//             type:"list",
//             name: "menu",
//             message:"Would you like to add an engineer, add an intern, or finish building the team?",
//             choices: ["Add an engineer","Add an intern", "Finish building team"]
//         },
//     ])