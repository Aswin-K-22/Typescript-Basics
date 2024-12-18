import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num: number): boolean {
    if (num <= 1) {
        return false; 
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}

function main() {
    rl.question('Enter a number: ', (input: string) => {
        const num = parseInt(input);

        if (isNaN(num)) {
            console.log('Please enter a valid number.');
            rl.close();
            return;
        }

        if (isPrime(num)) {
            console.log('Entered number is a Prime number');
        } else {
            console.log('Entered number is not a Prime number');
        }

        rl.close();
    });
}

main();
