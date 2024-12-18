import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getArray(rows: number, cols: number): Promise<number[][]> {
    return new Promise((resolve) => {
        let array: number[][] = [];
        let count = 0;

        function getRow(rowIndex: number) {
            if (rowIndex < rows) {
                rl.question(`Enter values for row ${rowIndex + 1} (separated by spaces): `, (rowInput: string) => {
                    array[rowIndex] = rowInput.split(' ').map(Number);  
                    count++;

                    getRow(rowIndex + 1);
                });
            } else {
                resolve(array);
            }
        }

        getRow(0);
    });
}

function addArray(array1: number[][], array2: number[][], rows: number, cols: number): number[][] {
    let result: number[][] = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = array1[i][j] + array2[i][j];
        }
    }

    return result;
}

function displayArray(array: number[][]): void {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join('\t'));  
    }
}

async function main() {
    rl.question('Enter the size of the array (rows and columns, separated by space): ', async (sizeInput: string) => {
        const [rows, cols] = sizeInput.split(' ').map(Number);  
        if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
            console.log('Please enter valid positive numbers for rows and columns.');
            rl.close();
            return;
        }

        console.log('Enter the values for array 1');
        const array1 = await getArray(rows, cols);  
        console.log('Enter the values for array 2');
        const array2 = await getArray(rows, cols);  

        const sumArray = addArray(array1, array2, rows, cols);

        console.log('Sum of array 1 and array 2:');
        displayArray(sumArray);

        rl.close();
    });
}

main();
