const Manager = require("../lib/Manager");

test('create manager object', () => {
    const manager = new Manager('Dave', '89523', 'dave@gmail.com', '302');
    expect(manager.name).toBe("Dave");
    expect(manager.id).toBe("89523");
    expect(manager.email).toBe("dave@gmail.com");
    expect(manager.officeNumber).toBe("302");
});

test("gets employee's role", () => {
    const manager = new Manager('Dave', '89523', 'dave@gmail.com', '302');
    expect(manager.getRole()).toBe("Manager");
});