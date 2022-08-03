//Grabbing the Employee info
const Employee = require('./employee');
//ensuring Manager includes the constructor from Employee and the related functions.
//Updated role to return manager.
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}

	getOfficeNumber() {
		return this.officeNumber;
	}

	getRole() {
		return 'Manager';
	}
}

module.exports = Manager;
