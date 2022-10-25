const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./employee');

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
//WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//menu option: add an engineer, intern, or finish building

//extend from the employee methods and classes
//will also include
//  github = username
//getGithub()
//getRole == returns "Engineer"


inquirer
    .prompt([
        {
            type:"input",
            name: "enginerr-name",
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
        //result of the menu prompt should call a different method, depending on the choice 
        //addEngineer(), addIntern(), finishTeam();
        {
            type:"list",
            name: "menu",
            message:"Would you like to add an engineer, add an intern, or finish building the team?",
            choices: ["Add an engineer","Add an intern", "Finish building team"]
        },
    ])