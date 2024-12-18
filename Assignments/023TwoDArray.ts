import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class TwoDArray {
    private array: number[][] = [];

    getArray(rows: number, cols: number): Promise<void> {
        return new Promise((resolve) => {
            let rowIndex = 0;
            const getRow = () => {
                if (rowIndex < rows) {
                    rl.question(`Enter values for row ${rowIndex + 1} (separated by spaces): `, (rowInput: string) => {
                        this.array[rowIndex] = rowInput.split(' ').map(Number); 
                        rowIndex++;
                        getRow(); 
                    });
                } else {
                    resolve();
                }
            };

            getRow();
        });
    }

    displayArray(): void {
        console.log("Array elements are:");
        for (let i = 0; i < this.array.length; i++) {
            console.log(this.array[i].join('\t'));  
        }
    }
}

async function main() {
    rl.question('Enter the size of the array (rows): ', (rowsInput: string) => {
        const rows = parseInt(rowsInput);
        if (isNaN(rows) || rows <= 0) {
            console.log('Please enter a valid positive number for rows.');
            rl.close();
            return;
        }

        rl.question('Enter the number of columns for the array: ', (colsInput: string) => {
            const cols = parseInt(colsInput);
            if (isNaN(cols) || cols <= 0) {
                console.log('Please enter a valid positive number for columns.');
                rl.close();
                return;
            }
            const arrayObj = new TwoDArray();

            console.log(`Enter the values for the ${rows}x${cols} array:`);
            
            arrayObj.getArray(rows, cols).then(() => {
                arrayObj.displayArray();
                rl.close();
            });
        });
    });
}

main();
