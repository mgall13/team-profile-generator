const Employee = require('../lib/Employee');

// testing class
test('using new employee returns object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

// constructor 
test('testing name constructor arguement', () => {
    const name = 'kyro'
    const employee = new Employee(name)
    expect(employee.name).toBe(name);
});

test('testing id constructor arguement', () => {
    // using number we don't have to use quotes
    const id = 123
    const employee = new Employee('kyro', id)
    expect(employee.id).toBe(id)
});

test('testing email const arguement', () => {
    const email = 'kyro@gmail.com'
    const employee = new Employee('kyro', 123, email)
    expect(employee.email).toBe(email)
});

// methods
test('testing getName method', () => {
    const name = 'kyro'
    const employee = new Employee(name)
    expect(employee.getName()).toBe(name);
});

test('testing getId method', () => {
    const id = 123
    const employee = new Employee('kyro', id)
    expect(employee.getId()).toBe(id);
});

test('testing getEmail method', () => {
    const email = 'kyro@gmail.com'
    const employee = new Employee('kyro', 123, email)
    expect(employee.getEmail()).toBe(email)
});

test('testing getRole method', () => {
    const role = 'Employee'
    const employee = new Employee('kyro', 123, 'kyro@gmail')
    expect(employee.getRole()).toBe(role)
});