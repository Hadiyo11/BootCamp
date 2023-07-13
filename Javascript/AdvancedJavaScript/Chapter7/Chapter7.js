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
class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        if(firstname.length > 1){
            this.#firstname = firstname;
    } else {
        console.log("firstname is too short")
    }
    if(lastname> 1){
        this.#lastname = lastname; 
} else {
    console.log('lastname is too short')
}
    }
    get firstname() {
    return this.#firstname;
    }
    set firstname(firstname) {
        this.#firstname = firstname;
        }
    get lastname() {
    return this.#lastname;
    }
    set lastname(lastname) {
        this.#lastname = lastname;
        }
   }
   let p = new Person("Maria", "Saga");
console.log(p.firstname);


