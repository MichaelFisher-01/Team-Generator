const inquirer = require('inquirer');

class Employee {
	constructor() {}

	generateEmployee() {
		inquirer.prompt([
			{
				type: 'input',
				message: 'Who is the manager of this team?',
				name: 'managerName',
			},
			{
				type: 'input',
				message: "What will this employee's id be?",
				name: 'employeeId',
			},
			{
				type: 'input',
				message: "What is this employee's email address?",
				name: 'employeeEmail',
			},
		]);
	}
	role() {
		return employee;
	}
}
