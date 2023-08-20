const reverseString = require("./homework_17.6.1");

describe("Test for reverseString function", () => {
  it("Test the word 'Monkey'", () => {
    const result = reverseString("Monkey");
    expect(result).toBe("yeknoM");
  });
});
