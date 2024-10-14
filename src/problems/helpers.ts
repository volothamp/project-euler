export function isPalindrome(n: number | string, ignoreSpaces: boolean = false): boolean {
  n = n.toString();
  if (ignoreSpaces) {
    n = n.replace(/\s/g, '');
  }
  return n === n.split('').reverse().join('');
}

export function getMultiples (min: number, max: number, multiples: number[]|number, inclusive: boolean = false): number[] {
  if (typeof multiples === 'number') {
    multiples = [multiples];
  }
  if (inclusive) max++;

  const sequence: number[] = [];
  for (let i = min; i < max; i++) {
    if (multiples.some((multiple) => i % multiple === 0)) {
      sequence.push(i);
    }
  }
  return sequence;
}

export function getSumOfMultiples(sequence: number[], multiples: number[]): number {
  return sequence.filter((num) => multiples.some((multiple) => num % multiple === 0)).reduce((acc, curr) => acc + curr);
}

export function getPrimeFactors(n: number): number[] {
  const factors: number[] = [];
  let test: number = 2;

  if (n !== 0 && n !== 1) {
   //start with 2 til odd
    while (n % test === 0) {
      factors.push(test);
      n = n / test
    }

    // now find remaining prime factors
    for (test = 3; test <= n; test += 2) {
      while (n % test === 0) {
        factors.push(test);
        n = n / test;
      }
    }
  }
  return factors;
}

export function getLCM(numbers: number[]): number {
  if (numbers.length <= 1 || numbers.includes(0)) return NaN;

  const max = Math.max(...numbers);
  let lcm = max;
  while (true) {
    if (numbers.every((num) => lcm % num === 0)) {
      return lcm;
    }
    lcm += max;
  }
}

export function generateLinearSequence({ count, increment = 1, start = 1 }: { count: number; increment?: number; start?: number; }): number[] {
  return Array.from({ length: count }, (_, i) => start + i * increment);
}