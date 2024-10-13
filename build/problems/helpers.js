"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = isPalindrome;
exports.getMultiples = getMultiples;
exports.getSumOfMultiples = getSumOfMultiples;
exports.getPrimeFactors = getPrimeFactors;
exports.getLCM = getLCM;
function isPalindrome(n, ignoreSpaces) {
    if (ignoreSpaces === void 0) { ignoreSpaces = false; }
    n = n.toString();
    if (ignoreSpaces) {
        n = n.replace(/\s/g, '');
    }
    return n === n.split('').reverse().join('');
}
function getMultiples(min, max, multiples, inclusive) {
    if (inclusive === void 0) { inclusive = false; }
    if (typeof multiples === 'number') {
        multiples = [multiples];
    }
    if (inclusive)
        max++;
    var sequence = [];
    var _loop_1 = function (i) {
        if (multiples.some(function (multiple) { return i % multiple === 0; })) {
            sequence.push(i);
        }
    };
    for (var i = min; i < max; i++) {
        _loop_1(i);
    }
    return sequence;
}
function getSumOfMultiples(sequence, multiples) {
    return sequence.filter(function (num) { return multiples.some(function (multiple) { return num % multiple === 0; }); }).reduce(function (acc, curr) { return acc + curr; });
}
function getPrimeFactors(n) {
    var factors = [];
    var test = 2;
    if (n !== 0 && n !== 1) {
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
    }
    return factors;
}
function getLCM(numbers) {
    if (numbers.length <= 1 || numbers.includes(0))
        return NaN;
    var max = Math.max.apply(Math, numbers);
    var lcm = max;
    while (true) {
        if (numbers.every(function (num) { return lcm % num === 0; })) {
            return lcm;
        }
        lcm += max;
    }
}
