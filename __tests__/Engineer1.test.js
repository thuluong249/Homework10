const Engineer = require("../lib/Engineer");

//name, email, id, role and github usre name for Engineer.

const engineerTest = new Engineer(
  "Hai-Nam",
  "hainam2018@gmail.com",
  3,
  "Engineer",
  "Hainam2018"
);

describe("Engineer", () => {
  it("has a name", () => {
    expect(engineerTest.name).toEqual(expect.any(String));
    expect(engineerTest.name.length).toBeGraterThan(2);
  });
  it("has an email address", () => {
    expect(engineerTest.email).toEqual(expect.StringContaining("@"));
  });
  it("has an id that is a number", () => {
    expect(engineerTest.id).toEqual(expect.any(Number));
  });
  it("has a role of engineer", () => {
    expect(engineerTest.role).toBe("Engineer");
  });
  it("has a github user name", () => {
    key = Object.keys(engineerTest);
    optionKey = keys[2];
    expect(optionKey).toBe("github");
    expect(engineerTest.github).toEqual(expect.any(String));
  });
});
