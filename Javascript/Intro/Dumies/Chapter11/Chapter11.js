// let dresser = ["socks", "shirts", "pants"];
// console.log(dresser[2]);

// let favouriteFoods = ["broccoli", "eggplant", "tacos", "mushrooms"];
// console.log(favouriteFoods.length);

// let myArray = [5, "Hi there", true];
// console.log(myArray[0]);

// let people = ["Teddy","Cathy","Bobby"];
// console.log(people);
// // people[0]= "Georgie"
// people[0]= "Mary";
// people[1]="Bobby";
// people[2]="Judy";
// // console.log(people);
// people.push("Herbie", "Tony");
// console.log(people);

let people = ["Nolo", "Bokang", "Msi", "Sandile", "Prisca", "Dinah"];
let otherPeople = ["Keletso", "Thabo", "Louis"];
// document.getElementById("peopleIKnow").innerHTML = people.toString();
// document.getElementById("peopleIKnow").innerHTML = people.valueof();
//toString and valueOf do the same thing to arrays

peopleResult = people.concat(otherPeople);
document.getElementById("peopleIKnow").innerHTML = peopleResult;
//adding the two arrays

// document.getElementById("peopleIKnow").innerHTML = people.indexOf("Sandile");
//answer was 3

// document.getElementById("peopleIKnow").innerHTML = people.join("#");
// joining the names with #

// document.getElementById("peopleIKnow").innerHTML = people.lastIndexOf("Prisca");

// document.getElementById("peopleIKnow").innerHTML = people.pop();
// answer was Dinah

// document.getElementById("peopleIKnow").innerHTML = people.push("Cindy");
//we were adding an element

// document.getElementById("peopleIKnow").innerHTML = people.shift("Nolo");

// document.getElementById("peopleIKnow").innerHTML = people.slice(0,3);
//lets you pcik certain elements from your array

// document.getElementById("peopleIKnow").innerHTML = people.sort();
// sort the names in alphabatical order

// document.getElementById("peopleIKnow").innerHTML = (1,0,"Melony");
// adds or remove an Element