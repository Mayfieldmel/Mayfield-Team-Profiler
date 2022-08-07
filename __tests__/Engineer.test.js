const Engineer = require("../lib/Engineer.js");

test('create engineer github property', () => {
    const engineer = new Engineer('Dave', '89523', 'dave@gmail.com', 'D-Dave')
    expect(engineer.github).toBe("D-Dave");
})