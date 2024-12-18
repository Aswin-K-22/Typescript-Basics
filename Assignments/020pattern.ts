function printPattern() {
    let num = 1; 
    
    
    for (let i = 1; i <= 4; i++) {
       
        for (let j = 1; j <= i; j++) {
            process.stdout.write(num + "\t");
            num++;  
        }
        console.log(); 
    }
}

printPattern();
