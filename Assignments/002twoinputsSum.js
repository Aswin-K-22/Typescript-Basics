"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the first number: ', function (input1) {
    rl.question('Enter the second number: ', function (input2) {
        var number1 = Number(input1);
        var number2 = Number(input2);
        if (isNaN(number1) || isNaN(number2)) {
            console.log('Invalid input. Please enter valid numbers.');
        }
        else {
            var sum = number1 + number2;
            console.log("The sum of ".concat(number1, " and ").concat(number2, " is: ").concat(sum));
        }
        rl.close();
    });
});
