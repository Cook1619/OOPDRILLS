
function Person (name, city, age){
    this.name = name;
    this.city = city;
    this.age = age;
}

Person.prototype.greet = function(){
    alert(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`)
}

let person1 = new Person('Danelle', 'Mayer', 32);
console.log(person1.greet());






let person3 = {
    name: "Melissa",
    sayhello: function () {
        console.log(`Hello! My name is ${this.name}`);
    }
}
console.log(person3.sayhello());
let person4 = {
    name: "Aaron",
    sayhello: function () {
        console.log(`Hello! My name is ${this.name}`);
    }
}
console.log(person4.sayhello());
let person5 = {
    name: "Mike",
    sayhello: function () {
        console.log(`Hello! My name is ${this.name}`);
    }
}
console.log(person5.sayhello());