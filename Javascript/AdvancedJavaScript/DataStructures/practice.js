//repetition constructs
// let number = 1;
// let sum = 0;
// while (number < 11){
//     sum += number;
//     ++number;
// }
// console.log(sum);

//factorial
// function factorial(number) {
//     var product = 1;
//     for (var i = number; i >= 1; --i) {
//     product *= i;
//     }
//     return product;
//    }
//    console.log(factorial(4)); // displays 24

// function factorial(number){
//     if(number == 1){
//         return number
//     }
//     else {
//         return number * factorial(number-1);
//     }
// }
// console.log(factorial(5))

// function checking(amount) {
//   this.balance = amount;
//   this.deposit = deposit;
//   this.withdraw = withdraw;
//   this.toString = toString;
// }
// function deposit(amount) {
//   this.balance += amount;
// }
// function withdraw(amount) {
//   if (amount <= this.balance) {
//     this.balance -= amount;
//   }
//   if (amount > this.balance) {
//     console.log("Insufficient funds");
//   }
// }
// function toString() {
//   return "Balance: " + this.balance;
// }
// let account = new checking(500);
// account.deposit(1000);
// console.log(account.toString());
// account.withdraw(200);
// console.log(account.toString())