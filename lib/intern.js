//Grabbing information from employee
const Employee = require('./employee');
//Ensuring Intern has the constructor from Employee and the functions needed.
// Updating the role to return Intern instead of employee.
class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}
}

module.exports = Intern;
