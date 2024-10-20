export function getCollatzSequence(n: number): number[] {
  let sequence = [n];
  while (n !== 1) {
    n = n % 2 === 0 ? (n / 2) : (3 * n) + 1;
    sequence.push(n);
  }
  return sequence;
}

export function getLongestCollatzSequence(max: number): { n: number, length: number } {
  let longest = { n: 0, length: 0 };
  for (let i = 1; i < max; i++) {
    let sequence = getCollatzSequence(i);
    if (sequence.length > longest.length) {
      longest = { n: i, length: sequence.length };
    }
  }
  return longest;
}
