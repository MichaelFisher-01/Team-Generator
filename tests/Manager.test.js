const Manager = require('../lib/manager.js');

const manager = new Manager('Mike', '107', 'mike@fakemail.com', '101');

test('Running getName should return the name of the manager', () => {
	expect(manager.getName()).toBe('Mike');
});

test('Running getId should return the the id of the manager', () => {
	expect(manager.getId()).toBe('107');
});

test("Running getEmail should return the manager's email", () => {
	expect(manager.getEmail()).toBe('mike@fakemail.com');
});

test('Running getOfficeNumber should return room number 101', () => {
	expect(manager.getOfficeNumber()).toBe('101');
});

test('Running getRole should return the manager role for this class', () => {
	expect(manager.getRole()).toBe('Manager');
});
