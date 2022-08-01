//Required Installs
const inquirer = require('inquirer');
//Required Libraries
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//Global Variabls
const allManagers = [];
const allEngineers = [];
const allInterns = [];
const addEmployee = true;
//Aquiring Input

inquirer
	.prompt([
		{
			type: 'list',
			message: 'What type of employee are we making?',
			choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
			name: 'employeeGen',
		},
	])
	.then((data) => {
		if (data.employeeGen === 'Manager') {
			let manager1 = new Manager();
			manager1.getBasicInfo();
		} else if (data.employeeGen === 'Engineer') {
			let engineer1 = new Engineer();

			engineer1.getBasicInfo();
			engineer1.getEngineerInfo();

			console.log(engineer1);
		} else if (data.employeeGen === 'Intern') {
			let intern1 = new Intern();

			intern1.getBasicInfo();
			intern1.getInternInfo();

			console.log(intern1);
		} else if (data.employeeGen === 'Exit') {
			addEmployee === false;
		}
	});
