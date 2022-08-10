const Intern = require("../lib/Intern");

// class provided tests
test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});


// practice writing tests
test("create intern object", () => {
    const intern = new Intern('Dave', '89523', 'dave@gmail.com', "UNC");
    expect(intern.name).toBe("Dave");
    expect(intern.id).toBe("89523");
    expect(intern.email).toBe("dave@gmail.com");
    expect(intern.school).toBe("UNC");
})

test("get intern's github username", () => {
    const intern = new Intern('Dave', '89523', 'dave@gmail.com', 'UNC');
    expect(intern.getSchool()).toBe('UNC');
})

test("get intern's github username", () => {
    const intern = new Intern('Dave', '89523', 'dave@gmail.com', 'UNC');
    expect(intern.getRole()).toBe('Intern');
})