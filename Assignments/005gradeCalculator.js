"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter your total mark percentage: ', function (inputMark) {
    var mark = Number(inputMark);
    if (isNaN(mark) || mark < 0 || mark > 100) {
        console.log('Invalid input. Please enter a number between 0 and 100.');
    }
    else {
        var grade = void 0;
        if (mark > 90) {
            grade = 'A';
        }
        else if (mark >= 80 && mark <= 89) {
            grade = 'B';
        }
        else if (mark >= 70 && mark <= 79) {
            grade = 'C';
        }
        else if (mark >= 60 && mark <= 69) {
            grade = 'D';
        }
        else if (mark >= 50 && mark <= 59) {
            grade = 'E';
        }
        else {
            grade = 'Failed';
        }
        console.log("You obtained grade: ".concat(grade));
    }
    rl.close();
});
