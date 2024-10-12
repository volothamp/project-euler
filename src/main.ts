// import readline from 'readline';
// import { inputToNumber } from './inc/utils';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// export function getNumber(): void {
//   rl.question('Please enter a project number: ', (input) => {
//     const num = inputToNumber(input);
//     if (num === false || num < 1 || num > 500) {
//       console.log('Invalid input...');
//       getNumber();
//     } else {
//       console.log(num);
//       rl.close();
//     }
//   });
// }

// getNumber();

import { getSumOfMultiples } from './problems/prob-1';
import { getFibonacciSequenceSum } from './problems/prob-2';

console.log("Problem 1: ", getSumOfMultiples(1, 1000, [3, 5]));
console.log("Problem 2: ", getFibonacciSequenceSum(1, 2, 4e6, 2));