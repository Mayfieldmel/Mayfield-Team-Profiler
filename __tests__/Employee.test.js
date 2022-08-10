const Employee = require("../lib/Employee.js");

// class provided tests
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});

// practice writing tests
test("creates employee object", () => {
  const employee = new Employee("Dave", "89523", "dave@gmail.com");
  expect(employee.name).toBe("Dave");
  expect(employee.id).toBe("89523");
  expect(employee.email).toBe("dave@gmail.com");
});

test("gets employee's name", () => {
  const employee = new Employee("Dave", "89523", "dave@gmail.com");
  expect(employee.getName()).toBe("Dave");
});

test("gets employee's id", () => {
  const employee = new Employee("Dave", "89523", "dave@gmail.com");
  expect(employee.getId()).toBe("89523");
});

test("gets employee's email", () => {
  const employee = new Employee("Dave", "89523", "dave@gmail.com");
  expect(employee.getEmail()).toBe("dave@gmail.com");
});
test("gets employee's role", () => {
  const employee = new Employee("Dave", "89523", "dave@gmail.com");
  expect(employee.getRole()).toBe("Employee");
});
