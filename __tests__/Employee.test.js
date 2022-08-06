const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Dave', '89523', 'dave@gmail.com');

    expect(employee.name).toBe("Dave");
    expect(employee.id).toBe("89523");
    expect(employee.email).toBe("dave@gmail.com");
});

