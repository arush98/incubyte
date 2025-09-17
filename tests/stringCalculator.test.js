const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  test('single number returns its value', () => {
  expect(add("1")).toBe(1);
  expect(add("7")).toBe(7);
});
});
