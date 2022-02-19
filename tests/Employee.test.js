// require employee file to test
const Employee = require("./../src/Employee");

describe("Employee class test", () => {
  // instantiation
  it("can be instantiated", () => {
    const employee = new Employee("Employee Name", 123, "test@test.com");
    expect(employee).toBeInstanceOf(Employee);
  });

  // Tests for constructor
  // set name
  it("can set a name property in the constructor", () => {
    const name = "Employee Name";
    const employee = new Employee(name, 123, "test@test.com");
    expect(employee.name).toBe(name);
  });

  // set email
  it("can set the employee email in the constructor", () => {
    const email = "test@test.com";
    const employee = new Employee("Employee Name", "123", email);
    expect(employee.email).toBe(email);
  });

  // set id
  it("can set an id property in the constructor", () => {
    const id = 123;
    const employee = new Employee("Employee Name", id, "test@test.com");
    expect(employee.id).toBe(id);
  });

  // Tests for functions
  // get name function
  it("can get the employee name by calling getName()", () => {
    const truth = "Employee Name";
    const employee = new Employee(truth, 123, "test@test.com");
    const result = employee.getName();
    expect(result).toBe(truth);
  });

  // get email function
  it("can get the employee email by calling getEmail()", () => {
    const truth = "test@test.com";
    const employee = new Employee("Employee Name", 123, truth);
    const result = employee.getEmail();
    expect(result).toBe(truth);
  });

  // get id function
  it("can get the employee id by calling getId()", () => {
    const truth = "123";
    const employee = new Employee("Employee Name", truth, "test@test.com");
    const result = employee.getId();
    expect(result).toBe(truth);
  });

  // get role function
  it("can get the employee role by calling getRole()", () => {
    const truth = "Employee";
    const employee = new Employee("Employee Name", 123, "test@test.com");
    const result = employee.getRole();
    expect(result).toBe(truth);
  });
});
