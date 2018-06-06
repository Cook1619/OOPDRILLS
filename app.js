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
        alert(`Hello, my name is ${this.name}, I am ${this.age} years old, and live in ${location}.`)
    }
}

let person1 = new Person('Danelle', 'Mayer', 32);
erson1.greet()

let person2 = new Person('Mike', 'Montrose', 30);
person2.greet()

let person3 = new Person('Aaron', 'Cedar City', 29);
person3.greet()

let person4 = new Person('Ahmed', 'Plymouth', 31);
person4.greet();
let person5 = new Person('Mike', 'Albertville', 31);
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