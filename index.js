const fs = require("fs");
const inquirer = require("inquirer");

const generateHtml = require("./src/html/Generate-HTML");

const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const Manager = require("./src/Manager");

let employees = [];

function prompt() {
  return (
    inquirer
      .prompt([
        // ask what team member to add
        // manager, engineer, intern
        {
          type: "list",
          message: "What role would you like to add??",
          name: "role",
          choices: ["Manager", "Engineer", "Intern"],
        },

        // name
        {
          type: "input",
          message: "What is the employees name?",
          name: "name",
        },

        // email
        {
          type: "input",
          name: "email",
          message: "What is the employees email?",
        },

        // id
        {
          type: "input",
          name: "id",
          message: "What is the employees ID?",
        },

        // special questions based on role
        // manager
        {
          type: "input",
          name: "officeNumber",
          message: "What is the Mangers office number?",
          when: (answers) => answers.role === "Manager",
        },
        // engineer
        {
          type: "input",
          name: "github",
          message: "What is the Engineers github?",
          when: (answers) => answers.role === "Engineer",
        },
        // intern
        {
          type: "input",
          name: "school",
          message: "What is the Interns school?",
          when: (answers) => answers.role === "Intern",
        },

        // do you want to add another member?
        {
          type: "confirm",
          name: "addAnother",
          message: "Would you like to add another employee?",
        },
      ])
      // after the questions have been answered and the loop was closed
      .then((answers) => {
        // create new employee

        // if it's a manager
        if (answers.role === "Manager") {
          employees.push(
            // create the card with the info from answers
            new Manager(
              answers.name,
              answers.id,
              answers.email,
              answers.officeNumber
            )
          );
        }

        // if it's an engineer
        if (answers.role === "Engineer") {
          employees.push(
            // create the card with the info from answers
            new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.github
            )
          );
        }

        // if it's an Intern
        if (answers.role === "Intern") {
          employees.push(
            // create the card with the info from answers
            new Intern(answers.name, answers.id, answers.email, answers.school)
          );
        }

        // ask if another employee is to be added
        if (answers.addAnother) {
          // if yes
          // rerun the question set
          return prompt();
        } else {
          // if no
          // generate html based on the members added
          const html = generateHtml(employees);

          fs.writeFileSync(__dirname + "/dist/output.html", html, "utf-8");

          process.exit(0);
        }
      })
  );
}

prompt();
