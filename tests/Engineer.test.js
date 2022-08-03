const Engineer = require('../lib/engineer.js');

const engineer = new Engineer(
	'Mike',
	'107',
	'mike@fakemail.com',
	'Michael-Fisher01'
);

test('Running getName should return the name Mike', () => {
	expect(engineer.getName()).toBe('Mike');
});

test('Running getId should return an employee id of 107', () => {
	expect(engineer.getId()).toBe('107');
});

test('Running getEmail should return mike@fakemail.com', () => {
	expect(engineer.getEmail()).toBe('mike@fakemail.com');
});

test('Running getGithub should return the gitHub user name of Michael-Fisher01', () => {
	expect(engineer.getGithub()).toBe('Michael-Fisher01');
});

test('Running getRole should return engineer for this class', () => {
	expect(engineer.getRole()).toBe('Engineer');
});
