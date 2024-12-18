import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input: string) => {
    const number: number = Number(input);

    if (isNaN(number)) {
        console.log('Invalid input. Please enter a valid number.');
    } else {
        console.log(`Multiplication table of ${number}:`);
        
        for (let i = 1; i <= 10; i++) {
            console.log(`${i} x ${number} = ${i * number}`);
        }
    }

    rl.close();
});
