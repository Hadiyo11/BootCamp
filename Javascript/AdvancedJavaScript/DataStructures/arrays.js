//creating arrays from strings
// let sentence = "the quick brown fox jumped over the lazy dog";
// let words = sentence.split(" ")
// for(let i=0; i<words.length; i++){
//     console.log("word " + i + ": " + words[i])
// }

//searching for a value
// let names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
// let answer = prompt("Enter a name for: ");
// let name1 = answer.toString();
// let position = names.lastIndexOf(name1);
// if(position>=0){
//     console.log("Found " + name1 + " at position " + position);
// } else{
//     console.log(name1 + " not found in array")
// }

//mutator functions
//allows you to modify elements witount referencing them individually
// let nums = [1,2,3,4,5,6];
// nums.push(7);
// console.log(nums)
//adding elements

// function isEven(num){
//     return num % 2 ==0;
// }
// let nums = [2,4,6,8,10,12];
// let even = nums.every(isEven);
// if(even){
//     console.log("all the numbers are even");
// }else{
//     console.log("not all numbers are even")
// }

function curve(grade) {
    return grade += 5;
   }
   var grades = [77, 65, 81, 92, 83];
   var newgrades = grades.map(curve);
   console.log(newgrades);