//Required Installs
const inquirer = require('inquirer');
//Required Libraries
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Enginer = require('./lib/engineer');
const Intern = require('./lib/intern');
//Global Variabls
const allManagers = [];
const allEngineers = [];
const allInterns = [];

//Aquiring Input
inquirer
	.prompt([
		{
			type: 'input',
			message: 'Who manages this team?',
			name: 'name',
		},
		{
			type: 'input',
			message: 'What is the managers employee id?',
			name: 'id',
		},
		{
			type: 'input',
			message: 'What is the managers email address?',
			name: 'email',
		},
		{
			type: 'input',
			message: "What is the manager's office number?",
			name: 'officeNumber',
		},
	])
	.then((response) => {
		const manager = new Manager(
			response.name,
			response.id,
			response.email,
			response.officeNumber
		);
		allManagers.push(manager);
		console.log(allManagers);
	});

while (addEmployees) {
	inquirer
		.prompt([
			{
				type: 'confirm',
				message: 'Would you like to add more employees?',
				name: 'continue',
			},
		])
		.then((response) => {
			if (response.continue) {
				inquirer
					.prompt([
						{
							type: 'list',
							message: 'What role does this employee have?',
							choices: ['Engineer', 'Intern'],
							name: 'role',
						},
						{
							type: 'input',
							message: "What is this employee's name?",
							name: 'name',
						},
						{
							type: 'input',
							message: 'What is thier employee id?',
							name: 'id',
						},
						{
							type: 'input',
							message: "What is this employee's email address?",
							name: 'email',
						},
					])
					.then((response) => {
						if (response.role === 'Engineer') {
							inquirer.prompt([
								{
									type: 'input',
									message: 'What is the Engineers github?',
									name: 'github',
								},
							]);
						} else {
						}
					});
			}
		});
}
