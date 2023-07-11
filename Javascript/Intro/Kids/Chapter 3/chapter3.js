// let dinosaurs = [
//     "T-Rex",
//     "Velociraptor",
//     "Stegosaurus",
//     "Triceratops",
//     "Brachiosaurus",
//     "Pteranodon",
//     "Apatosaurus",
//     "Diplodocus",
//     "Compsognathus"
//    ];
//    console.log(dinosaurs[0]);
//    console.log(dinosaurs[dinosaurs.length-1]);
//    console.log(dinosaurs.indexOf("Diplodocus"));
//    console.log(dinosaurs);
//    dinosaurs[0] = "Tyrannosaurus Rex";
//    console.log(dinosaurs);

// let subjects = []
// subjects[0] = "Biology"
// subjects[1] = "Sciences"
// subjects[2] = "Mathematics"
// console.log(subjects);
// let dinosaurs = [];
// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Stegosaurus";
// dinosaurs[3] = "Triceratops";
// dinosaurs[4] = "Brachiosaurus";
// dinosaurs[5] = "Pteranodon";
// dinosaurs[6] = "Apatosaurus";
// dinosaurs[7] = "Diplodocus";
// dinosaurs[8] = "Compsognathus";
// dinosaurs[33] = "Philosoraptor";
// console.log(dinosaurs);
// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
// console.log(dinosaursAndNumbers[3]);
// let maniacs = [ "Yakko" , "Wacko" , "Dot" ];
// console.log(maniacs[0]);
// console.log(maniacs[1]);
// console.log(maniacs[2]);
// console.log(maniacs.length);
// console.log(maniacs[maniacs.length-1]);
// let animals = [];
// animals.push("Cat");
// console.log(animals);
// animals.push("Dog");
// console.log(animals);
// animals.push("Llama");
// console.log(animals);
// animals.unshift("Monkey");
// console.log(animals);
// let numberOfAnimals = animals.unshift("Polar Bear");
// console.log("there are ", numberOfAnimals , "in my array");
// let lastAnimal = animals.pop();
// console.log(animals);
// console.log(lastAnimal);
// let firstAnimal = animals.shift();
// console.log(animals);
// console.log(firstAnimal);
// let furryAnimals =  ["Alpaca" , "Ring-tailed lemur" , "Yeti" ];
// console.log(furryAnimals);
// let scalyAnimals = ["Boa Constrictor" , "Godzilla"];
// console.log(scalyAnimals);
// let featheredAnimals = ["Macaw" , "Dodo"];
// console.log(featheredAnimals);
// let furryAndScurryAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
// console.log(furryAndScurryAnimals);
// let colors = ["red",
// "green",
// "blue",
// ];
// console.log(colors.indexOf("blue"));
// console.log(colors[2]);
// console.log(colors.indexOf("purple"));
// let insects = ["Bee" , "Ant" , "Bee" , "Bee" , "Ant"];
// console.log(insects.indexOf("Bee" , 3));
// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// let stringBoringAnimals = boringAnimals.join(" sees ")
// console.log(stringBoringAnimals);
// console.log(boringAnimals.join());
// console.log(boringAnimals);
// let landmarks = [];
// landmarks.push("My house");
// landmarks.push("Front path");
// landmarks.push("Flickering streetlamp");
// landmarks.push("Leaky fire hydrant");
// landmarks.push("Fire station");
// landmarks.push("Cat rescue center");
// landmarks.push("My old school");
// landmarks.push("My friend's house");
// console.log(landmarks);
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks);
//console.log(Math.floor(Math.random()*4));
// let randomFruits = ["Apple" , "Orange" , "Pear" , "Kiwi" , "Mango"];
// let randomFruitsIndex = Math.floor(Math.random() * randomFruits.length);
// console.log(randomFruits[randomFruitsIndex]);
let randomBodyParts = [ "Face" , "Nose" , "Hair"];
let randomAdjectives = ["Smelly" , "Boring" , "Stupid"];
let randomAnimals = ["Dog" , "Mouse" , "Cow" , "Snake"];
let randomAnimalBodyParts = ["Legs" , "Ears" , "Tail"];
let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random()*3)];
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomAnimal = randomAnimals[Math.floor(Math.random() * 4)];
let randomInsult = ["Your " + randomAnimalBodyPart + " is more " + randomAdjective + " than a  " + randomAnimal + " 's " + randomAnimalBodyPart].join(" ");
console.log(randomInsult); 

let randomInsult1 = [ 'Lousy' , 'Lazy' , 'Brainless'];
let randomInsult1s = randomInsult1[Math.floor(Math.random()*3)];
console.log("You are nothing but a " + randomInsult1s + " girl ")
let numbers = [ 3,2,1];
console.log(numbers.join( " is bigger than "));