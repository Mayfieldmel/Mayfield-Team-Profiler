const Manager = require("../lib/Manager");

test('create office number property', () => {
    const manager = new Manager('Dave', '89523', 'dave@gmail.com', '302')

    expect(manager.officeNumber).toBe("302");
});

test("gets employee's role", () => {
    const manager = new Manager('Dave', '89523', 'dave@gmail.com', '302');

    expect(manager.getRole()).toBe("Manager");
});