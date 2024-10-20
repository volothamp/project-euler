// Calculate Lattice Paths
import { factorial } from './helpers';

export function countLatticePaths(xSize: number, ySize: number): number {
  let k: number = xSize;
  let n: number = xSize + ySize;

  let paths:number = factorial(n) / (factorial(k) * factorial(n - k));

  return paths;
}