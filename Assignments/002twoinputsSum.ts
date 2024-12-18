import * as readline from 'readline';
const rl =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (input1: string) => {
    rl.question('Enter the second number: ', (input2: string) => {
        const number1: number = Number(input1);
        const number2: number = Number(input2);
        if (isNaN(number1) || isNaN(number2)) {
            console.log('Invalid input. Please enter valid numbers.');
        } else {
            const sum: number = number1 + number2;
            console.log(`The sum of ${number1} and ${number2} is: ${sum}`);
        }
        rl.close();
    });
});