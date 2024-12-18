function printPattern() {
    var num = 1;
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= i; j++) {
            process.stdout.write(num + "\t");
            num++;
        }
        console.log();
    }
}
printPattern();
