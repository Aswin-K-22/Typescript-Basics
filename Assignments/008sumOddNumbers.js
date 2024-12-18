"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a limit: ', function (input) {
    var limit = Number(input);
    if (isNaN(limit) || limit < 1) {
        console.log('Invalid input. Please enter a positive number.');
    }
    else {
        var sum = 0;
        for (var i = 1; i <= limit; i++) {
            if (i % 2 !== 0) {
                sum += i;
            }
        }
        console.log("Sum of odd numbers = ".concat(sum));
    }
    rl.close();
});
