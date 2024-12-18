"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a character :', function (char) {
    console.log("you entered  : ".concat(char));
    rl.close;
});
