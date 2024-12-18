import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInputAndSwapArrays() {
    rl.question('Enter the size of the arrays: ', (sizeInput: string) => {
        const size: number = parseInt(sizeInput);

        if (isNaN(size) || size <= 0) {
            console.log('Invalid input. Please enter a positive number.');
            rl.close();
            return;
        }

        let array1: number[] = [];
        let array2: number[] = [];

        rl.question('Enter the values of Array 1 (comma-separated): ', (array1Input: string) => {
            array1 = array1Input.split(',').map((item) => parseInt(item.trim()));

            if (array1.length !== size) {
                console.log(`Error: Please enter exactly ${size} values for Array 1.`);
                rl.close();
                return;
            }

            rl.question('Enter the values of Array 2 (comma-separated): ', (array2Input: string) => {
                array2 = array2Input.split(',').map((item) => parseInt(item.trim()));

                if (array2.length !== size) {
                    console.log(`Error: Please enter exactly ${size} values for Array 2.`);
                    rl.close();
                    return;
                }

                [array1, array2] = [array2, array1];

                console.log('Arrays after swapping:');
                console.log('Array1:', array1);
                console.log('Array2:', array2);

                rl.close();
            });
        });
    });
}

getInputAndSwapArrays();
