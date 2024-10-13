// Calculate largest palindrome made from the product of two numbers within a given range
import { isPalindrome } from "./helpers";

export function getLargestPalindromeProduct(min: number, max: number): number {
  let largestPalindrome = 0;
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      const product = i * j;
      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }
  return largestPalindrome;
}