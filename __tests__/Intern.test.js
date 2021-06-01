const Intern = require("../lib/Intern");

// name, email, id, role, school for Intern.

const internTest = new Intern(
  "Bethany",
  "beth123@gmail.com",
  5,
  "Intern",
  "UCONN"
);

describe("Intern", () => {
  it("has a name", () => {
    expect(internTest.name).toEqual(expect.any(String));
    expect(internTest.name.length).toBeGreaterThan(2);
  });
  it("has an email address", () => {
    expect(internTest.email).toEqual(expect.stringContaining("@"));
  });
  it("has an id that is a number", () => {
    expect(internTest.id).toEqual(expect.any(Number));
  });
  it("has a role of intern", () => {
    expect(internTest.role).toBe("Intern");
  });
  it("has a school name", () => {
    keys = Object.keys(internTest);
    optionKey = keys[3];
    expect(optionKey).tobe("school");
    expect(internTest.school).toEqual(expect.any(String));
  });
});
