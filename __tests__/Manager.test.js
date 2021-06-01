const Manager = require("../lib/Manager");

// name, email, id, role, officenumber for manager.

const managerTest = new Manager(
  "Thu.L",
  "thujtn2019@gmail.com",
  1,
  "Manager",
  101
);

describe("Manager", () => {
  it("has a name", () => {
    expect(managerTest.name).toEqual(expect.any(String));
    expect(managerTest.name.length).toBeGreaterThan(2);
  });
  it("has an email address", () => {
    expect(managerTest.email).toEqual(expect.stringContaining("@"));
  });
  it("has an id that is a number", () => {
    expect(managerTest.id).toEqual(expect.any(Number));
  });
  it("has a role of manager", () => {
    expect(managerTest.role).tobe("Manager");
  });

  it("has an office number", () => {
    keys = Object.keys(managerTest);
    optionKey = keys[4];
    expect(optionKey).tobe("office");
    expect(managerTest.office).toEqual(expect.enay(String));
  });
});
