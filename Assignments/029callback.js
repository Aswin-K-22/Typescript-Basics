function myFilter(myArray, callback) {
    var sum = myArray.reduce(function (acc, num) { return acc + num; }, 0);
    var isEven = callback(sum);
    return sum;
}
var checkEvenOrOdd = function (sum) {
    return sum % 2 === 0;
};
var input = "12345";
var myArray = input.split("").map(Number);
var result = myFilter(myArray, checkEvenOrOdd);
console.log(result);
