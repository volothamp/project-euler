"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputToNumber = inputToNumber;
//If input is a string that can be converted to an integer, return the integer. Otherwise return false.
function inputToNumber(input) {
    var num = parseInt(input, 10);
    return isNaN(num) ? false : num;
}
