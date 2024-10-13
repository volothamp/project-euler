"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSumOfMultiples = getSumOfMultiples;
function getSumOfMultiples(rangeLow, rangeHigh, multiples) {
    var sum = 0;
    for (var i = rangeLow; i < rangeHigh; i++) {
        for (var j = 0; j < multiples.length; j++) {
            if (i % multiples[j] === 0) {
                sum += i;
                break;
            }
        }
    }
    return sum;
}
