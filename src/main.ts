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
import * as helpers from './problems/helpers';
import { getFibonacciSequence } from './problems/prob-2';
import { getLargestPalindromeProduct } from './problems/prob-4';
import { problem6 } from './problems/prob-6';

console.log("Problem 1: ", helpers.getMultiples(1, 1000, [3, 5]).reduce((acc, curr) => acc + curr));
console.log("Problem 2: ", helpers.getSumOfMultiples(getFibonacciSequence(1, 2, 4e6), [2]));
console.log("Problem 3: ", Math.max(...helpers.getPrimeFactors(600851475143)));
console.log("Problem 4: ", getLargestPalindromeProduct(100, 999));
console.log("Problem 5: ", helpers.getLCM(helpers.generateLinearSequence({ count: 20 })));
console.log("Problem 6: ", problem6(helpers.generateLinearSequence({count: 100})));