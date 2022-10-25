const employeeJS = require('../lib/employee');
//can an object be created from the class
//every property assigned to class: return;
//every method in the class
//mock data returns: test passed

describe('employeeJS',() => {
    it('Should return the object of the employee profile', () => {
        const newEmployee = new Employee("Rebecca",01,"rebecca@gmail.com");
        expect(newEmployee.getName()).toEqual("Rebecca");
        expect(newEmployee.getId()).toEqual(01);
        expect(newEmployee.getEmail()).toEqual("rebecca@gmail.com");
        expect(newEmployee.getRole()).toEqual("Employee");
        
    });
    //it('Should throw an error if no input is provided', () => {
    //is error for empty string required?
});