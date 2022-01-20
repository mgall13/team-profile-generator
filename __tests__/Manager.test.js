const Manager = require('../lib/Manager');

// testing super constructor
test('testing super constructor arguement', () => {
    const name = 'mario'
    const id = 9898
    const email = 'mg1@gmail.com'
    const manager = new Manager(name, id, email);
    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
});

test('testing officeNumber constructor', () => {
    const officeNum = 2022
    const manager = new Manager('mario', 9898, 'mg1@gmail.com', officeNum);
    expect(manager.officeNumber).toBe(officeNum);
});

// testing methods
test('testing getOfficeNumber method', () => {
    const officeNum = 2022
    const manager = new Manager('mario', 9898, 'mg1@gmail.com', officeNum);
    expect(manager.getOfficeNumber()).toBe(officeNum);
});

test('testing getRole method', () => {
    const role = 'Manager'
    const manager = new Manager('mario', 9898, 'mg1@gmail.com', 2022);
    expect(manager.getRole()).toBe(role);
});