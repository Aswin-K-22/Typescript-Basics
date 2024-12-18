"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function main() {
    rl.question('Enter a number: ', function (input) {
        var num = parseInt(input);
        if (isNaN(num)) {
            console.log('Please enter a valid number.');
            rl.close();
            return;
        }
        if (isPrime(num)) {
            console.log('Entered number is a Prime number');
        }
        else {
            console.log('Entered number is not a Prime number');
        }
        rl.close();
    });
}
main();
