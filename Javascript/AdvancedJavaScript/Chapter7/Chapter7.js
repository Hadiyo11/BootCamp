"use strict";
// class Dog {
//   dogName;
//   weight;
//   color;
//   breed;
//   constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//   }
// }
// let dog1 = new Dog("Ketana", "13kg", "brown", "pitbull");
// let dog2 = new Dog("Nala", "15kg", "white", "Perkingese");
// console.log(`This dog's name is ${dog1.dogName} and her color is ${dog1.color}`);
// console.log(`The other dog's name is ${dog2.dogName} and her color is ${dog2.color}`);

// class Person{
//     firstName;
//     lastName;
//     constructor(firstName, lastName="Letsitsi"){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// let p = new Person("Hadiyo")
// console.log(p.firstName);
// console.log(p.lastName);

// class Person {
//   firstName;
//   lastName;
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   greet() {
//     //method
//     console.log(`Hello, my name is ${this.firstName} `);
//   }
//   compliment(name, object) {
//     console.log(`That's a wonderful ${object}, ${name} from ${friend1.firstName} `);
//   }
// }
// let friend1 = new Person("Nozipho", "Makolota");
// let friend2 = new Person("Mthoko", "Mthekge");
// console.log(`Hello ${friend1.firstName} ${friend1.lastName}!`);
// console.log(`Hello ${friend2.firstName} ${friend2.lastName}!`);
// friend1.greet();
// friend2.greet();
// friend1.compliment("Sizwe", "car");

// class Person {
//     #firstName;
//     #lastName;
//     constructor(firstName, lastName) {
//         if(firstName.length>1){
//             this.#firstName = firstName;
//         } else{
//             console.log(`firstname is too short`)
//         }
//       this.#lastName = lastName;
//     }
//     fullname(){
//     return this.firstName + " " + this.lastName;
//     }
//   }
//   let friend1= new Person("Nozipho", "Makolota");
//   let friend2 = new Person("Mthoko", "Mtheke")
//   console.log(friend1.fullname());
//   console.log(friend2.fullname());

//getters and setters
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         if(firstname.length > 1){
//             this.#firstname = firstname;
//     } else {
//         console.log("firstname is too short")
//     }
//     if(lastname> 1){
//         this.#lastname = lastname;
// } else {
//     console.log('lastname is too short')
// }
//     }
//     get firstname() {
//     return this.#firstname;
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname;
//         }
//     get lastname() {
//     return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//         }
//    }
//    let p = new Person("Maria", "Saga");
// console.log(p.firstname);

//INHERITANCE
//super calls constructor of parent
// class Vehicle {
//   color;
//   currentSpeed;
//   maxSpeed;
//   constructor(color, currentSpeed, maxSpeed) {
//     this.color = color;
//     this.currentSpeed = currentSpeed;
//     this.maxSpeed = maxSpeed;
//   }
//   move() {
//     console.log("moving at", this.currentSpeed);
//   }
//   accelerate(amount) {
//     this.currentSpeed += amount;
//   }
// }

// class Motorcycle extends Vehicle {
//   constructor(color, currentSpeed, maxSpeed, fuel) {
//     super(color, currentSpeed, maxSpeed);
//     this.fuel = fuel;
//   }
//   doWheelie() {
//     console.log("Driving on one wheel!");
//   }
// }
// let motor = new Motorcycle("Red", 100, 120, "Diesel");
// console.log(motor.color);
// motor.move();
// motor.accelerate(10);
// motor.move();

//Prototype
// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
//   greet() {
//     console.log("Hi there!");
//   }
// }
// Person.prototype.introduce = function () {
//   console.log(`Hi, I'm, ${this.firstname}`);
// };
// Person.prototype.favouriteColor = `green`;
// let p = new Person(`Joe`, `Dean`);
// p.introduce();
// console.log(`${p.firstname} has a favourite color of ${p.favouriteColor}`);

class Animal {
    typeOfAnimal;
    sounds;
    constructor(typeOfAnimal, sounds){
        this.typeOfAnimal = typeOfAnimal;
        this.sounds = sounds;
    }
    sound() {
        console.log(`A ${this.typeOfAnimal} sounds like this ${this.sounds}`);
    }
}
Animal.prototype.move = function() {
    console.log(` This ${this.typeOfAnimal} is running`);
};

let goat = new Animal(`goat`, `meee`);
let cat = new Animal(`cat`, `mewwww`);
goat.move();
cat.move();
cat.sound();
goat.sound();
console.log(cat);