const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  // Step 1: Empty string
  test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  // Step 2: Single numbers
  test('returns the number itself when input is "1"', () => {
    expect(add("1")).toBe(1);
  });

  test('returns the number itself when input is "7"', () => {
    expect(add("7")).toBe(7);
  });

  // Step 3: Two comma-separated numbers
  test('sums two comma-separated numbers "1,5"', () => {
    expect(add("1,5")).toBe(6);
  });

  test('sums two comma-separated numbers "2,3"', () => {
    expect(add("2,3")).toBe(5);
  });

  // Step 4: Support newlines + commas
  test('handles mixed comma and newline "1\\n2,3"', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('handles only newlines "4\\n5\\n6"', () => {
    expect(add("4\n5\n6")).toBe(15);
  });

  test('handles mix with commas and newlines "7,8\\n9"', () => {
    expect(add("7,8\n9")).toBe(24);
  });
});
