import readline from 'readline';
import * as utils from './inc/utils';
import * as helpers from './problems/helpers';
import * as p2 from './problems/prob-2';
import * as p4 from './problems/prob-4';
import * as p6 from './problems/prob-6';
import * as p7 from './problems/prob-7';
import * as p8 from './problems/prob-8';
import * as p9 from './problems/prob-9';
import * as p11 from './problems/prob-11';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function getProblem(): void {
  rl.question('Please enter a project number (0 to exit): ', (input) => {
    const num = utils.inputToNumber(input);
    if (num === false || num < 0 || num > 500) {
      
      console.clear();
      console.log('Invalid input...');
      getProblem();
    } else {
      doProblem(num);
    }
  });
}

export function doProblem(num: number): void {
  switch (num) {
    case 0:
      console.log("Exiting...");
      rl.close();
      return;
    case 1:
      console.log("Problem 1: ", helpers.getMultiples(1, 1000, [3, 5]).reduce((acc, curr) => acc + curr));
      break;
    case 2:
      console.log("Problem 2: ", helpers.getSumOfMultiples(p2.getFibonacciSequence(1, 2, 4e6), [2]));
      break;
    case 3:
      console.log("Problem 3: ", Math.max(...helpers.getPrimeFactors(600851475143)));
      break;
    case 4:
      console.log("Problem 4: ", p4.getLargestPalindromeProduct(100, 999));
      break;
    case 5:
      console.log("Problem 5: ", helpers.getLCM(helpers.generateLinearSequence({ count: 20 })));
      break;
    case 6:
      console.log("Problem 6: ", p6.problem6(helpers.generateLinearSequence({count: 100})));
      break;
    case 7:
      console.log("Problem 7: ", p7.getNthPrime(10001));
      break;
    case 8:
      let problem8Data = helpers.convertNumberStringToSequence(utils.getFileContents('src/problems/data/prob-8.dat', true));
      console.log("Problem 8: ", p8.getLargestConsecutiveProduct(problem8Data, 13));
      break;
    case 9:
      console.log("Problem 9: ", p9.calculateProblem9(1000));
      break;
    case 10:
      console.log("Problem 10: ", helpers.getSequenceSum(helpers.getPrimeSequenceBelow(2e6)));
      break;
    case 11:
      console.log("Problem 11: ", p11.getLargestProductInGrid(p11.getNumberGrid(utils.getFileContents('src/problems/data/prob-11.dat')), 4));
      break;
    default:
      console.clear();
      console.log("Invalid problem number");
  }
  getProblem();
}

getProblem();