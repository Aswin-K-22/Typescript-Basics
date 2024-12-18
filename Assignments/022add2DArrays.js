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
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function getArray(rows, cols) {
    return new Promise(function (resolve) {
        var array = [];
        var count = 0;
        function getRow(rowIndex) {
            if (rowIndex < rows) {
                rl.question("Enter values for row ".concat(rowIndex + 1, " (separated by spaces): "), function (rowInput) {
                    array[rowIndex] = rowInput.split(' ').map(Number);
                    count++;
                    getRow(rowIndex + 1);
                });
            }
            else {
                resolve(array);
            }
        }
        getRow(0);
    });
}
function addArray(array1, array2, rows, cols) {
    var result = [];
    for (var i = 0; i < rows; i++) {
        result[i] = [];
        for (var j = 0; j < cols; j++) {
            result[i][j] = array1[i][j] + array2[i][j];
        }
    }
    return result;
}
function displayArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i].join('\t'));
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            rl.question('Enter the size of the array (rows and columns, separated by space): ', function (sizeInput) { return __awaiter(_this, void 0, void 0, function () {
                var _a, rows, cols, array1, array2, sumArray;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = sizeInput.split(' ').map(Number), rows = _a[0], cols = _a[1];
                            if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
                                console.log('Please enter valid positive numbers for rows and columns.');
                                rl.close();
                                return [2 /*return*/];
                            }
                            console.log('Enter the values for array 1');
                            return [4 /*yield*/, getArray(rows, cols)];
                        case 1:
                            array1 = _b.sent();
                            console.log('Enter the values for array 2');
                            return [4 /*yield*/, getArray(rows, cols)];
                        case 2:
                            array2 = _b.sent();
                            sumArray = addArray(array1, array2, rows, cols);
                            console.log('Sum of array 1 and array 2:');
                            displayArray(sumArray);
                            rl.close();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
main();
