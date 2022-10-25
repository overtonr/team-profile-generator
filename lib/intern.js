const fs = require('fs');
const inquirer = require('inquirer');
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
//menu option: add an engineer, intern, or finish building

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
        //result of the menu prompt should call a different method, depending on the choice 
        //addEngineer(), addIntern(), finishTeam();
        {
            type:"list",
            name: "menu",
            message:"Would you like to add an engineer, add an intern, or finish building the team?",
            choices: ["Add an engineer","Add an intern", "Finish building team"]
        },
    ])