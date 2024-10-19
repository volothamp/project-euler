import * as problems from '../../src/problems/.';

describe('Problem Specific Functions', () => {
  describe('Problem 2', () => {
    describe('getFibonacciSequence()', () => {
      test('first: 1, second: 2, max: 10', () => {
        expect(problems.p2.getFibonacciSequence(1, 2, 100)).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
      });
      test('first: 0, second: 1, max: 8', () => {
        expect(problems.p2.getFibonacciSequence(0, 1, 8)).toEqual([0, 1, 1, 2, 3, 5, 8]);
      });
    });
  });

  describe('Problem 4', () => {
    describe('getLargestPalindromeProduct()', () => {
      test('min: 10, max: 99', () => {
        expect(problems.p4.getLargestPalindromeProduct(10, 99)).toBe(9009);
      });
    });
  });

  describe('Problem 6', () => {
    test('sum of squares of 1-10 should be 385', () => {
      expect(problems.p6.getSumOfSquares([1,2,3,4,5,6,7,8,9,10])).toBe(385);
    });
    test('square of sum of 1-10 should be 3025', () => {
      expect(problems.p6.getSquareOfSum([1,2,3,4,5,6,7,8,9,10])).toBe(3025);
    });
    test('difference between sum of squares and square of sums of 1-10 should be 2640', () => {
      expect(problems.p6.problem6([1,2,3,4,5,6,7,8,9,10])).toBe(2640);
    });
  });

  describe('Problem 7', () => {
    test('5th prime number should be 11', () => {
      expect(problems.p7.getNthPrime(5)).toBe(11);
    });
    test('20th prime number should be 71', () => {
      expect(problems.p7.getNthPrime(20)).toBe(71);
    });
  });

  describe('Problem 8', () => {
    test('largest product of 3 adjacent numbers in [1234567890] should be 504', () => {
      expect(problems.p8.getLargestConsecutiveProduct([1,2,3,4,5,6,7,8,9,0], 3)).toBe(504);
    });
  });

  describe('Problem 9', () => {
    test('test pythagorean triplet of 12 should be 60 [3,4,5]', () => {
      // object returned should contain the triplet and the product
      expect(problems.p9.calculateProblem9(12)).toEqual({ triplet: [3, 4, 5], product: 60 });
    });
    test('test pythagorean triplet with impossible sum', () => {
      expect(problems.p9.calculateProblem9(100)).toEqual({ triplet: [], product: NaN });
    });
  });

  describe('Problem 11', () => {
    describe('getLargestProductInGrid()', () => {
      test('Test diagonal NE->SW (should be 6561)', () => {
        const grid = [
          [1,2,3,9],
          [1,2,9,4],
          [1,9,3,4],
          [9,2,3,4]
        ];
        expect(problems.p11.getLargestProductInGrid(grid)).toBe(6561);
      });
      test('Test diagonal NW->SE (should be 6561)', () => {
        const grid = [
          [9,2,3,1],
          [1,9,3,4],
          [1,2,9,4],
          [1,2,3,9]
        ];
        expect(problems.p11.getLargestProductInGrid(grid)).toBe(6561);
      });
      test('Test horizontal (should be 6561)', () => {
        const grid = [
          [1,2,3,4],
          [1,2,3,4],
          [9,9,9,9],
          [1,2,3,4]
        ];
        expect(problems.p11.getLargestProductInGrid(grid)).toBe(6561);
      });
      test('Test vertical (should be 6561)', () => {
        const grid = [
          [1,2,9,4],
          [1,2,9,4],
          [1,2,9,4],
          [1,2,9,4]
        ];
        expect(problems.p11.getLargestProductInGrid(grid)).toBe(6561);
      });
    });
  });

  describe('Problem 12', () => {
    describe('getNthTriangleNumber()', () => {
      test('5th triangle number should be 15', () => {
        expect(problems.p12.getNthTriangleNumber(5)).toBe(15);
      });
    });
    describe('getAllFactors()', () => {
      test('factors of 28 should be [1, 2, 4, 7, 14, 28]', () => {
        expect(problems.p12.getAllFactors(28)).toEqual([1, 2, 4, 7, 14, 28]);
      });
    });
    describe('getTriangleNumberWithOverNFactors()', () => {
      test('triangle number with over 5 factors should be 28', () => {
        expect(problems.p12.getTriangleNumberWithOverNFactors(5)).toBe(28);
      });
    });
  });

  describe('Problem 13', () => {
    describe('addGrid()', () => {
      test('add grid of numebers', () => {
        const grid = [
          [5,6,7],
          [5,6,7],
          [5,6,7],
          [5,6,7]
        ];
        expect(problems.p13.addGrid(grid)).toEqual([2,2,6,8]);
      });

      test('grid with rows of different lengths throws error', () => {
        const grid = [
          [5,6,7],
          [5,6,7,8],
          [5,6,7],
          [5,6,7]
        ];
        expect(() => problems.p13.addGrid(grid)).toThrowError('All rows must be the same length');
      });
    });
  });
});
