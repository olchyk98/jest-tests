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

test('Test if returns undefined', () => {
    expect( functions.returnValue(undefined) ).toBeUndefined();
});

test('Test if it is falsy', () => {
    expect( functions.returnValue(false) ).toBeFalsy();
});

test('Check if the person is Oles Odynets', () => {
    expect(
        functions.returnValue({
            name: "Oles",
            surname: "Odynets"
        })
    ).toEqual({
        name: "Oles",
        surname: "Odynets"
    });
});

test('Should be under 16 years old', () => {
    expect( functions.returnValue(7) ).toBeLessThan(16); // WARNING: 16 [!]< 16
});

// /\d/ - decimal
test('There is no number in the a name', () => {
    expect( functions.returnValue("SuperHero_") ).not.toMatch(/\d/);
});

