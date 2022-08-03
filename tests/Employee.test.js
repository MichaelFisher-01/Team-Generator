const Employee = require('../lib/employee.js');

const employee = new Employee('Mike', '107', 'mike@fakemail.com');

test('Running getName should return the name Mike', () => {
	expect(employee.getName()).toBe('Mike');
});

test('Running getId should return an employee if of 107', () => {
	expect(employee.getId()).toBe('107');
});

test('Running getEmail should return mike@fakemail.com', () => {
	expect(employee.getEmail()).toBe('mike@fakemail.com');
});

test('Running getRole should return employee for this class', () => {
	expect(employee.getRole()).toBe('Employee');
});
