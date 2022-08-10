const Engineer = require("../lib/Engineer.js");

// class provided tests
test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});


// practice writing tests
test('create engineer object', () => {
    const engineer = new Engineer('Dave', '89523', 'dave@gmail.com', 'D-Dave');
    expect(engineer.name).toBe("Dave");
    expect(engineer.id).toBe("89523");
    expect(engineer.email).toBe("dave@gmail.com");
    expect(engineer.github).toBe("D-Dave");
})

test("get engineer's github username", () => {
    const engineer = new Engineer('Dave', '89523', 'dave@gmail.com', 'D-Dave');
    expect(engineer.getGithub()).toBe('D-Dave');
})

test("get engineer's role", () => {
    const engineer = new Engineer('Dave', '89523', 'dave@gmail.com', 'D-Dave');
    expect(engineer.getRole()).toBe('Engineer');
})