//Employee Tracking App
// class Employees {
//     firstName;
//     lastName;
//     numOfYears;
//     constructor(firstName, lastName, numOfYears){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.numOfYears = numOfYears;
//     }
// }
// Employees.prototype.introduce = function(){
//     console.log(`${this.firstName} ${this.lastName} has been working in the company for ${this.numOfYears} of years`);

// };
// let Employee1 = new Employees("John", "Smith", "5");
// let Employee2 = new Employees("Dana", "Maureen", "3");
// let myEmployees = [Employee1, Employee2];

// myEmployees.forEach(myEmployees => {
//     console.log(myEmployees);
// });
// Employee1.introduce();
// Employee2.introduce();


//Menu Items price calculator
class Menu {
  #offer1 = 10;
  #offer2 = 20;
  constructor(val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
  }
  calTotal() {
    return this.val1 * this.#offer1 + this.val2 * this.#offer2;
  }
  get total() {
    return this.calTotal();
  }
}
const val1 = new Menu(2, 0);
const val2 = new Menu(1, 3);
const val3 = new Menu(3, 2);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);
