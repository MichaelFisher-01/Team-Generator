//Required Installs
const inquirer = require('inquirer');
const fs = require('fs');
//Required Libraries
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//Global Variabls
const allEmployees = [];

//Global Functions
const getManagerData = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				message: "What is the manager's name for this team?",
				name: 'name',
			},
			{
				type: 'input',
				message: `What is the manager's email address?`,
				name: 'email',
			},
			{
				type: 'input',
				message: `What is the manager's employee id?`,
				name: 'id',
			},
			{
				type: 'input',
				message: `What is the manager's office number?`,
				name: 'officeNumber',
			},
			{
				type: 'confirm',
				message: 'Does this manager have employees?',
				name: 'addEmployee',
			},
		])
		.then((answers) => {
			let manager = new Manager(
				answers.name,
				answers.id,
				answers.email,
				answers.officeNumber
			);
			allEmployees.push(manager);
			if (answers.addEmployee === true) {
				getEmployeeData();
			}
		});
};

const getEmployeeData = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				message: "What is this employee's name?",
				name: 'name',
			},
			{
				type: 'input',
				message: "What is this employee's email address?",
				name: 'email',
			},
			{
				type: 'input',
				message: "What is this empoylee's id?",
				name: 'id',
			},
			{
				type: 'list',
				message: 'What role does this employee have?',
				choices: ['Engineer', 'Intern'],
				name: 'role',
			},
			{
				type: 'input',
				message: "What is this engineer's github username?",
				name: 'github',
				when(answers) {
					return answers.role === 'Engineer';
				},
			},
			{
				type: 'input',
				message: 'What school does the intern go too?',
				name: 'school',
				when(answers) {
					return answers.role === 'Intern';
				},
			},
			{
				type: 'confirm',
				message: 'Would you like to add an employee?',
				name: 'addEmployee',
				default: true,
			},
		])
		.then((answers) => {
			if (answers.role === 'Engineer') {
				let engineer = new Engineer(
					answers.name,
					answers.id,
					answers.email,
					answers.github
				);
				allEmployees.push(engineer);
			} else {
				let intern = new Intern(
					answers.name,
					answers.id,
					answers.email,
					answers.school
				);
				allEmployees.push(intern);
			}
			if (answers.addEmployee) {
				getEmployeeData();
			} else {
				console.log(allEmployees);
				allEmployees.forEach((employee) => {
					console.log('Activating For Each Loop!');
					console.log(employee.getName());
					console.log(employee.getId());
					console.log(employee.getEmail());
					console.log(employee.getRole());
				});
			}
		});
};

// Launch Program
getManagerData();
