const Engineer = require("../lib/engineer.js");

describe('Engineer', () => {
    it('Should return the object of the employee profile, add the github, and update the role', () => {
        const newEngineer = new Engineer("Rebecca",01,"rebecca@gmail.com","overtonr");
        expect(newEngineer.name).toEqual("Rebecca");
        expect(newEngineer.id).toEqual(01);
        expect(newEngineer.email).toEqual("rebecca@gmail.com");
        expect(newEngineer.getGithub()).toEqual("overtonr");
        expect(newEngineer.getRole()).toEqual("Engineer");
        
    });
});
