import { getFibonacciSequence } from '../../src/problems/prob-2';
import { getLargestPalindromeProduct } from '../../src/problems/prob-4';
import * as p6 from '../../src/problems/prob-6';

describe('Problem Specific Functions', () => {
  describe('Problem 2', () => {
    describe('getFibonacciSequence()', () => {
      test('first: 1, second: 2, max: 10', () => {
        expect(getFibonacciSequence(1, 2, 100)).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
      });
      test('first: 0, second: 1, max: 8', () => {
        expect(getFibonacciSequence(0, 1, 8)).toEqual([0, 1, 1, 2, 3, 5, 8]);
      });
    });
  });

  describe('Problem 4', () => {
    describe('getLargestPalindromeProduct()', () => {
      test('min: 10, max: 99', () => {
        expect(getLargestPalindromeProduct(10, 99)).toBe(9009);
      });
    });
  });

  describe('Problem 6', () => {
    test('sum of squares of 1-10 should be 385', () => {
      expect(p6.getSumOfSquares([1,2,3,4,5,6,7,8,9,10])).toBe(385);
    });
    test('square of sum of 1-10 should be 3025', () => {
      expect(p6.getSquareOfSum([1,2,3,4,5,6,7,8,9,10])).toBe(3025);
    });
    test('difference between sum of squares and square of sums of 1-10 should be 2640', () => {
      expect(p6.problem6([1,2,3,4,5,6,7,8,9,10])).toBe(2640);
    });
  });
});
