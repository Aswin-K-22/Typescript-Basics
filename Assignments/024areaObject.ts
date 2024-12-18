import * as readlineSync from 'readline-sync';

class Area {
    circle(radius: number): number {
        return 3.1416 * radius * radius;
    }

    square(length: number): number {
        return length * length;
    }

    rectangle(length: number, breadth: number): number {
        return length * breadth;
    }

    triangle(base: number, height: number): number {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main(): void {
        console.log("Choose an option to calculate the area:");
        console.log("1. Circle");
        console.log("2. Square");
        console.log("3. Rectangle");
        console.log("4. Triangle");

        const choice: number = Number(readlineSync.question("Enter your choice: "));

        switch (choice) {
            case 1:
                this.circleOption();
                break;
            case 2:
                this.squareOption();
                break;
            case 3:
                this.rectangleOption();
                break;
            case 4:
                this.triangleOption();
                break;
            default:
                console.log("Invalid choice! Please choose a valid option.");
        }
    }

    circleOption(): void {
        const radius: number = Number(readlineSync.question("Enter the radius: "));
        const area = this.circle(radius);
        console.log(`Area of the circle is: ${area.toFixed(2)}`);
    }

    squareOption(): void {
        const length: number = Number(readlineSync.question("Enter the length: "));
        const area = this.square(length);
        console.log(`Area of the square is: ${area.toFixed(2)}`);
    }

    rectangleOption(): void {
        const length: number = Number(readlineSync.question("Enter the length: "));
        const breadth: number = Number(readlineSync.question("Enter the breadth: "));
        const area = this.rectangle(length, breadth);
        console.log(`Area of the rectangle is: ${area.toFixed(2)}`);
    }

    triangleOption(): void {
        const base: number = Number(readlineSync.question("Enter the base: "));
        const height: number = Number(readlineSync.question("Enter the height: "));
        const area = this.triangle(base, height);
        console.log(`Area of the triangle is: ${area.toFixed(2)}`);
    }
}

const obj = new MyClass();
obj.main();
