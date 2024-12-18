import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkPalindrome() {
    rl.question('Enter a string: ', (inputString: string) => {
        const cleanedString = inputString.toLowerCase();

        const reversedString = cleanedString.split('').reverse().join('');

        if (cleanedString === reversedString) {
            console.log('Entered string is a palindrome');
        } else {
            console.log('Entered string is not a palindrome');
        }

        rl.close();
    });
}

checkPalindrome();
