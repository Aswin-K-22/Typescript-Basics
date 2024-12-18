"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculateIncomeTax(annualIncome) {
    var taxAmount = 0;
    if (annualIncome <= 250000) {
        taxAmount = 0;
    }
    else if (annualIncome <= 500000) {
        taxAmount = (annualIncome - 250000) * 0.05;
    }
    else if (annualIncome <= 1000000) {
        taxAmount = (250000 * 0.05) + (annualIncome - 500000) * 0.20;
    }
    else if (annualIncome <= 5000000) {
        taxAmount = (250000 * 0.05) + (500000 * 0.20) + (annualIncome - 1000000) * 0.30;
    }
    else {
        taxAmount = (250000 * 0.05) + (500000 * 0.20) + (9000000 * 0.30);
    }
    return taxAmount;
}
function main() {
    rl.question('Enter the annual income: ', function (incomeInput) {
        var annualIncome = parseFloat(incomeInput);
        if (isNaN(annualIncome) || annualIncome < 0) {
            console.log('Please enter a valid positive number for annual income.');
            rl.close();
            return;
        }
        var taxAmount = calculateIncomeTax(annualIncome);
        console.log("Income tax amount = ".concat(taxAmount.toFixed(2)));
        rl.close();
    });
}
main();
