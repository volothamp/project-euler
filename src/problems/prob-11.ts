export function getLargestProductInGrid(grid: number[][], search: number = 4): number {
  let largestProduct = 0;
  let currentProduct = 0;

  // Check horizontal products
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x <= grid[y].length - search; x++) {
      currentProduct = 1;
      for (let inc = 0; inc < search; inc++) {
        currentProduct *= grid[y][x + inc];
      }
      if (currentProduct > largestProduct) {
        largestProduct = currentProduct;
      }
    }
  }

  // Check vertical products
  for (let y = 0; y <= grid.length - search; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      currentProduct = 1;
      for (let inc = 0; inc < search; inc++) {
        currentProduct *= grid[y + inc][x];
      }
      if (currentProduct > largestProduct) {
        largestProduct = currentProduct;
      }
    }
  }

  // Check diagonal products (top left to bottom right)
  for (let y = 0; y <= grid.length - search; y++) {
    for (let x = 0; x <= grid[y].length - search; x++) {
      currentProduct = 1;
      for (let inc = 0; inc < search; inc++) {
        currentProduct *= grid[y + inc][x + inc];
      }
      if (currentProduct > largestProduct) {
        largestProduct = currentProduct;
      }
    }
  }

  // Check diagonal products (top right to bottom left)
  for (let y = 0; y <= grid.length - search; y++) {
    for (let x = search - 1; x < grid[y].length; x++) {
      currentProduct = 1;
      for (let inc = 0; inc < search; inc++) {
        currentProduct *= grid[y + inc][x - inc];
      }
      if (currentProduct > largestProduct) {
        largestProduct = currentProduct;
      }
    }
  }

  return largestProduct;
}