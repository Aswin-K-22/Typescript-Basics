function checkHeight(my_height: any): void {
    try {
        const height: number = Number(my_height);

        if (isNaN(height)) {
            throw new Error("notANumberError");
        }
        else if (height > 50) {
            throw new Error("hugeHeightError");
        }
        else if (height < 1) {
            throw new Error("tinyHeightError");
        }
        console.log(height);
    } catch (error: any) {
        console.log(error.message);
    }
}

checkHeight("seven");  
checkHeight(77);       
checkHeight(0);       
checkHeight(8);       
