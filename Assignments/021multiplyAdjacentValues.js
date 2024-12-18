"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function multiplyAdjacentValues(arr) {
    var result = [];
    for (var i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] * arr[i + 1]);
    }
    return result;
}
function main() {
    rl.question('Enter the array limit: ', function (limitInput) {
        var limit = parseInt(limitInput);
        if (isNaN(limit) || limit <= 0) {
            console.log('Please enter a valid positive number for array limit.');
            rl.close();
            return;
        }
        rl.question('Enter the values of array (separated by spaces): ', function (arrayInput) {
            var arr = arrayInput.split(' ').map(Number);
            if (arr.length !== limit) {
                console.log("Array should have exactly ".concat(limit, " elements."));
                rl.close();
                return;
            }
            var result = multiplyAdjacentValues(arr);
            console.log('Output:');
            console.log(result.join('\t'));
            rl.close();
        });
    });
}
main();
