import { get } from "http";

export function getNthTriangleNumber(n: number): number {
  return n * (n + 1) / 2;
}

export function getAllFactors(n: number): number[] {
  //Get all factors, not just prime factors
  const factors: number[] = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (n / i !== i) factors.push(n / i);
    }
  }
  return factors.sort((a, b) => a - b);
}

export function getTriangleNumberWithOverNFactors(n: number): number {
  let i: number = 1;
  let test: number = NaN

  while (true) {
    test = getNthTriangleNumber(i);
    const factors = getAllFactors(test).length;
    if (factors > n) {
      return test;
    }
    i++;
  }
}