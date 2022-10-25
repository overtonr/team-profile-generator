const Manager = require('../lib/manager.js');

describe('Manager', () => {
    it('Should return the object of the employee profile, add the office number, and update the role', () => {
        const newManager = new Manager("Rebecca",01,"rebecca@gmail.com",101);
        expect(newManager.name).toEqual("Rebecca");
        expect(newManager.id).toEqual(01);
        expect(newManager.email).toEqual("rebecca@gmail.com");
        expect(newManager.getOfficeNum()).toEqual(101);
        expect(newManager.getRole()).toEqual("Manager");
        
    });
});
