import { getSequenceProduct } from "./helpers";
export function calculateProblem9(sum: number): {product: number, triplet: number[]} {
  let triplet: number[] = [];
  let product: number = NaN;
  
  for (let i: number = 1; i < sum - 1; i++) {
    for (let j: number = i + 1; j < sum; j++) {
      const k: number = sum - i - j;
      if (i ** 2 + j ** 2 === k ** 2) {
        triplet = [i, j, k];
        product = getSequenceProduct(triplet);
      }
    }
  }
  return {product, triplet};
}