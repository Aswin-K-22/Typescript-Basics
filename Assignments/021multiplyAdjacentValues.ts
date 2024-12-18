import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function multiplyAdjacentValues(arr: number[]): number[] {
    let result: number[] = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] * arr[i + 1]); 
    }

    return result;
}

function main() {
    rl.question('Enter the array limit: ', (limitInput: string) => {
        const limit = parseInt(limitInput);

        if (isNaN(limit) || limit <= 0) {
            console.log('Please enter a valid positive number for array limit.');
            rl.close();
            return;
        }

        rl.question('Enter the values of array (separated by spaces): ', (arrayInput: string) => {
            const arr = arrayInput.split(' ').map(Number); 

            if (arr.length !== limit) {
                console.log(`Array should have exactly ${limit} elements.`);
                rl.close();
                return;
            }

            const result = multiplyAdjacentValues(arr);

            console.log('Output:');
            console.log(result.join('\t')); 

            rl.close();
        });
    });
}

main();
