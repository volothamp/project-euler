export function getFibonacciSequenceSum(first: number, second: number, max: number, mod: number): number {
  let sequence = [first, second]; 
  let sum:number = (first % mod === 0) ? first:0;
  sum += (second % mod === 0) ? second:0;
  let next = 0;
  
  while (next < max) {
    next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (next < max) {
      sequence.push(next);
      sum += (next % mod === 0) ? next:0;
    }
  }

  return sum;
}