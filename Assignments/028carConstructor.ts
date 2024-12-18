class Car {
    name: string;
    mileage: number;
    max_speed: number;

    constructor(name: string, mileage: number, max_speed: number) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
}

const myCar = new Car("Toyota Corolla", 15, 180);
console.log(`Car Name: ${myCar.name}`);
console.log(`Mileage: ${myCar.mileage}`);
console.log(`Max Speed: ${myCar.max_speed}`);
