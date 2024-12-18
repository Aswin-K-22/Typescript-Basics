let my_string: any = "1234"; 
try {
    console.log("The statement to print in the try block is:");
    const reversedString: string = my_string.split("").reverse().join("");
    console.log(`Reversed string is : ${reversedString}`);
} catch (err: any) {
    console.log("The statement to print in the catch block is:");
    console.log(`Error : ${err.message}`);
} finally {
    console.log("The statement to print in the finally block is:");
    console.log(`Type of my_string is : ${typeof my_string}`);
}
