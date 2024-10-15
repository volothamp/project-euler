export function getLargestConsecutiveProduct(sequence: number[], length: number): number {
  let largestProduct = 0;
  for (let i = 0; i < sequence.length - length; i++) {
    const product = sequence.slice(i, i + length).reduce((acc, curr) => acc * curr);
    if (product > largestProduct) {
      largestProduct = product;
    }
  }
  return largestProduct;
}