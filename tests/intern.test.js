const Intern = require("../lib/intern");

describe('Intern', () => {
    it('Should return the object of the employee profile, add the school, and update the role', () => {
        const newIntern = new Intern("Rebecca",01,"rebecca@gmail.com","UC Berkeley");
        expect(newIntern.name).toEqual("Rebecca");
        expect(newIntern.id).toEqual(01);
        expect(newIntern.email).toEqual("rebecca@gmail.com");
        expect(newIntern.getSchool()).toEqual("UC Berekeley");
        expect(newIntern.getRole()).toEqual("Intern");
        
    });
});