const Employee = require('../lib/Employee');

// Name, ID, Email, getName(), getId(), getEmail(), getRole()
//school, getSchool(), getRole() Return Intern)

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        //call parent constructor
        super(name, id, email, role)
        
        this.school = school;
    }
     getSchool() {
        return `School: ${this.school}`
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;
