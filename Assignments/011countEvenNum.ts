import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countEvenNumbers() {
    rl.question('Enter the size of the array: ', (sizeInput: string) => {
        const size: number = parseInt(sizeInput);

        if (isNaN(size) || size <= 0) {
            console.log('Invalid input. Please enter a positive number.');
            rl.close();
            return;
        }

        rl.question('Enter the values of the array (comma-separated): ', (arrayInput: string) => {
            const array: number[] = arrayInput.split(',').map((item) => parseInt(item.trim()));

            if (array.length !== size) {
                console.log(`Error: Please enter exactly ${size} values for the array.`);
                rl.close();
                return;
            }

            let evenCount: number = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    evenCount++;
                }
            }

            console.log(`Number of even numbers in the given array is ${evenCount}`);

            rl.close();
        });
    });
}

countEvenNumbers();
