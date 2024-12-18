"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function getInputAndSwapArrays() {
    rl.question('Enter the size of the arrays: ', function (sizeInput) {
        var size = parseInt(sizeInput);
        if (isNaN(size) || size <= 0) {
            console.log('Invalid input. Please enter a positive number.');
            rl.close();
            return;
        }
        var array1 = [];
        var array2 = [];
        rl.question('Enter the values of Array 1 (comma-separated): ', function (array1Input) {
            array1 = array1Input.split(',').map(function (item) { return parseInt(item.trim()); });
            if (array1.length !== size) {
                console.log("Error: Please enter exactly ".concat(size, " values for Array 1."));
                rl.close();
                return;
            }
            rl.question('Enter the values of Array 2 (comma-separated): ', function (array2Input) {
                var _a;
                array2 = array2Input.split(',').map(function (item) { return parseInt(item.trim()); });
                if (array2.length !== size) {
                    console.log("Error: Please enter exactly ".concat(size, " values for Array 2."));
                    rl.close();
                    return;
                }
                _a = [array2, array1], array1 = _a[0], array2 = _a[1];
                console.log('Arrays after swapping:');
                console.log('Array1:', array1);
                console.log('Array2:', array2);
                rl.close();
            });
        });
    });
}
// Call the function to get input and swap arrays
getInputAndSwapArrays();
