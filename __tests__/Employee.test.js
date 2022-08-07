
const { doesNotMatch } = require('assert');
const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Dave', '89523', 'dave@gmail.com');

    expect(employee.name).toBe("Dave");
    expect(employee.id).toBe("89523");
    expect(employee.email).toBe("dave@gmail.com");
});

test("gets employee's name", () => {
    const employee = new Employee('Dave', '89523', 'dave@gmail.com');

    expect(employee.getName()).toBe("Dave");
});

test("gets employee's id", () => {
    const employee = new Employee('Dave', '89523', 'dave@gmail.com');

    expect(employee.getId()).toBe("89523");;
});

test("gets employee's email", () => {
    const employee = new Employee('Dave', '89523', 'dave@gmail.com');

    expect(employee.getEmail()).toBe('dave@gmail.com');
});
// test("gets employee's name", () => {
//     const employee = new Employee('Dave', '89523', 'dave@gmail.com');

//     expect(employee.getName()).toBe("Dave");
// });



