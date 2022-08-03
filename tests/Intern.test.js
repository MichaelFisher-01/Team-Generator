const Intern = require('../lib/intern.js');

const intern = new Intern(
	'Mike',
	'107',
	'mike@fakemail.com',
	'University Of Denver'
);

test('Running getName should return the name Mike', () => {
	expect(intern.getName()).toBe('Mike');
});

test('Running getId should return an employee id of 107', () => {
	expect(intern.getId()).toBe('107');
});

test('Running getEmail should return mike@fakemail.com', () => {
	expect(intern.getEmail()).toBe('mike@fakemail.com');
});

test('Running getSchool should return University Of Denver', () => {
	expect(intern.getSchool()).toBe('University Of Denver');
});

test('Running getRole should return intern for this class', () => {
	expect(intern.getRole()).toBe('Intern');
});
