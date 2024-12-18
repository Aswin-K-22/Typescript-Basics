"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.prototype.addition = function (a, b) {
        return a + b;
    };
    MathOperations.prototype.subtraction = function (a, b) {
        return a - b;
    };
    MathOperations.prototype.multiplication = function (a, b) {
        return a * b;
    };
    MathOperations.prototype.division = function (a, b) {
        if (b === 0) {
            return 'Error: Division by zero is not allowed';
        }
        return a / b;
    };
    return MathOperations;
}());
function displayMenu() {
    console.log('\nMenu:');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Exit');
}
function main() {
    var mathOperations = new MathOperations();
    rl.question('Enter the first number: ', function (num1Input) {
        var num1 = parseFloat(num1Input);
        if (isNaN(num1)) {
            console.log('Please enter a valid number.');
            rl.close();
            return;
        }
        rl.question('Enter the second number: ', function (num2Input) {
            var num2 = parseFloat(num2Input);
            if (isNaN(num2)) {
                console.log('Please enter a valid number.');
                rl.close();
                return;
            }
            function askOperation() {
                displayMenu();
                rl.question('Choose an operation (1-5): ', function (choiceInput) {
                    var choice = parseInt(choiceInput);
                    switch (choice) {
                        case 1:
                            console.log("Result of Addition: ".concat(mathOperations.addition(num1, num2)));
                            askOperation();
                            break;
                        case 2:
                            console.log("Result of Subtraction: ".concat(mathOperations.subtraction(num1, num2)));
                            askOperation();
                            break;
                        case 3:
                            console.log("Result of Multiplication: ".concat(mathOperations.multiplication(num1, num2)));
                            askOperation();
                            break;
                        case 4:
                            console.log("Result of Division: ".concat(mathOperations.division(num1, num2)));
                            askOperation();
                            break;
                        case 5:
                            console.log('Exiting the program.');
                            rl.close();
                            break;
                        default:
                            console.log('Invalid choice. Please choose a valid option.');
                            askOperation();
                            break;
                    }
                });
            }
            askOperation();
        });
    });
}
main();
