module.exports = {
    // The first prompt when the app starts
    firstPrompt: {
		type: "list",
		name: "task",
		message: "What would you like to do?",
		choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Exit",
		],
	},
    //Propmt for adding the employee
    insertEmployee: (departmentArray, roleArray, managerArray) => [
		{
			name: "firstName",
			type: "input",
			message: "Enter employee's first name:",
		},
		{
			name: "lastName",
			type: "input",
			message: "Enter employee's last name:",
		},
		{
			name: "department",
			type: "list",
			message: "Choose employee's department",
			choices: departmentArray,
		},
		{
			name: "role",
			type: "list",
			message: "What is the title of their position",
			choices: roleArray,
		},
		{
			name: "manager",
			type: "list",
			message: "Choose the manager of this employee:",
			choices: managerArray,
		},
	],
    //Prompt for updating an employee
    updateRole: (employees, job) => [
		{
			name: "update",
			type: "list",
			message: "Choose the employee whose role is to be updated:",
			choices: employees,
		},
		{
			name: "role",
			type: "list",
			message: "Choose employee's job position",
			choices: job,
		},
	],
    //Prompt for adding a role
    insertRole: (departmentChoices) => [
		{
			type: "input",
			name: "roleTitle",
			message: "Role title?",
		},
		{
			type: "input",
			name: "roleSalary",
			message: "Role Salary",
		},
		{
			type: "list",
			name: "departmentId",
			message: "Department?",
			choices: departmentChoices,
		},
	],
    //Prompt for adding a department
    insertDepartment: {
		name: "department",
		type: "input",
		message: "What is the name of the new department?",
	},

};