const functions = require('./index');

test('Test if Add function adds 3 + 2 correctly', () => {
    expect( functions.add(3, 2) ).toBe(5);
});

test('Test if 2 + 2 NOT equal 5', () => {
    expect( functions.add(2, 2) ).not.toBe(5);
});

test('Test if returns null', () => {
    expect( functions.returnValue(null) ).toBeNull();
});