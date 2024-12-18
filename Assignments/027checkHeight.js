function checkHeight(my_height) {
    try {
        // Convert input to a number (if it can be)
        var height = Number(my_height);
        // Check for NaN
        if (isNaN(height)) {
            throw new Error("notANumberError");
        }
        // Check for huge height
        else if (height > 50) {
            throw new Error("hugeHeightError");
        }
        // Check for tiny height
        else if (height < 1) {
            throw new Error("tinyHeightError");
        }
        // If all checks pass, print the height
        console.log(height);
    }
    catch (error) {
        console.log(error.message);
    }
}
// Sample Inputs
checkHeight("seven"); // Output: notANumberError
checkHeight(77); // Output: hugeHeightError
checkHeight(0); // Output: tinyHeightError
checkHeight(8); // Output: 8
