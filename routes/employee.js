const express = require("express");
const inquirer = require("inquirer");


const employee = express();

//Function for viewing all the employees
function viewAllEmployees () {
    console.log("Viewing employees\n");
    const query = `SELECT * FROM department`;

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log("Employees viewed!");

        firstPrompt();
    });
}

module.exports = employee;