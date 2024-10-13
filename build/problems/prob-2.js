"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFibonacciSequence = getFibonacciSequence;
function getFibonacciSequence(first, second, max) {
    var sequence = [first, second];
    var next = -1;
    while (next < max) {
        next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (next <= max) {
            sequence.push(next);
        }
    }
    return sequence;
}
