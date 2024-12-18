var my_string = "1234";
try {
    console.log("The statement to print in the try block is:");
    var reversedString = my_string.split("").reverse().join("");
    console.log("Reversed string is : ".concat(reversedString));
}
catch (err) {
    console.log("The statement to print in the catch block is:");
    console.log("Error : ".concat(err.message));
}
finally {
    console.log("The statement to print in the finally block is:");
    console.log("Type of my_string is : ".concat(typeof my_string));
}
