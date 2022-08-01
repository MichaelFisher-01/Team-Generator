const inquirer = require('inquirer');
const Employee = require('./employee');

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}

	getInternInfo() {
		inquirer
			.prompt([
				{
					type: 'input',
					message: 'What school does this intern attend?',
					name: 'school',
				},
			])
			.then((data) => {
				data.school = this.school;
			});
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}
}

module.exports = Intern;
