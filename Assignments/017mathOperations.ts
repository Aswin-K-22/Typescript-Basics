import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class MathOperations {
    addition(a: number, b: number): number {
        return a + b;
    }

    subtraction(a: number, b: number): number {
        return a - b;
    }

    multiplication(a: number, b: number): number {
        return a * b;
    }

    division(a: number, b: number): number | string {
        if (b === 0) {
            return 'Error: Division by zero is not allowed';
        }
        return a / b;
    }
}

function displayMenu() {
    console.log('\nMenu:');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Exit');
}

function main() {
    let mathOperations = new MathOperations();

    rl.question('Enter the first number: ', (num1Input: string) => {
        const num1 = parseFloat(num1Input);

        if (isNaN(num1)) {
            console.log('Please enter a valid number.');
            rl.close();
            return;
        }

        rl.question('Enter the second number: ', (num2Input: string) => {
            const num2 = parseFloat(num2Input);

            if (isNaN(num2)) {
                console.log('Please enter a valid number.');
                rl.close();
                return;
            }

            function askOperation() {
                displayMenu();

                rl.question('Choose an operation (1-5): ', (choiceInput: string) => {
                    const choice = parseInt(choiceInput);

                    switch (choice) {
                        case 1:
                            console.log(`Result of Addition: ${mathOperations.addition(num1, num2)}`);
                            askOperation();
                            break;
                        case 2:
                            console.log(`Result of Subtraction: ${mathOperations.subtraction(num1, num2)}`);
                            askOperation();
                            break;
                        case 3:
                            console.log(`Result of Multiplication: ${mathOperations.multiplication(num1, num2)}`);
                            askOperation();
                            break;
                        case 4:
                            console.log(`Result of Division: ${mathOperations.division(num1, num2)}`);
                            askOperation();
                            break;
                        case 5:
                            console.log('Exiting the program.');
                            rl.close();
                            break;
                        default:
                            console.log('Invalid choice. Please choose a valid option.');
                            askOperation();
                            break;
                    }
                });
            }

            askOperation();
        });
    });
}

main();
