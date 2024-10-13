"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrimeFactors = getPrimeFactors;
function getPrimeFactors(n) {
    var factors = [];
    var test = 2;
    //start with 2 til odd
    while (n % test === 0) {
        factors.push(test);
        n = n / test;
    }
    // now find remaining prime factors
    for (test = 3; test <= n; test += 2) {
        while (n % test === 0) {
            factors.push(test);
            n = n / test;
        }
    }
    return factors;
}
