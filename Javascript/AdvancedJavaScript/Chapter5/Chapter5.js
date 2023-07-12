// let i = 0;
// while ( i < 10) {
//     console.log(i);
//     i++;
// }

// for (i=0; i <10; i++){
// console.log(i);
// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;
// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//  fibonacciArray.push(nr1);
//  temp = nr1 + nr2;
//  nr1 = nr2;
//  nr2 = temp; 
// }
// console.log(fibonacciArray);

// let inCorrect = true;
// let secret = Math.floor(Math.random()*10 + 1);
// while(inCorrect) {
//     guess = Number(prompt("Guess the number between 1 and 10"));
//      if (guess === secret){
//         alert("Correct");
//         inCorrect = false;
//      } else if(guess < secret){
//         alert("Too low");
//      } else {
//         alert("Too high");
//      }
// }

// let inCorrect  = true;
// let secret = Math.floor(Math.random()*10 + 1);
// do {
//     guess = Number(prompt("Guess the number between 1 and 10"));
//      if (guess === secret){
//         alert("Correct");
//         inCorrect = false;
//      } else if(guess < secret){
//         alert("Too low");
//      } else {
//         alert("Too high");
//      }
// } while(inCorrect)

// let arr = [];
//  for(let i = 0; i < 100; i++ ){
//     arr.push(i);
//  }
//  console.log(arr);

//Practice exercise 5.3
// let myWork = [];
// for( let i=1; i<11; i++ ){
//     let lesson= {}
//     lesson.name = `Lesson ${i}`;
//     lesson.status = i % 2 ? "true" : "false";
//     myWork.push(lesson);
// }
// console.log(myWork)


//Nested Loops
// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
//  arrOfArrays.push([]);
//  for (let j = 0; j < 7; j++) {
//  arrOfArrays[i].push(j);
//  }
// }
// console.log(arrOfArrays);
// console.table(arrOfArrays)

//Practice 5.4
// let myTable = [];
// let rows = 6;
// let cols = 7;
// let temp;
// let counter = 1;
// for( i=0; i<rows; i++){
//     temp = [];
//     for(x=0; x<cols; x++) {
//         temp.push(counter);
//         counter++;
//     }
//     myTable.push(temp);
// }
// console.log(myTable);

//Practice 5.5 
// let myTable =[];
// let cells = 65;
// let count = 0; 
// let row;
// for (i=0; i<cells; i++){
//     if(count%8 === 0){
//         if(row != undefined){
//             myTable.push(row);
//         }
//         row= [];
//     }
//     count++;
//     let temp = count;
//     row.push(temp);
// }
// console.log(myTable);

//for Of Loop
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let surname of names){
//  console.log(surname);
// }

//Practice 5.6
// let numbers = [];
// console.log("normal for loop");
// for ( let i=0; i<10; i++){
//     numbers.push(i);
    
// }
// console.log(numbers);

// for( let x=0; x<numbers.length; x++){
//     console.log(numbers[x]);
// }

// console.log("For of loop")
// for( let e of numbers){
//     console.log(e);
// }


// let car ={
//     model: "Golf",
//  make: "Volkswagen",
//  year: 1999,
//  color: "black",
// };
// for (let prop in car ) {
//     console.log(car[prop]); //get the value 
//     console.log(prop); //get only the key
// }

// let laptop= {
//     brand: 'Dell',
//     model: '5577 Intel7',
//     color: 'black'
// };

// for ( let prop in laptop){
//     console.log(prop, laptop[prop]);
// }

// let array = ["Dell", "black","5577 Intel7" ]
// for( let prop in array){
//     console.log(prop, array[prop]);
// }

// let laptop= {
//     brand: 'Dell',
//     model: '5577 Intel7',
//     color: 'black'
// };

// for (let entry of Object.entries(laptop)){
//     console.log(entry); //shows key and value
// }

//Practice exercise 5.8
// let output ="";
// let num = Number(prompt("Which number must I skip between 1 and 10"));
// for (let i=0; i<10; i++){
//     if(i === num){
//     continue;
//     }
//     output +=i;
// }
// alert(output);

// let groups = [
//     ["Martin", "Daniel", "Keith"],
//     ["Margot", "Marina", "Ali"],
//     ["Helen", "Jonah", "Sambikos"],
//    ];
//    for (let i = 0; i < groups.length; i++) {
//     let matches = 0;
//    for (let j = 0; j < groups[i].length; j++) {
//     if(groups[i][j].startsWith("M")){
//     matches++;
//     } else {
//     continue;
//     }
//     if (matches === 2){
//     console.log("Found a group with two names starting with an M:");
//     console.log(groups[i]);
//     break;
//     }
//     }
//    }  
// outer:
// for (let group of groups){
//     for (let member of group){
//     if (member.startsWith("M")){
//     console.log("found one starting with M:", member);
//      break outer;
// }
// }
// }

