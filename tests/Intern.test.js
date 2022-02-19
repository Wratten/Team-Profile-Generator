// require intern file to test
const Intern = require("./../src/Intern");

describe("Intern class test", () => {
  // instantiation
  it("can be instantiated", () => {
    const intern = new Intern("Intern Name", 123, "test@test.com");
    expect(intern).toBeInstanceOf(Intern);
  });

  // Tests for constructor
  // set name
  it("can set a name property in the constructor", () => {
    const name = "Intern Name";
    const intern = new Intern(name, 123, "test@test.com");
    expect(intern.name).toBe(name);
  });

  // set email
  it("can set the Intern email in the constructor", () => {
    const email = "test@test.com";
    const intern = new Intern("Intern Name", "123", email);
    expect(intern.email).toBe(email);
  });

  // set id
  it("can set an id property in the constructor", () => {
    const id = 123;
    const intern = new Intern("Intern Name", id, "test@test.com");
    expect(intern.id).toBe(id);
  });

  // Tests for functions
  // get name function
  it("can get the Intern name by calling getName()", () => {
    const truth = "Intern Name";
    const intern = new Intern(truth, 123, "test@test.com");
    const result = intern.getName();
    expect(result).toBe(truth);
  });

  // get email function
  it("can get the intern email by calling getEmail()", () => {
    const truth = "test@test.com";
    const intern = new Intern("intern Name", 123, truth);
    const result = intern.getEmail();
    expect(result).toBe(truth);
  });

  // get id function
  it("can get the intern id by calling getId()", () => {
    const truth = "123";
    const intern = new Intern("intern Name", truth, "test@test.com");
    const result = intern.getId();
    expect(result).toBe(truth);
  });

  // get role function
  it("can get the intern role by calling getRole()", () => {
    const truth = "Intern";
    const intern = new Intern("intern Name", 123, "test@test.com");
    const result = intern.getRole();
    expect(result).toBe(truth);
  });
});
