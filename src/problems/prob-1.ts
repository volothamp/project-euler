export function getSumOfMultiples(rangeLow: number, rangeHigh: number, multiples: number[]): number {
  let sum = 0;
  
  for (let i = rangeLow; i < rangeHigh; i++) {
    for (let j = 0; j < multiples.length; j++) {
      if (i % multiples[j] === 0) {
        sum += i;
        break;
      }
    }
  }
  return sum;
}