export function getFibonacciSequence(first: number, second: number, max: number): number[] {
  let sequence = [first, second]; 
  let next = -1;
  
  while (next < max) {
    next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (next <= max) {
      sequence.push(next);
    }
  }

  return sequence;
}