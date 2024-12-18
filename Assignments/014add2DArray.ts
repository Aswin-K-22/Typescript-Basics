import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inputArray(rows: number, cols: number, arrayName: string): Promise<number[][]> {
    return new Promise((resolve) => {
        let array: number[][] = [];
        let rowCount = 0;

        console.log(`Enter the values of ${arrayName}:`);

        rl.on('line', (line) => {
            const row = line.split(' ').map(Number);
            if (row.length === cols) {
                array.push(row);
                rowCount++;

                if (rowCount === rows) {
                    resolve(array);
                    rl.removeAllListeners('line'); 
                }
            } else {
                console.log(`Please enter exactly ${cols} values for each row.`);
                return;
            }
        });
    });
}

function add2DArrays(array1: number[][], array2: number[][]): number[][] {
    const result: number[][] = [];
    const rows = array1.length;
    const cols = array1[0].length;

    for (let i = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j = 0; j < cols; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        result.push(row);
    }

    return result;
}

async function main() {
    rl.question('Enter the size of arrays: ', (sizeInput: string) => {
        const size: number = parseInt(sizeInput);

        if (isNaN(size) || size <= 0) {
            console.log('Invalid input. Please enter a positive number.');
            rl.close();
            return;
        }

        inputArray(size, size, 'array 1').then((array1) => {
            inputArray(size, size, 'array 2').then((array2) => {
                const sum = add2DArrays(array1, array2);

                console.log('Sum of 2 arrays is:');
                sum.forEach((row) => {
                    console.log(row.join(' '));
                });

                rl.close();
            });
        });
    });
}

main();
