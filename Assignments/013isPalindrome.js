"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function checkPalindrome() {
    rl.question('Enter a string: ', function (inputString) {
        var cleanedString = inputString.toLowerCase();
        var reversedString = cleanedString.split('').reverse().join('');
        if (cleanedString === reversedString) {
            console.log('Entered string is a palindrome');
        }
        else {
            console.log('Entered string is not a palindrome');
        }
        rl.close();
    });
}
checkPalindrome();
