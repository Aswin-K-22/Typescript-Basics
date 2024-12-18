"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function sortArrayDescending() {
    rl.question('Enter the size of the array: ', function (sizeInput) {
        var size = parseInt(sizeInput);
        if (isNaN(size) || size <= 0) {
            console.log('Invalid input. Please enter a positive number.');
            rl.close();
            return;
        }
        rl.question('Enter the values of the array (comma-separated): ', function (arrayInput) {
            var array = arrayInput.split(',').map(function (item) { return parseInt(item.trim()); });
            if (array.length !== size) {
                console.log("Error: Please enter exactly ".concat(size, " values for the array."));
                rl.close();
                return;
            }
            array.sort(function (a, b) { return b - a; });
            console.log('Sorted array:');
            console.log(array.join(', '));
            rl.close();
        });
    });
}
sortArrayDescending();
