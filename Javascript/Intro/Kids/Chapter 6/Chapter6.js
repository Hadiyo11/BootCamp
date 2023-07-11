// let fname = "Nick";
// console.log("Hello " + fname);
// if(fname.length >7){
//     console.log("Wow you have a really long name!");
// } else{
//     console.log("You name isn't very long");
// }
// let lemonChicken = false;
// let beefWithBlackBean = true;
// let sweetAndSourPork = true; 
// if(lemonChicken){
//     console.log("Great! I'm having lemon chicken!");
// } else if(beefWithBlackBean){
//     console.log("I'm having the beef");
// } else if(sweetAndSourPork){
//     console.log("OK, I'll have the pork");
// } else{
//     console.log("I guess I'll be having rice")
// }
// let myName = prompt('What is your name?');
// if(myName.toLowerCase() === "Hadiyo"){
// alert("Hello me!");
// } else{
//     alert("Hello stranger");
// }
// let age = prompt("How old are you?")
// if(age>=18){
//     alert("You can watch the movie");
// } else{
//     alert("You are not allowed to watch the movie");
// }
// let countDown = 10;
// while(countDown>0){
//     alert(countDown);
// countDown--;
// }
// alert("TAKE OFF");
// for (let sheepCount = 0; sheepCount < 10; sheepCount++){
//     alert('I have counted ' + sheepCount + ' sheep ');
// }
// let timesToSayHello =20;
// for(let i=0; i < timesToSayHello; i++){
//     console.log("Hello");
// }
// let animals = ['Lion', 'Flamingo', 'Polar Bear', 'Boa Constrictor'];
// for(let i=0; i<animals.length; i++){
//     console.log("This zoo contains a " +animals[i] + ' . ');
// }

// let vegetables = ['Cabbage', 'Cucumber', 'Spinach' , 'Carrots'];
// for(let i=0; i<vegetables.length; i++){
//     console.log('This basket contains ' + vegetables[i] + " . ");
// }

// let myName = "Hadiyo";
// for(let i=0; i<myName.length; i++){
//     console.log("My name contains the letter " + myName[i] + ' . ');
// }

for(let x=3; x<10000; x=x*3){
    console.log(x);
}

let animals = ['Cat', 'Fish', 'Lemur', 'Komodo Dragon'];
for(let i=0; i<animals.length; i++){
    animals[i] = 'Awesome ' + animals[i];
}
console.log(animals);

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomString =""
for(let i=0; i<6; i+=alphabet){
console.log(Math.floor(Math.random()*alphabet.length))
}