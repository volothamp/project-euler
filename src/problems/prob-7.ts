// Calculate nth prime number
// n = 5 - 5th prime number is 11
// n = 20 - 20th prime number is 71
export function getNthPrime(n: number): number {
  let primes: number[] = [2];
  let test: number = 3;
  while (primes.length < n) {
    if (primes.every((prime) => test % prime !== 0)) {
      primes.push(test);
    }
    test += 2;
  }
  return primes.pop() as number;
}