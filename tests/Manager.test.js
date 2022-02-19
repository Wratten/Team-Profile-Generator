// require manager file to test
const Manager = require("./../src/manager");

describe("manager class test", () => {
  // instantiation
  it("can be instantiated", () => {
    const manager = new Manager("Manager Name", 123, "test@test.com");
    expect(manager).toBeInstanceOf(Manager);
  });

  // Tests for constructor
  // set name
  it("can set a name property in the constructor", () => {
    const name = "manager Name";
    const manager = new Manager(name, 123, "test@test.com");
    expect(manager.name).toBe(name);
  });

  // set email
  it("can set the manager email in the constructor", () => {
    const email = "test@test.com";
    const manager = new Manager("manager Name", "123", email);
    expect(manager.email).toBe(email);
  });

  // set id
  it("can set an id property in the constructor", () => {
    const id = 123;
    const manager = new Manager("manager Name", id, "test@test.com");
    expect(manager.id).toBe(id);
  });

  // Tests for functions
  // get name function
  it("can get the manager name by calling getName()", () => {
    const truth = "manager Name";
    const manager = new Manager(truth, 123, "test@test.com");
    const result = manager.getName();
    expect(result).toBe(truth);
  });

  // get email function
  it("can get the manager email by calling getEmail()", () => {
    const truth = "test@test.com";
    const manager = new Manager("manager Name", 123, truth);
    const result = manager.getEmail();
    expect(result).toBe(truth);
  });

  // get id function
  it("can get the manager id by calling getId()", () => {
    const truth = "123";
    const manager = new Manager("manager Name", truth, "test@test.com");
    const result = manager.getId();
    expect(result).toBe(truth);
  });

  // get role function
  it("can get the manager role by calling getRole()", () => {
    const truth = "Manager";
    const manager = new Manager("manager Name", 123, "test@test.com");
    const result = manager.getRole();
    expect(result).toBe(truth);
  });
});
