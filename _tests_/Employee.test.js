const Employee = require('../lib/Employee.js');

//Test for Employee
// Name, ID, Email, getName(), getId(), getEmail(), getRole()
//describe(name,fn) method - group together related tests
//https://github.com/facebook/jest/blob/main/examples/async/__tests__/user.test.js
//https://jestjs.io/docs/api#describename-fn

const employeeTest = new Employee('Dwight Schrute', 3, 'dschrute@paper.com', 'Employee')

describe('Employee', () => {
    it('provides a name', () => {
        expect(employeeTest.name).toEqual((expect.any(String)));
        expect(employeeTest.name.length).toBeGreaterThan(0);
    })
    it('provides an email', () => {
        expect(employeeTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has a work id', () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it('has a role', () => {
        expect(employeeTest.role).toBe('Employee')
    })

})