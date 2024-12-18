import * as readline from 'readline';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question('Enter the Principal amount (P):' , (inputP : string)=>{
    rl.question('Enter the Interest rate (R) in %: ' ,(inputR : string)=>{
        rl.question('Enter the Number of years (n): ' ,(inputN : string)=>{
            const principal : number = Number(inputP);
            const rate : number = Number(inputR);
            const time : number= Number(inputN);
            if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
                console.log('Invalid input. Please enter valid positive numbers for all values.');
            } else {
                const simpleInterest: number = (principal * rate * time) / 100;
                console.log(`The Simple Interest for Principal ${principal}, Rate ${rate}%, and Time ${time} years is: ${simpleInterest}`);
            }

            
            rl.close();
           
        })
    })
})