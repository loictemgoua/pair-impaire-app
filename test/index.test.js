const isEven = require('../index');

test('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
});

test('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
});

test('should throw an error if input is not a number', () => {
    expect(() => isEven('a')).toThrow('Input must be a number');
});
