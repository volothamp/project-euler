import { inputToNumber } from '../../src/inc/utils';

describe('inc/helpers', () => {
  describe('inputToNumber()', () => {
    test('empty string should result in false', () => {
      expect(inputToNumber('')).toBe(false);
    });
    test('string with letters should result in false', () => {
      expect(inputToNumber('abc')).toBe(false);
    });
    test('string with numbers should result in a number', () => {
      expect(inputToNumber('123')).toBe(123);
    });
    test('string of 0 should result in 0', () => {
      expect(inputToNumber('0')).toBe(0);
    });
  });
});
