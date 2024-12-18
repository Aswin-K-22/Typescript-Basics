"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the Principal amount (P):', function (inputP) {
    rl.question('Enter the Interest rate (R) in %: ', function (inputR) {
        rl.question('Enter the Number of years (n): ', function (inputN) {
            var principal = Number(inputP);
            var rate = Number(inputR);
            var time = Number(inputN);
            if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
                console.log('Invalid input. Please enter valid positive numbers for all values.');
            }
            else {
                var simpleInterest = (principal * rate * time) / 100;
                console.log("The Simple Interest for Principal ".concat(principal, ", Rate ").concat(rate, "%, and Time ").concat(time, " years is: ").concat(simpleInterest));
            }
            rl.close();
        });
    });
});
