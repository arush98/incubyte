const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  // Test 1: Empty string
  test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  // Test 2: Single numbers
  test('returns the number itself when input is "1"', () => {
    expect(add("1")).toBe(1);
  });

  test('returns the number itself when input is "7"', () => {
    expect(add("7")).toBe(7);
  });

  // Test 3: Two comma-separated numbers
  test('sums two comma-separated numbers "1,5"', () => {
    expect(add("1,5")).toBe(6);
  });

  test('sums two comma-separated numbers "2,3"', () => {
    expect(add("2,3")).toBe(5);
  });

  // Test 4: Support newlines + commas
  test('handles mixed comma and newline "1\\n2,3"', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('handles only newlines "4\\n5\\n6"', () => {
    expect(add("4\n5\n6")).toBe(15);
  });

  test('handles mix with commas and newlines "7,8\\n9"', () => {
    expect(add("7,8\n9")).toBe(24);
  });
  // Test 5: Custom delimiter
  test('supports custom delimiter ";"', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('supports custom delimiter "|"', () => {
    expect(add("//|\n4|5|6")).toBe(15);
  });

  test('supports custom delimiter "-"', () => {
    expect(add("//-\n7-8-9")).toBe(24);
  });

  // Test 6: Negative numbers not allowed

  test('throws an error when input contains a single negative number', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  test('throws an error listing all negative numbers if multiple are present', () => {
    expect(() => add("2,-4,3,-5")).toThrow("negative numbers not allowed: -4,-5");
  });
});
