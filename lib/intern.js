const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./employee.js');

//Extends from the parent class (employee)
//Adds school and updates role

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email),
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;

// inquirer
//     .prompt([
//         {
//             type:"input",
//             name: "intern-name",
//             message:"What is this intern's name?",
//         },
//         {
//             type:"input",
//             name: "intern-email",
//             message:"What is this intern's email?",
//         },
//         {
//             type:"input",
//             name: "school",
//             message:"What school is this intern attending?",
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