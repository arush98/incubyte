const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  test('any amount of comma-separated numbers are summed', () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("1,2,3,4,5")).toBe(15);
  expect(add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
});
});
