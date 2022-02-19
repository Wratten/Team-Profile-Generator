// require engineer file to test
const Engineer = require("./../src/Engineer");

describe("Engineer class test", () => {
  // instantiation
  it("can be instantiated", () => {
    const engineer = new Engineer("Engineer Name", 123, "test@test.com");
    expect(engineer).toBeInstanceOf(Engineer);
  });

  // Tests for constructor
  // set name
  it("can set a name property in the constructor", () => {
    const name = "engineer Name";
    const engineer = new Engineer(name, 123, "test@test.com");
    expect(engineer.name).toBe(name);
  });

  // set email
  it("can set the engineer email in the constructor", () => {
    const email = "test@test.com";
    const engineer = new Engineer("engineer Name", "123", email);
    expect(engineer.email).toBe(email);
  });

  // set id
  it("can set an id property in the constructor", () => {
    const id = 123;
    const engineer = new Engineer("engineer Name", id, "test@test.com");
    expect(engineer.id).toBe(id);
  });

  // Tests for functions
  // get name function
  it("can get the engineer name by calling getName()", () => {
    const truth = "engineer Name";
    const engineer = new Engineer(truth, 123, "test@test.com");
    const result = engineer.getName();
    expect(result).toBe(truth);
  });

  // get email function
  it("can get the engineer email by calling getEmail()", () => {
    const truth = "test@test.com";
    const engineer = new Engineer("engineer Name", 123, truth);
    const result = engineer.getEmail();
    expect(result).toBe(truth);
  });

  // get id function
  it("can get the engineer id by calling getId()", () => {
    const truth = "123";
    const engineer = new Engineer("engineer Name", truth, "test@test.com");
    const result = engineer.getId();
    expect(result).toBe(truth);
  });

  // get role function
  it("can get the engineer role by calling getRole()", () => {
    const truth = "Engineer";
    const engineer = new Engineer("engineer Name", 123, "test@test.com");
    const result = engineer.getRole();
    expect(result).toBe(truth);
  });
});
