const Engineer = require('../lib/Engineer');

//Test for Engineer
// Name, ID, Email, getName(), getId(), getEmail(), getRole()
//gitHub, getGitHub(), getRole() to Return Engineer

const engineerTest = new Engineer('Jim Halpert', 2, 'jhalpert@paper.com', 'Engineer', 'BDJS0033');

describe('Engineer', () => {
    it('provides a name', () => {
        expect(engineerTest.name).toEqual((expect.any(String)));
        expect(engineerTest.name.length).toBeGreaterThan(0);
    })
    it('provides an email', () => {
        expect(engineerTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has a work id', () => {
        expect(engineerTest.id).toEqual(expect.any(Number))
    })

    it('has a role', () => {
        expect(engineerTest.role).toBe('Engineer')
    })

    it('has a GitHub', () => {
        expect(engineerTest.gitHub).toEqual(expect.any(String))
    })
})
