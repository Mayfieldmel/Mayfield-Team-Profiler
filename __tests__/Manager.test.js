const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// class provided tests
test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

// practice writing tests
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

test("gets employee's office number", () => {
    const manager = new Manager('Dave', '89523', 'dave@gmail.com', '302');
    expect(manager.getOfficeNumber()).toBe("302");
});