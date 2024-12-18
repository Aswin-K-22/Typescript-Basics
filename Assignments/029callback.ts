function myFilter(myArray: number[], callback: (sum: number) => boolean): number {
    const sum = myArray.reduce((acc, num) => acc + num, 0);
    const isEven = callback(sum);
    return sum;
}

const checkEvenOrOdd = (sum: number): boolean => {
    return sum % 2 === 0;
};

const input = "12345";
const myArray = input.split("").map(Number);

const result = myFilter(myArray, checkEvenOrOdd);

console.log(result);
