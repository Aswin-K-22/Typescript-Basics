"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter your mark (out of 100): ', function (inputMark) {
    var mark = Number(inputMark);
    if (isNaN(mark) || mark < 0 || mark > 100) {
        console.log('Invalid input. Please enter a number between 0 and 100.');
    }
    else {
        if (mark >= 50) {
            console.log('Passed');
        }
        else {
            console.log('Failed');
        }
    }
    rl.close();
});
