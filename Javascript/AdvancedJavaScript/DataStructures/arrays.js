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

// function curve(grade) {
//     return grade += 5;
//    }
//    var grades = [77, 65, 81, 92, 83];
//    var newgrades = grades.map(curve);
//    console.log(newgrades);

//arrays in objects
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// function displayPts(arr) {
//   for (var i = 0; i < arr.length; ++i) {
//     console.log(arr[i].x + ", " + arr[i].y);
//   }
// }
// var p1 = new Point(1, 2);
// var p2 = new Point(3, 5);
// var p3 = new Point(2, 8);
// var p4 = new Point(4, 4);
// var points = [p1, p2, p3, p4];
// for (var i = 0; i < points.length; ++i) {
//   console.log("Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y);
// }
// var p5 = new Point(12, -3);
// points.push(p5);
// print("After push: ");
// displayPts(points);
// points.shift();
// print("After shift: ");
// displayPts(points);
