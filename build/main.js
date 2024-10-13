"use strict";
// import readline from 'readline';
// import { inputToNumber } from './inc/utils';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var helpers = __importStar(require("./problems/helpers"));
var prob_2_1 = require("./problems/prob-2");
var prob_4_1 = require("./problems/prob-4");
console.log("Problem 1: ", helpers.getMultiples(1, 1000, [3, 5]).reduce(function (acc, curr) { return acc + curr; }));
console.log("Problem 2: ", helpers.getSumOfMultiples((0, prob_2_1.getFibonacciSequence)(1, 2, 4e6), [2]));
console.log("Problem 3: ", Math.max.apply(Math, helpers.getPrimeFactors(600851475143)));
console.log("Problem 4: ", (0, prob_4_1.getLargestPalindromeProduct)(100, 999));
console.log("Problem 5: ", helpers.getLCM(Array(20).fill(null).map(function (_, i) { return i + 1; })));
