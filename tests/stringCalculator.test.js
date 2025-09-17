const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  test('two comma-separated numbers are summed', () => {
  expect(add("1,5")).toBe(6);
  expect(add("2,3")).toBe(5);
});
});
