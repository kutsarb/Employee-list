const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamMembers = []
const arrayId = []
function appMenu() {
    function createTeam() {
        //inquirer to ask which type of employee you want to create and runs the relevant function
        inquirer.prompt([
            {
                type: "list",
                message: "What type of team member would you like to add?",
                name: "newMember",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager",
                    "No new employees"
                ]
            }
        ]).then(answer => {
            switch(answer.newMember) {
                case "Engineer": 
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                case "Manager":
                    createManager();
                    break;
                case "No new employees":
                    buildTeam();
                    break;
            }
        })
    };
    function createManager() {

        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your manager's name?",
                validate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid name"
            },
            {
                type: "input",
                name: "id",
                message: "What is your employee's id?",
                validatevalidate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid id"
            },
            {
                type: "input",
                name: "email",
                message: "What is your employee's email?",
                validatevalidate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid email"
            },
            {
                type: "input",
                name: "office",
                message: "What is your manager's office number?",
                validatevalidate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid number"
            },
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
            teamMembers.push(manager);
            arrayId.push(answers.managerId);
            createTeam();
        })
    };

    function createIntern() {

        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your intern's name?",
                validate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid name"
            },
            {
                type: "input",
                name: "id",
                message: "What is your employee's id?",
                validatevalidate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid id"
            },
            {
                type: "input",
                name: "email",
                message: "What is your employee's email?",
                validatevalidate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid email"
            },
            {
                type: "input",
                name: "school",
                message: "What school does your intern attend?",
                validatevalidate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid school"
            },
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            teamMembers.push(intern);
            arrayId.push(answers.id);
            createTeam();
        })
    };

    function createEngineer() {

        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your engineer's name?",
                validate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid name"
            },
            {
                type: "input",
                name: "id",
                message: "What is your employee's id?",
                validatevalidate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid id"
            },
            {
                type: "input",
                name: "email",
                message: "What is your employee's email?",
                validatevalidate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid email"
            },
            {
                type: "input",
                name: "github",
                message: "What is your engineer's github?",
                validatevalidate: answer => {
                    if (answer != "")
                        return true
                },
                return: "Please enter a valid link"
            },

        ]).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            teamMembers.push(engineer);
            arrayId.push(answers.id);
            createTeam();
        })
    }
    function buildTeam() {
        //create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8")

    }
    
    createTeam();

}
appMenu()

