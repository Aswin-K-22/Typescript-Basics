import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a limit: ', (input: string) => {
    const limit: number = Number(input);

    if (isNaN(limit) || limit < 1) {
        console.log('Invalid input. Please enter a positive number.');
    } else {
        let sum: number = 0;

        for (let i = 1; i <= limit; i++) {
            if (i % 2 !== 0) {
                sum += i;
            }
        }

        console.log(`Sum of odd numbers = ${sum}`);
    }

    rl.close();
});
