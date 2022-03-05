const Employee = require('../lib/Employee');

// Name, ID, Email, getName(), getId(), getEmail(), getRole()
//officeNumber, getRole() to Return Manager

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        //call parent constructor
        super(name, id, email, role)
        
        this.officeNumber = officeNumber;
    }
     getOfficeNumber() {
        return `OfficeNumber: ${this.officeNumber}`
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;
