const inquirer = require('inquirer');
const Employee = require('./employee');

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}

	getEngineerInfo() {
		inquirer.prompt([
			{
				type: 'input',
				message: 'What is this engineers github username?',
				name: 'githubUser',
			},
		]);
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return 'Engineer';
	}
}

module.exports = Engineer;
