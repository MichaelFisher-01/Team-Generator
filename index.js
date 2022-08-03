//Required Installs
const inquirer = require('inquirer');
const fs = require('fs');
//Required Libraries
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const writeHTML = require('./src/writeHTML');
const writeCSS = require('./src/writeCSS');

//Global Variabls
const allEmployees = [];

//CLI questions to start the program. Obtains the manager information.
const getData = () => {
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
//This loops through the employee questions as long as Y is entered to add employees.
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
				message: 'What school does this intern go too?',
				name: 'school',
				when(answers) {
					return answers.role === 'Intern';
				},
			},
			{
				type: 'confirm',
				message: 'Would you like to add an another employee?',
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
				// If we are done adding employees the nusing the formats from the src folder we will generate a brand new HTML and CSS file so we can display this information on a webpage.
			} else {
				console.log('Data Gathering Complete');

				const file1 = writeHTML(allEmployees);
				const file2 = writeCSS();

				const htmlFileName = './dist/index.html';
				fs.writeFile(htmlFileName, file1, (err) =>
					err ? console.log(err) : console.log('Html Generated Successfully')
				);

				const cssFileName = './dist/style.css';
				fs.writeFile(cssFileName, file2, (err) =>
					err
						? console.log('Error with CSS write.')
						: console.log('Html Generated Successfully')
				);
			}
		});
};

// Launch Program
getData();
