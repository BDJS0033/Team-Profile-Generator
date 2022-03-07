// Name, ID, Email, getName(), getId(), getEmail(), getRole()

//creating Class for Employee with constructors - Parent class
const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
        return `Name: ${this.name};`
    }
    getId() {
        return `Id: ${this.id};`
    }
    getEmail() {
        return `Email: ${this.email};`
    }
    getRole() {
        return `Role: ${this.role}`
    }
}

module.exports = Employee;