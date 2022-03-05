const Employee = require('../lib/Employee');

//Method inheritance with ES6 to Extend class and use super(); to reference parent object
//Doing this for all .js files

// Name, ID, Email, getName(), getId(), getEmail(), getRole()
//gitHub, getGitHub(), getRole() to Return Engineer

class Engineer extends Employee {
    constructor(name, id, email, role, gitHub) {
        //call parent constructor
        super(name, id, email, role)
        
        this.gitHub = gitHub;
    }
     getGitHub() {
        return `GitHub: ${this.gitHub}`
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;