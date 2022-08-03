//Grabbing Employee information
const Employee = require('./employee');
// Ensuring Engineer gets the constructor from Employee and the functions.\
//Updated role to return Engineer
class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return 'Engineer';
	}
}

module.exports = Engineer;
