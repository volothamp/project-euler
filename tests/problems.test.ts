import { getSumOfMultiples } from '../src/problems/prob-1';
import { getFibonacciSequenceSum } from '../src/problems/prob-2';

describe('Problems', () => {
  describe('Problem 1', () => {
    describe('getSumOfMultiples()', () => {
      test('range 1-9 with multiples 3 and 5 should return 23', () => {
        expect(getSumOfMultiples(1, 10, [3, 5])).toBe(23);
      });
    });
  });

  describe('Problem 2', () => {
    describe('getFibonacciSequenceSum()', () => {
      test('first: 1, second: 2, max: 10, multiple: 2... should return 44', () => {
        expect(getFibonacciSequenceSum(1, 2, 100, 2)).toBe(44);
      });
    });
  });
});
