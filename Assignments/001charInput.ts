import * as readline from 'readline';


const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question('Enter a character :' , (char : string)=>{
    console.log(`you entered  : ${char}`);
    rl.close;
} )