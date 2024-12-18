import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getArray(size: number): Promise<number[]> {
    return new Promise((resolve) => {
        let array: number[] = [];
        let inputCount = 0;

        console.log(`Enter ${size} values for the array:`);

        rl.on('line', (line: string) => {
            const value = parseInt(line.trim());
            if (!isNaN(value)) {
                array.push(value);
                inputCount++;

                if (inputCount === size) {
                    resolve(array);
                    rl.removeAllListeners('line');
                }
            } else {
                console.log('Please enter a valid number.');
            }
        });
    });
}

function displayArray(array: number[]): void {
    console.log('Array values:');
    console.log(array.join(' '));
}

async function main() {
    rl.question('Enter the size of the array: ', async (sizeInput: string) => {
        const size = parseInt(sizeInput);

        if (isNaN(size) || size <= 0) {
            console.log('Invalid input. Please enter a positive number.');
            rl.close();
            return;
        }

        const array = await getArray(size);

        displayArray(array);

        rl.close();
    });
}

main();
