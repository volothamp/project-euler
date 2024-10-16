import { getFibonacciSequence } from '../../src/problems/prob-2';
import { getLargestPalindromeProduct } from '../../src/problems/prob-4';
import * as p6 from '../../src/problems/prob-6';
import { getNthPrime } from '../../src/problems/prob-7';
import { getLargestConsecutiveProduct } from '../../src/problems/prob-8';
import { calculateProblem9 } from '../../src/problems/prob-9';
import { getNumberGrid, getLargestProductInGrid } from '../../src/problems/prob-11';

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

  describe('Problem 7', () => {
    test('5th prime number should be 11', () => {
      expect(getNthPrime(5)).toBe(11);
    });
    test('20th prime number should be 71', () => {
      expect(getNthPrime(20)).toBe(71);
    });
  });

  describe('Problem 8', () => {
    test('largest product of 3 adjacent numbers in [1234567890] should be 504', () => {
      expect(getLargestConsecutiveProduct([1,2,3,4,5,6,7,8,9,0], 3)).toBe(504);
    });
  });

  describe('Problem 9', () => {
    test('test pythagorean triplet of 12 should be 60 [3,4,5]', () => {
      // object returned should contain the triplet and the product
      expect(calculateProblem9(12)).toEqual({ triplet: [3, 4, 5], product: 60 });
    });
    test('test pythagorean triplet with impossible sum', () => {
      expect(calculateProblem9(100)).toEqual({ triplet: [], product: NaN });
    });
  });

  describe('Problem 11', () => {
    describe('getNumberGrid()', () => {
      test('data of 1 2 3 / 4 5 6 / 7 8 9 should return 2d array of numbers', () => {
        const data = '1 2 3\n4 5 6\n7 8 9';
        expect(getNumberGrid(data)).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
      });

      test('same test but with leading 0s', () => {
        const data = '01 02 03\n04 05 06\n07 08 09';
        expect(getNumberGrid(data)).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
      });
    });

    describe('getLargestProductInGrid()', () => {
      test('Test diagonal NE->SW (should be 6561)', () => {
        const grid = [
          [1,2,3,9],
          [1,2,9,4],
          [1,9,3,4],
          [9,2,3,4]
        ];
        expect(getLargestProductInGrid(grid)).toBe(6561);
      });
      test('Test diagonal NW->SE (should be 6561)', () => {
        const grid = [
          [9,2,3,1],
          [1,9,3,4],
          [1,2,9,4],
          [1,2,3,9]
        ];
        expect(getLargestProductInGrid(grid)).toBe(6561);
      });
      test('Test horizontal (should be 6561)', () => {
        const grid = [
          [1,2,3,4],
          [1,2,3,4],
          [9,9,9,9],
          [1,2,3,4]
        ];
        expect(getLargestProductInGrid(grid)).toBe(6561);
      });
      test('Test vertical (should be 6561)', () => {
        const grid = [
          [1,2,9,4],
          [1,2,9,4],
          [1,2,9,4],
          [1,2,9,4]
        ];
        expect(getLargestProductInGrid(grid)).toBe(6561);
      });
    });
  });

});
