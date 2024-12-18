// const messag = "hello world"
// let  age = 23;
// let isActive = true;
// console.log(typeof messag);
// console.log(typeof age);
// console.log(typeof isActive);
// function mul(num1 :number,num2 : number){
//     return num1 * num2;
// }
// let product  = mul(3,5);
// console.log('product is =', product )
// let array = [2,4,5]
// let mixArr = [3,4,'a',3];
// let stringArr = ['2'];
// let emptyarr = [];
// array.push(4);
// let person ={
//     name : 'asein',
//     age : 9,
//     isdevel : true
// }
// let userName : unknown = "aswin";
// let namLenght : number = (userName as string).length;
// interface Vehicle {
//     brand : string;
//     speed : number;
//     start():void;
//     drive(distance : number) : void;
// }
// class Car implements Vehicle {
//     brand: string;
//     speed: number;
//     constructor(brand : string ,speed : number){
//         this.brand = brand ;
//         this.speed = speed;
//     }
//     start(): void {
//         console.log(`${this.brand} is starting...` )
//     }
//     drive(distance: number): void {
//         console.log(`${this.brand} is driving for ${distance} kilometers at ${this.speed} km/h.`);
//     }
//     move():void{
//         console.log(this.brand , 'is moving')
//     }
// }
// let myCar:Car = new Car("Tesla", 150);
// myCar.start();
// myCar.drive(48);
// myCar.move();
// interface Vehicle {
//     brand : string;
//     speed : number;
//     start():void;
//     drive(distance : number) : void;
// }
// let car : Vehicle = {
// brand : "tesla",
// speed :20,
// start : ()=>{
//     console.log("moving");
// },
// drive : function (distance :number){
// console.log("trvelled");
// }
// }
// console.log(car);
// car.drive(8);
// car.start();
// car.speed = 9;
// car.brand = 'www';
// console.log(car);
// function printLen(id: number | string):void{
// if(typeof id === "number"){
//     console.log(`ID is a number`,id.toString.length)
// }else{
//     console.log(`ID is a string`,id.length)
// }
// }
// printLen(2);
// let mixArray : (number | string )[] ;
// mixArray = ['1' ,3]
// Define an enum for Days of the Week
// enum Day {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday,
//   }
//   function isWeekend(day: Day): boolean {
//     console.log(day)
//     if (day === Day.Saturday || day === Day.Sunday) {
//       return true; // It's a weekend
//     }
//     return false; // It's a weekday
//   }
// const today: number = 2;
// console.log(today);
// const tomorrow: Day = Day.Thursday;
// console.log(tomorrow);
// const weekendDay: Day = Day.Saturday;
// console.log(weekendDay);
// console.log(`Today is: ${Day[today]}`); // Output: Today is: Wednesday
// console.log(`Tomorrow is: ${Day[tomorrow]}`); // Output: Tomorrow is: Thursday
// console.log(`Is ${Day[weekendDay]} a weekend? ${isWeekend(weekendDay)}`); // Output: Is Saturday a weekend? true
// console.log(`Numeric value of ${Day[today]} is : ${today}`);
var Rule;
(function (Rule) {
    Rule["Admin"] = "ADMIN";
    Rule["User"] = "USER";
    Rule["Guest"] = "GUEST";
})(Rule || (Rule = {}));
function getPermission(role) {
    switch (role) {
        case Rule.Admin:
            console.log("Full access");
            return;
        case Rule.User:
            console.log("Limited access");
            return;
        case Rule.Guest:
            console.log('read only');
            return;
        default:
            console.log("No access");
            return;
    }
}
var adminRole = Rule.Admin;
getPermission(adminRole);
