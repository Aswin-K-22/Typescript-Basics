"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Create an interface for user input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Class to store and display a 2D array
var TwoDArray = /** @class */ (function () {
    function TwoDArray() {
        this.array = [];
    }
    // Method to get the 2D array values from the user
    TwoDArray.prototype.getArray = function (rows, cols) {
        var _this = this;
        return new Promise(function (resolve) {
            var rowIndex = 0;
            var getRow = function () {
                if (rowIndex < rows) {
                    rl.question("Enter values for row ".concat(rowIndex + 1, " (separated by spaces): "), function (rowInput) {
                        _this.array[rowIndex] = rowInput.split(' ').map(Number); // Convert input to numbers and store in 2D array
                        rowIndex++;
                        getRow(); // Continue asking for rows
                    });
                }
                else {
                    resolve(); // All rows have been inputted
                }
            };
            // Start getting rows
            getRow();
        });
    };
    // Method to display the 2D array
    TwoDArray.prototype.displayArray = function () {
        console.log("Array elements are:");
        for (var i = 0; i < this.array.length; i++) {
            console.log(this.array[i].join('\t')); // Join array elements with tab space for display
        }
    };
    return TwoDArray;
}());
// Main function to coordinate the program's execution
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            rl.question('Enter the size of the array (rows): ', function (rowsInput) {
                var rows = parseInt(rowsInput);
                if (isNaN(rows) || rows <= 0) {
                    console.log('Please enter a valid positive number for rows.');
                    rl.close();
                    return;
                }
                rl.question('Enter the number of columns for the array: ', function (colsInput) {
                    var cols = parseInt(colsInput);
                    if (isNaN(cols) || cols <= 0) {
                        console.log('Please enter a valid positive number for columns.');
                        rl.close();
                        return;
                    }
                    // Create an instance of TwoDArray class
                    var arrayObj = new TwoDArray();
                    console.log("Enter the values for the ".concat(rows, "x").concat(cols, " array:"));
                    // Get the 2D array values
                    arrayObj.getArray(rows, cols).then(function () {
                        // Once the input is complete, display the array
                        arrayObj.displayArray();
                        rl.close();
                    });
                });
            });
            return [2 /*return*/];
        });
    });
}
// Start the program
main();