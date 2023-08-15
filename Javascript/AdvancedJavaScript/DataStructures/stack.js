// class Stack {
//     constructor(){
//         this.items = [];
//     }

//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         return this.items.pop();
//     }
//     peek(){
//         return this.items[this.items.length-1];
//     }
//     isEmpty(){
//         return this.items.length ===0;
//     }
//     size(){
//         return this.items.length;
//     }
//     print(){
//         console.log(this.items.toString)
//     }
// }

// let stack = new Stack();
// console.log(stack.isEmpty())
// stack.push("David");
// stack.push("Raymond");
// stack.push("Bryan");
// console.log("The length is " + stack.size());
// console.log(stack.peek());

//palindromes
// function isPalindrome(word) {
//   var s = new Stack();
//   for (var i = 0; i < word.length; ++i) {
//     s.push(word[i]);
//   }
//   var rword = "";
//   while (s.length() > 0) {
//     rword += s.pop();
//   }
//   if (word == rword) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let word = "hello";
// if (isPalindrome(word)) {
//   console.log(word + " is a palindrome.");
// } else {
//   console.log(word + " is not a palindrome.");
// }
// word = "racecar";
// if (isPalindrome(word)) {
//   console.log(word + " is a palindrome.");
// } else {
//   console.log(word + " is not a palindrome.");
// }

// function isPalindrome(str) {
//   var j = str.length - 1;
//   for (var i = 0; i < str.length / 2; i++) {
//     if (str[i] != str[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }

// var str1 = "racecar";
// var str2 = "nitin";
// var str3 = "Rama";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));
