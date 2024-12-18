var Car = /** @class */ (function () {
    function Car(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
    return Car;
}());
var myCar = new Car("Toyota Corolla", 15, 180);
console.log("Car Name: ".concat(myCar.name));
console.log("Mileage: ".concat(myCar.mileage));
console.log("Max Speed: ".concat(myCar.max_speed));
