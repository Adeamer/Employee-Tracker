const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

//Importing route files
const department = require("./routes/department");
const employee = require("./routes/employee");
const index = require("./routes/index");
const role = require("./routes/role");

//initiating the express package and creating the port.
const PORT = process.env.PORT || 3001;
const app = express();

//Parsing the data in json and url form format
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Creating the connection to the database using the msql package.
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "employee_db"
    },
    console.log(`Connected to the employee_db database.`)
);

//Displays the title in the terminal once the server is run.
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log(`
    ╔═══╗─────╔╗──────────────╔═╗╔═╗
    ║╔══╝─────║║──────────────║║╚╝║║
    ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
    ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
    ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
    ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
    ───────║║──────╔═╝║─────────────────────╔═╝║
    ───────╚╝──────╚══╝─────────────────────╚══╝`)
    // runs the app
    firstPrompt();
});

//Function for the first prompt in the app starts
function firstPrompt() {
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "Would you like to?",
        choices: [
            "View all Employees",
            "Add Employee",
            "Update Employee role",
            "View all roles",
            "Add role",
            "View all departments",
            "Add department",
            "End"
        ]
    })//This then function will take the user to the appropiete function based off the choice they pick in the prompt.
    .then(function ({ task }) {
        switch (task) {
            case "View all Employees":
                viewAllEmployees();
                break;
        
            case "Add Employee":
                addEmployee();
                break;

            case "Update Employee role":
                updateEmployeeRole();
                break;

            case "View all roles":
                viewAllRoles();
                break;

            case "Add role":
                addRole();
                break;

            case "View all departments":
                viewAllDepartments();
                break;

            case "Add department":
                addDepartment();
                break;

            default: "End";
                connection.end();
                break;
        }
    });
}



app.use((req, res) =>{
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})