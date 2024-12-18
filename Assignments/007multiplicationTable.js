"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a number: ', function (input) {
    var number = Number(input);
    if (isNaN(number)) {
        console.log('Invalid input. Please enter a valid number.');
    }
    else {
        console.log("Multiplication table of ".concat(number, ":"));
        for (var i = 1; i <= 10; i++) {
            console.log("".concat(i, " x ").concat(number, " = ").concat(i * number));
        }
    }
    rl.close();
});
