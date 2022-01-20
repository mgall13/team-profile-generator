const Engineer = require('../lib/Engineer');

// testing extends employee
test('testing constructor', () => {
    const name = 'deedee'
    const id = 79772
    const email = 'goatsrule@gmail.com'
    const engineer = new Engineer(name, id, email);
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email)
});

// testing github class
test('testing github class', () => {
    const github = 'mgall13'
    const engineer = new Engineer('deedee', 79772, 'goatsrule@gmail.com', github);
    expect(engineer.github).toBe(github);
});


// testing methods
test('testing getGithub method', () => {
    const github = 'mgall13'
    const engineer = new Engineer('deedee', 79772, 'goatsrule@gmail.com', github);
    expect(engineer.getGithub()).toBe(github)
});

test('testing getRole method', () => {
    const role = 'Engineer'
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe(role);
});