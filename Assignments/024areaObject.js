"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Area = /** @class */ (function () {
    function Area() {
    }
    // Function to calculate area of circle
    Area.prototype.circle = function (radius) {
        return 3.1416 * radius * radius;
    };
    // Function to calculate area of square
    Area.prototype.square = function (length) {
        return length * length;
    };
    // Function to calculate area of rectangle
    Area.prototype.rectangle = function (length, breadth) {
        return length * breadth;
    };
    // Function to calculate area of triangle
    Area.prototype.triangle = function (base, height) {
        return 0.5 * base * height;
    };
    return Area;
}());
var MyClass = /** @class */ (function (_super) {
    __extends(MyClass, _super);
    function MyClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Main function to drive the program
    MyClass.prototype.main = function () {
        console.log("Choose an option to calculate the area:");
        console.log("1. Circle");
        console.log("2. Square");
        console.log("3. Rectangle");
        console.log("4. Triangle");
        var choice = Number(readlineSync.question("Enter your choice: "));
        switch (choice) {
            case 1:
                this.circleOption();
                break;
            case 2:
                this.squareOption();
                break;
            case 3:
                this.rectangleOption();
                break;
            case 4:
                this.triangleOption();
                break;
            default:
                console.log("Invalid choice! Please choose a valid option.");
        }
    };
    // Function for circle area
    MyClass.prototype.circleOption = function () {
        var radius = Number(readlineSync.question("Enter the radius: "));
        var area = this.circle(radius);
        console.log("Area of the circle is: ".concat(area.toFixed(2)));
    };
    // Function for square area
    MyClass.prototype.squareOption = function () {
        var length = Number(readlineSync.question("Enter the length: "));
        var area = this.square(length);
        console.log("Area of the square is: ".concat(area.toFixed(2)));
    };
    // Function for rectangle area
    MyClass.prototype.rectangleOption = function () {
        var length = Number(readlineSync.question("Enter the length: "));
        var breadth = Number(readlineSync.question("Enter the breadth: "));
        var area = this.rectangle(length, breadth);
        console.log("Area of the rectangle is: ".concat(area.toFixed(2)));
    };
    // Function for triangle area
    MyClass.prototype.triangleOption = function () {
        var base = Number(readlineSync.question("Enter the base: "));
        var height = Number(readlineSync.question("Enter the height: "));
        var area = this.triangle(base, height);
        console.log("Area of the triangle is: ".concat(area.toFixed(2)));
    };
    return MyClass;
}(Area));
// Driver Code
var obj = new MyClass();
obj.main();
