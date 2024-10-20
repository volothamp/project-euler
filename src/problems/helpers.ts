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

export function getSequenceProduct(sequence: number[]): number {
  return sequence.reduce((acc, curr) => acc * curr);
}

export function getSequenceSum(sequence: number[]): number {
  return sequence.reduce((acc, curr) => acc + curr);
}

export function convertNumberToSequence(n: number): number[] {
  return n.toString().split('').map((num) => parseInt(num));
}

export function convertNumberStringToSequence(n: string): number[] {
  if (n.match(/[^0-9]/)) return [];
  return n.split('').map((num) => parseInt(num));
}

export function getPrimeSequenceBelow(max: number, inclusive: boolean = false): number[] {
  if (inclusive) max++;
  if (max <= 2) return [];
  let primes: number[] = [2];
  let test: number = 3;
  while (test < max) {
    if (primes.every((prime) => test % prime !== 0)) {
      primes.push(test);
    }
    test += 2;
  }
  return primes;
}

export function getNumberGrid(data: string, whitespace: boolean = true): number[][] {
  let split: string = whitespace ? ' ' : '';
  return data.split('\n').map((line) => line.split(split).map((num) => parseInt(num, 10)));
}

export function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}