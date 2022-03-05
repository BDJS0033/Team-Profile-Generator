const Intern = require('../lib/Intern');

//Test for Intern
// Name, ID, Email, getName(), getId(), getEmail(), getRole()
//school, getSchool(), getRole() Return Intern)

const internTest = new Intern('Ryan Howard', 4, 'rhoward@paper.com', 'Scott`s Tots University');

describe('Engineer', () => {
    it('provides a name', () => {
        expect(internTest.name).toEqual((expect.any(String)));
        expect(internTest.name.length).toBeGreaterThan(0);
    })
    it('provides an email', () => {
        expect(internTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has a work id', () => {
        expect(internTest.id).toEqual(expect.any(Number))
    })

    it('has a role', () => {
        expect(internTest.role).toBe('Engineer')
    })

    it('still in school', () => {
        expect(internTest.school).toEqual(expect.any(String))
    })
})






