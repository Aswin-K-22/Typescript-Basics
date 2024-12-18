import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number (1-7) to get the day of the week: ', (input: string) => {
    const dayNumber: number = Number(input);

    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Entry");
            break;
    }

    rl.close();
});
