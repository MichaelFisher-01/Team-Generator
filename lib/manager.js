const inquirer = require('inquirer');
const Employee = require('./employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}

	getManagerInfo() {
		inquirer
			.prompt([
				{
					type: 'input',
					message: 'What is this managers office number?',
					name: 'officeNumber',
				},
			])
			.then((data) => {
				data.officeNumber = this.officeNumber;
			});
	}

	getOfficeNumber() {
		return this.officeNumber;
	}

	getRole() {
		return 'Manager';
	}
}

module.exports = Manager;
