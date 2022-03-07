//Write to file
const fs = require('fs');

//Inquirer package being called
const inquirer = require('inquirer');

//Team Package being called (Employee is Parent so no need to declare)
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// generating template
const pageTemplate = require("./src/page-template");

//empty array for team members
const teamMembers = [];

//Questions for user input (ReadMe/Portfolio Gen example)
//start with manager
const addManager = () => {

    console.log(`
=================
Manager Details
=================
`);

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the team Managers name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please provide Managers name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please verify your employee Id(Required)',
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Please provide your employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please provide your email:',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please provide a valid email!');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'office number',
                message: 'Please provide your managers office number:',
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log('Please enter your managers office number!');
                        return false;
                    }
                }
            },
        ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            console.log(manager);
        });
};

const addEmployee = () => {

    console.log(`
    =================
    Add a New Team Member
    ================= 
    `);

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Please choose your employers role',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please provide your Employee ID number:',
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Your Employee ID Number is required!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please provide your email address:',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter a valid email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please provide your gitHub Username:',
                when: (input) => input.role === "Engineer",
                validate: githubInput => {

                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please provide the github username!');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'school',
                message: 'What school do you attend?',
                when: (input) => input.role === "Intern",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please provide a school name!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
                default: false
            }
        ])
        .then(employeeInput => {

            let { name, id, email, role, github, school, confirmAddEmployee } = employeeInput;
            let employee;

            if (role === 'Engineer') {

                employee = new Engineer(name, id, email, github);
                console.log(employee);

            } else if (role === 'Intern') {

                employee = new Intern(name, id, email, school);
                console.log(employee);
            }

            teamMembers.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamMembers);
            } else {
                return teamMembers;
            }
        });
}
// Write file for HTML page 
const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Success! Your team profile has been generated! Check it out!")
        }
    })
};

//function to initiate and run
addManager()
.then(addEmployee)
.then(teamMembers => {
    return pageTemplate(teamMembers);
})
.then(generateHTML => {
    return writeFile(generateHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
  return copyFile();
})
.then(copyFileResponse => {
  console.log(copyFileResponse);
})
.catch(err => {
  console.log(err);
});