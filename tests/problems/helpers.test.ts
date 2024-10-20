import * as helpers from '../../src/problems/helpers';

describe('Problem Helpers', () => {
  describe('getSumOfMultiples()', () => {
    test('range 1-6 with multiples 2 should return 12', () => {
      expect(helpers.getSumOfMultiples([1,2,3,4,5,6], [2])).toBe(12);
    });
  });

  describe('getMultiples() w/out inclusive flag', () => { 
    test('range 1-10 with multiples 3 and 5 should return [3,5,6,9]', () => {
      expect(helpers.getMultiples(1, 10, [3, 5])).toEqual([3, 5, 6, 9]);
    });
    test('range 1-10 with multiples 2 (as array) should return [2,4,6,8]', () => {
      expect(helpers.getMultiples(1, 10, [2])).toEqual([2, 4, 6, 8]);
    });
    test('range 1-10 with multiples 2 (as number) should return [2,4,6,8]', () => {
      expect(helpers.getMultiples(1, 10, 2)).toEqual([2, 4, 6, 8]);
    });
  });

  describe('getMultiples() w/ inclusive flag', () => { 
    test('range 1-10 with multiples 3 and 5 should return [3,5,6,9,10]', () => {
      expect(helpers.getMultiples(1, 10, [3, 5], true)).toEqual([3, 5, 6, 9, 10]);
    });
    test('range 1-10 with multiples 2 (as array) should return [2,4,6,8,10]', () => {
      expect(helpers.getMultiples(1, 10, [2], true)).toEqual([2, 4, 6, 8, 10]);
    });
    test('range 1-10 with multiples 2 (as number) should return [2,4,6,8,10]', () => {
      expect(helpers.getMultiples(1, 10, 2, true)).toEqual([2, 4, 6, 8, 10]);
    });
  });

  describe('getPrimeFactors()', () => {
    test('factors of 13159 should be [5,7,13,29]', () => {
      expect(helpers.getPrimeFactors(13195)).toEqual([5, 7, 13, 29]);
    });
    test('facotrs of a prime number 17 should be [17]', () => {
      expect(helpers.getPrimeFactors(17)).toEqual([17]);
    });
    test('factors of 1 should be []', () => {
      expect(helpers.getPrimeFactors(1)).toEqual([]);
    });
    test('factors of even: 16, should be [2,2,2,2]', () => {
      expect(helpers.getPrimeFactors(16)).toEqual([2, 2, 2, 2]);
    });
    test('factors of 0 should be []', () => {
      expect(helpers.getPrimeFactors(0)).toEqual([]);
    });
  });

  describe('isPalindrome()', () => {
    test('121 is a palindrome', () => {
      expect(helpers.isPalindrome(121)).toBe(true);
    });
    test('123 is not a palindrome', () => {
      expect(helpers.isPalindrome(123)).toBe(false);
    });
    test('12321 is a palindrome', () => {
      expect(helpers.isPalindrome(12321)).toBe(true);
    });
    test('wow is a palindrome', () => {
      expect(helpers.isPalindrome('wow')).toBe(true);
    });
    test('hello is not a palindrome', () => {
      expect(helpers.isPalindrome('hello')).toBe(false);  
    });
    test('palindrom with spaces, with false flag (a man a plan a canal panama)', () => {
      expect(helpers.isPalindrome('a man a plan a canal panama')).toBe(false);
    });
    test('palindrom with spaces, with true flag (a man a plan a canal panama)', () => {
      expect(helpers.isPalindrome('a man a plan a canal panama', true)).toBe(true);
    });
  });

  describe('generateLinearSequence()', () => {
    test('generate 5 numbers starting at 1 with increment 1, using defaults', () => {
      expect(helpers.generateLinearSequence({count: 5})).toEqual([1, 2, 3, 4, 5]);
    });
    test('generate 5 numbers starting at 1 with increment 1, using default start', () => {
      expect(helpers.generateLinearSequence({count: 5, increment: 1})).toEqual([1, 2, 3, 4, 5]);
    });
    test('generate 5 numbers starting at 10 with increment 1, using default incrememnt', () => {
      expect(helpers.generateLinearSequence({count: 5, start: 10})).toEqual([10, 11, 12, 13, 14]);
    });
    test('generate 5 numbers starting at 10 with increment 2', () => {
      expect(helpers.generateLinearSequence({count: 5, start: 10, increment: 2})).toEqual([10, 12, 14, 16, 18]);
    });
  });

  describe('getLCM()', () => {
    test('LCM of 3, 5, 7 should be 105', () => {
      expect(helpers.getLCM([3, 5, 7])).toBe(105);
    });
    test('LCM of 2, 3, 4 should be 12', () => {
      expect(helpers.getLCM([2, 3, 4])).toBe(12);
    });
    test('LCM of 2, 3, 4, 5 should be 60', () => {
      expect(helpers.getLCM([2, 3, 4, 5])).toBe(60);
    });
    test('LCM with duplicate numbers 2, 2, 3, 3 should be 6', () => {
      expect(helpers.getLCM([2, 2, 3, 3])).toBe(6);
    });
    test('LCM with only 1 number in array NaN', () => {
      expect(helpers.getLCM([2])).toBe(NaN);
    });
    test('LCM with empty array should return NaN', () => {
      expect(helpers.getLCM([])).toBe(NaN);
    });
    test('LCM with 0 in array should return NaN', () => {
      expect(helpers.getLCM([0])).toBe(NaN);
    });
  });

  describe('getSequenceProduct()', () => {
    test('product of [1,2,3,4,5] should be 120', () => {
      expect(helpers.getSequenceProduct([1,2,3,4,5])).toBe(120);
    });
  });

  describe('getSequenceSum()', () => {
    test('sum of [1,2,3,4,5] should be 15', () => {
      expect(helpers.getSequenceSum([1,2,3,4,5])).toBe(15);
    });
  });

  describe('convertNumberToSequence()', () => {
    test('convert 123 to [1,2,3]', () => {
      expect(helpers.convertNumberToSequence(123)).toEqual([1, 2, 3]);
    });
  });

  describe('convertNumberStringToSequence()', () => { 
    test('convert 123 (string) to [1,2,3]', () => {
      expect(helpers.convertNumberStringToSequence('123')).toEqual([1, 2, 3]);
    });
    test('return empty array if string is empty', () => {
      expect(helpers.convertNumberStringToSequence('')).toEqual([]);
    });
    test('return empty array if string is not a number', () => {
      expect(helpers.convertNumberStringToSequence('1a4')).toEqual([]);
    });
  });

  describe('getPrimeSequenceBelow()', () => {
    test('get prime numbers up to but not including 7', () => {
      expect(helpers.getPrimeSequenceBelow(7)).toEqual([2, 3, 5]);
    });
    test(('get prime numbers up to and including 7'), () => {
      expect(helpers.getPrimeSequenceBelow(7, true)).toEqual([2, 3, 5, 7]);
    });
    test('max of less than 2 supplied returns []', () => {
      expect(helpers.getPrimeSequenceBelow(2)).toEqual([]);
    });
    test('max of 2 (inclusive) supplied returns [2]', () => {
      expect(helpers.getPrimeSequenceBelow(2, true)).toEqual([2]);
    });
  });

  describe('getNumberGrid()', () => {
    test('data of 1 2 3 / 4 5 6 / 7 8 9 should return 2d array of numbers', () => {
      const data = '1 2 3\n4 5 6\n7 8 9';
      expect(helpers.getNumberGrid(data)).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
    });

    test('same test but with leading 0s', () => {
      const data = '01 02 03\n04 05 06\n07 08 09';
      expect(helpers.getNumberGrid(data)).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
    });

    test('data of 123/456/789 and whitespace:false should return 2d array of numbers', () => {
      const data = '123\n456\n789';
      expect(helpers.getNumberGrid(data, false)).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
    });
  });

  describe('factorial()', () => {
    test('factorial of 5 should be 120', () => {
      expect(helpers.factorial(5)).toBe(120);
    });
    test('factorial of 0 should be 1', () => {
      expect(helpers.factorial(0)).toBe(1);
    });
    test('factorial of 1 should be 1', () => {
      expect(helpers.factorial(1)).toBe(1);
    });
  });
});

