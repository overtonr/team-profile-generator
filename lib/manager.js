const fs = require('fs');
const inquirer = require('inquirer');


//extend from the employee methods and classes
//will also include
//  officeNumber
//getRole == returns "Manager"

// let manager = new Manager(name, id, email)
// //pass values from input

//store values in an array for completed profiles
//push completed object to an array : use array for all employees
//declared on a global scope

//manager inquirer promp is finished
//allows the user to enter an intern profile, an engineer profile, or quit
// calls either the engineer or intern prompt;; or quit


// var employeeProf = [manager, intern1, engineer1,]
// manager
// this.name

//prompted to enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
//menu option: add an engineer, intern, or finish building

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
        //result of the menu prompt should call a different method, depending on the choice 
        //addEngineer(), addIntern(), finishTeam();
        {
            type:"list",
            name: "menu",
            message:"Would you like to add an engineer, add an intern, or finish building the team?",
            choices: ["Add an engineer","Add an intern", "Finish building team"]
        },
    ])