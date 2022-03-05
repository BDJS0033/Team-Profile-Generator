const Manager = require('../lib/Manager');

//Test for Manager
// Name, ID, Email, getName(), getId(), getEmail(), getRole()
//officeNumber, getRole() to Return Manager


const managerTest = new Manager('Michael Scott', 1, 'mscott@paper.com', 'Manager', '843-633-423');

describe('Manager', () => {
    it('provides a name', () => {
        expect(managerTest.name).toEqual((expect.any(String)));
        expect(managerTest.name.length).toBeGreaterThan(0);
    })
    it('provides an email', () => {
        expect(managerTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has a work id', () => {
        expect(managerTest.id).toEqual(expect.any(Number))
    })

    it('has a role', () => {
        expect(managerTest.role).toBe('Manager')
    })

    it('office number', () => {
        expect(managerTest.officeNumber).toEqual(expect.any(String))
    })
})








