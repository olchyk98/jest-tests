const functions = require('./index');

test('Test if Add function adds 3 + 2 correctly', () => {
    expect( functions.add(3, 2) ).toBe(5);
});