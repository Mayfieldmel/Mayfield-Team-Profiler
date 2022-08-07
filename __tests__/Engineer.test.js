const Engineer = require("../lib/Engineer.js");

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