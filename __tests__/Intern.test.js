const Intern = require("../lib/Intern");

test("create intern object", () => {
    const intern = new Intern('Dave', '89523', 'dave@gmail.com', "UNC");
    expect(intern.name).toBe("Dave");
    expect(intern.id).toBe("89523");
    expect(intern.email).toBe("dave@gmail.com");
    expect(intern.school).toBe("UNC");
})