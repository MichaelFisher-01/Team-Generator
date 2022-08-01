const inquirer = require('inquirer');

class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}

	getBasicInfo() {
		inquirer
			.prompt([
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
			.then((data) => {
				data.role = this.role;
				data.id = this.id;
				data.email = this.email;
			});
	}

	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return 'Employee';
	}
}

module.exports = Employee;
