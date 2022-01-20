const Intern = require('../lib/Intern');

// testing employee super
test('testing constructor', () => {
    const name = 'ryan'
    const id = 1998
    const email = 'cowboys98@gmail.com'
    const intern = new Intern(name, id, email);
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
});

// testing school constructor
test('testing school constructor', () => {
    const school = 'PHS'
    const intern = new Intern('ryan', 1998, 'cowboys98@gmail.com', school);
    expect(intern.school).toBe(school);
});

// testing methods
test('testing getSchool method', () => {
    const school = 'PHS'
    const intern = new Intern('ryan', 1998, 'cowboys98@gmail.com', school)
    expect(intern.getSchool()).toBe(school);
});

test('testing getRole method', () => {
    const role = 'Intern'
    const intern = new Intern('ryan', 1998, 'cowboys98@gmail.com', 'PHS')
    expect(intern.getRole()).toBe(role);
});