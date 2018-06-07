// //Old way
// function Person (name, city, age){
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }

// Person.prototype.greet = function(){
//     alert(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`)
// }

// let person1 = new Person('Danelle', 'Mayer', 32);
// erson1.greet()

// let person2 = new Person('Mike', 'Montrose', 30);
// person2.greet()

// let person3 = new Person('Aaron', 'Cedar City', 29);
// person3.greet()

// let person4 = new Person('Ahmed', 'Plymouth', 31);
// person4.greet();
// let person5 = new Person('Mike', 'Albertville', 31);
// person5.greet()
//New Way
class Person {
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
    greet(){
        alert(`Hello, my name is ${this.name}, I am ${this.age} years old, and live in ${this.location}.`)
    }
}

let person1 = new Person('Danelle', 32,'Mayer');
person1.greet()

let person2 = new Person('Mike', 30, 'Montrose');
person2.greet()

let person3 = new Person('Aaron', 29, 'Cedar City');
person3.greet()

let person4 = new Person('Ahmed', 31, 'Plymouth');
person4.greet();
let person5 = new Person('Mike', 31, 'Albertville');
person5.greet()



// let person3 = {
//     name: "Melissa",
//     sayhello: function () {
//         console.log(`Hello! My name is ${this.name}`);
//     }
// }
// console.log(person3.sayhello());
// let person4 = {
//     name: "Aaron",
//     sayhello: function () {
//         console.log(`Hello! My name is ${this.name}`);
//     }
// }
// console.log(person4.sayhello());
// let person5 = {
//     name: "Mike",
//     sayhello: function () {
//         console.log(`Hello! My name is ${this.name}`);
//     }
// }
// console.log(person5.sayhello());

class Vehicle {
    constructor(manufacturer, numberOfWheels){
        this.manufacturer = manufacturer;
        this.numberOfWheels = numberOfWheels;
    }
    aboutVehicle(){
        console.log(`This is vehicle is made by ${this.manufacturer} and has ${numberOfWheels}.`)
    }
}

class Truck extends Vehicle{
    constructor(manufacturer, numberOfWheels, numberOfDoors, truckBed){
        super(manufacturer, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.truckBed = truckBed;
    }
    aboutVehicle(){
        console.log(`This vehicle is a truck, and is a ${this.manufacturer} and has ${this.numberOfWheels} of wheels, ${this.numberOfDoors}, and has a truck bed ${this.truckBed}.`)
    }
}
t1 = new Truck("Ford", 4, 2, true);
t1.aboutVehicle();

class Sedan extends Vehicle {
    constructor(manufacturer, numberOfWheels, numberOfDoors, size, mpg){
        super(size, mpg)
        this.size = size;
        this.mpg = mpg;
    }
}

class Motorcycles extends Vehicle{
    constructor(manufacturer, numberOfWheels, handlebars){
        super(handlebars)
        this.handlebars = handlebars;
    }
}