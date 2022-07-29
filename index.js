const inquirer = require('inquirer');
const Employee = require('./lib/employee');

inquirer
	.prompt([
		{
			type: 'input',
			message: "What is this employee's name?",
			name: 'name',
		},
		{
			type: 'input',
			message: 'What will the employee id be?',
			name: 'id',
		},
		{
			type: 'input',
			message: "What is this employee's email address?",
			name: 'email',
		},
	])
	.then((response) => {
		const employee = new Employee(response.name, response.id, response.email);
		console.log(employee);
	});
