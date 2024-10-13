"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLargestPalindromeProduct = getLargestPalindromeProduct;
// Calculate largest palindrome made from the product of two numbers within a given range
var helpers_1 = require("./helpers");
function getLargestPalindromeProduct(min, max) {
    var largestPalindrome = 0;
    for (var i = max; i >= min; i--) {
        for (var j = max; j >= min; j--) {
            var product = i * j;
            if ((0, helpers_1.isPalindrome)(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }
    return largestPalindrome;
}
