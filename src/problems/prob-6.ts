// Sum of Squares
// a^2 + b^2 + c^2...
export function getSumOfSquares(sequence: number[]): number {
  return sequence.reduce((acc, curr) => acc + Math.pow(curr, 2));
}

// Square of Sums
// (a + b + c + ...)^2
export function getSquareOfSum(sequence: number[]): number {
  return Math.pow(sequence.reduce((acc, curr) => acc + curr), 2);
}

// Difference between Sum of Squares and Square of Sums
export function problem6(sequence: number[]): number {
  return getSquareOfSum(sequence) - getSumOfSquares(sequence);
}