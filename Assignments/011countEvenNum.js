"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function countEvenNumbers() {
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
            var evenCount = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    evenCount++;
                }
            }
            console.log("Number of even numbers in the given array is ".concat(evenCount));
            rl.close();
        });
    });
}
countEvenNumbers();
