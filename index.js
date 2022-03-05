//To Write File
const fs = require('fs');

//Inquirer package being called
const inquirer = require('inquirer');
const jest = require('jest');

//Team Package being called
// const Employee = require('./lib/Employee'); => REVIEW AS FILE NOT READING - Inheritance?
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const generatePage = require(./src/);
//const writeFile = require(./src/);

//~~~~~~ SET UP QUESTIONS~~~~//
//~~~~~~AMEND FUNCTIONS~~~~//
//~~~~~~ SET UP PAGE GENERATORS ~~~~~~~~~~//

//create empty Array
let myTeam = [];

// Questions for user input
inquirer.prompt([
    {
        type: 'text',
        name: 'Employee',
        message: 'Please state your name:',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please state your name!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'Role',
        message: 'Please indicate your role:',
        choices: ['Manager', 'Engineer', 'Employee', 'Intern'],
        validate: roleInput => {
            if (roleInput) {
                return true
            } else {
                console.log('Please indicate your role!');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: 'Please enter your Employee ID Number:',
        validate: idInput => {
            if (idInput) {
                return true
            } else {
                console.log('Your Employee ID Number is required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a valid email!');
                return false;
            }
        }
    },
])
//Starting questions for specific values
// .then(answers => {

//     if (role === "Manager") {
//         inquirer.prompt([{
//             type: 'input',
//             name: 'officeNum',
//             message: 'Please provide your office number:',
//             validate
//         }])
//     }
// }

// // Function to write file
// function writeToFile(fileName, data) {
//     fs.writeFile("./dist/generated-README.md", data, err => {
//         if (err) {
//             return console.log(err)
//         } else {
//             console.log("Your README has been generated!");
//         }
//     });
// };

// //Function to initialize
// function init() {

//     //Prompt to call inquirer
//     inquirer.prompt(questions)
//         .then(function(data) {
//             writeToFile("", generateMarkdown(data));
//             console.log(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }

// // Function call to initialize app
// init();