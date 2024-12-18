import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your mark (out of 100): ', (inputMark: string) => {
    const mark: number = Number(inputMark);

    if (isNaN(mark) || mark < 0 || mark > 100) {
        console.log('Invalid input. Please enter a number between 0 and 100.');
    } else {
        if (mark >= 50) {
            console.log('Passed');
        } else {
            console.log('Failed');
        }
    }

    rl.close();
});
