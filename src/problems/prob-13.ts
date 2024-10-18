export function addGrid(grid: number[][]): number[] {
  let sum: number[] = [];
  let colSum: number = 0;
  let carry: number = 0;

  //ensure all rows are the same length
  const rowLength = grid[0].length;
  for (let i = 1; i < grid.length; i++) {
    if (grid[i].length !== rowLength) {
      throw new Error('All rows must be the same length');
    }
  }

  for (let x = rowLength - 1; x >= 0; x--) {
    colSum = carry;
    for (let y = 0; y < grid.length; y++) {
      colSum += grid[y][x];
      if (y === grid.length - 1) {
        let singles = colSum % 10;
        carry = (colSum - singles) / 10;
        sum.unshift(singles);
      }
    }
    if (x === 0 && carry > 0) {
      const carryDigits = carry.toString().split('').map(Number);
      sum = carryDigits.concat(sum);
    }
  }
  return sum;
}

