const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./employee.js');

//Extends from the parent class (employee)
//Adds office number and updates role

class Manager extends Employee {
    constructor(name, id, email, officeNum){
        super(name, id, email),
        this.officeNum = officeNum;
    }
    getOfficeNum(){
        return this.officeNum;
    }
    getRole(){
        return "Manager";
    }
    generateProfCard(){
        return `<div class="card rounded col-sm-8 col-xl-3 col-lg-4 p-4 m-4" style="width: 25rem;">
    <div class="card-header"><strong>
    manager ☕︎: ${this.name}
    </strong></div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answer.id}</li>
      <li class="list-group-item">email: <a href = mailto:${answer.email}>${answer.email}</a></li>
      <li class="list-group-item">office #: ${answer.office-num}</li>
    </ul>
  </div>`;
    }

}
module.exports = Manager;


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

// inquirer
//     .prompt([
//         {
//             type:"input",
//             name: "manager-name",
//             message:"What is the team manager's name?",
//         },
//         {
//             type:"input",
//             name: "manager-email",
//             message:"What is the team manager's email?",
//         },
//         {
//             type:"input",
//             name: "office",
//             message:"What is the team manager's office number?",
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