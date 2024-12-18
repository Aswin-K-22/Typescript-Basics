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



// enum Rule{
//     Admin = "ADMIN",
//     User = "USER",
//     Guest = "GUEST"
// }
// function getPermission(role : Rule ): void{
//     switch(role){
//             case Rule.Admin:
//             console.log(  "Full access");
//             return;
//             case Rule.User:
//             console.log(  "Limited access");
//             return;
//             case Rule.Guest:
//                 console.log('read only');
           
//             return;
//             default:
//                 console.log(  "No access");
//                 return;
                
//     }
// }

// const adminRole : Rule = Rule.Admin;
// getPermission(adminRole);





// let Username : any ;
// Username = 3
// Username = "w";
// Username  = {
//     key : "non"
// }
// console.log(Username.newkey);
// console.log(Username.length);


// let Username : unknown ;
// Username = 3
// Username = "w";
// Username  = {
//     key : "non"
// }
// const UnkonwObjet = Username as {newkey :string};
// console.log(UnkonwObjet .newkey);
// if(typeof Username === 'string' ){
// console.log(Username.length);
// }


// // Base class
// abstract class Animal {
//     constructor(public name: string) {}
  
//     // Abstract method (must be implemented by derived classes)
//     abstract makeSound(): void;
  
//     // Common method
//     move(): void {
//       console.log(`${this.name} is moving.`);
//     }
//   }
  
//   // Derived class 1
//   class Dog extends Animal {
//     makeSound(): void {
//       console.log(`${this.name} says: Woof! Woof!`);
//     }
//   }
  
//   // Derived class 2
//   class Cat extends Animal {
//     makeSound(): void {
//       console.log(`${this.name} says: Meow!`);
//     }
//   }
  
//   // Derived class 3
//   class Bird extends Animal {
//     makeSound(): void {
//       console.log(`${this.name} says: Chirp! Chirp!`);
//     }
  
//     fly(): void {
//       console.log(`${this.name} is flying.`);
//     }
//   }
  
//   // Function demonstrating polymorphism
//   function interactWithAnimal(animal: Animal): void {
//     animal.makeSound(); // Calls the appropriate implementation based on the object type
//     animal.move(); // Common method from the base class
//   }
  
//   // Using the polymorphic function
//   const dog = new Dog("Buddy");
//   const cat = new Cat("Whiskers");
//   const bird = new Bird("Tweety");
  
//   interactWithAnimal(dog);
//   // Output:
//   // Buddy says: Woof! Woof!
//   // Buddy is moving.
  
//   interactWithAnimal(cat);
//   // Output:
//   // Whiskers says: Meow!
//   // Whiskers is moving.
  
//   interactWithAnimal(bird);
//   // Output:
//   // Tweety says: Chirp! Chirp!
//   // Tweety is moving.
  
//   // Specific method on derived class
//   bird.fly(); // Output: Tweety is flying.
  

// // Base class
// class Shape {
//     // Method to be overridden
//     draw(): void {
//       console.log("Drawing a shape");
//     }
//   }
  
//   // Derived class 1
//   class Circle extends Shape {
//     draw(): void {
//       console.log("Drawing a Circle");
//     }
//   }
  
//   // Derived class 2
//   class Rectangle extends Shape {
//     draw(): void {
//       console.log("Drawing a Rectangle");
//     }
//   }
  
//   // Derived class 3
//   class Triangle extends Shape {
//     draw(): void {
//       console.log("Drawing a Triangle");
//     }
//   }
  
//   // Function demonstrating runtime polymorphism
//   function render(shape: Shape): void {
//     // Calls the draw method of the object passed
//     shape.draw();
//   }
  
//   // Create instances of different shapes
//   const circle = new Circle();
//   const rectangle = new Rectangle();
//   const triangle = new Triangle();
  
//   // Use the base class reference to call the appropriate method
//   render(circle);    // Output: Drawing a Circle
//   render(rectangle); // Output: Drawing a Rectangle
//   render(triangle);  // Output: Drawing a Triangle
  

// class Calculator {
//     // Overload signatures
//     add(a: number, b: number): number;
//     add(a: string, b: string): string;
  
//     // Single implementation
//     add(a: any, b: any): any {
//       return a + b;
//     }
//   }
  
//   const calculator = new Calculator();
//   console.log(calculator.add(10, 20)); // Output: 30 (number addition)
//   console.log(calculator.add("Hello, ", "World!")); // Output: Hello, World! (string concatenation)
  

// function getLength<T extends { length: number }>(item: T): number {
//     return item.length;
//   }
  
//   console.log(getLength('hell')); 


// class Calculator {
//   // Overload signatures
//   add(a: number, b: number): number;
//   add(a: string, b: string): string;

//   // Single implementation
//   add(a: any, b: any): any {
//     return a + b;
//   }
// }



function isString(value: unknown): value is string {
    return typeof value === "string";
  }
  
  const input: unknown = "Hello, World!";
  
  if (isString(input)) {
    console.log(input.toUpperCase()); // Output: HELLO, WORLD!
  }
  

