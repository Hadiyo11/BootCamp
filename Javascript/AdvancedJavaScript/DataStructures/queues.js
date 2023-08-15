//queue is a list where data inserted at the end and removed from front
//follow first in first out data structure
// names = [];
// names.push("Cynthia");
// names.push("Jennifer");
// console.log(names);
// names.shift();
// console.log(names)

// class Queue {
//   constructor() {
//     this.dataStore = [];
//     // this.enqueue = this.enqueue;
//     // this.dequeue = this.dequeue;
//     // this.back = back;
//     // this.toString = toString;
//     // this.empty = empty;
//   }
//   enqueue(element) {
//     this.dataStore.push(element);
//   }
//   dequeue(){
//     return this.dataStore.shift();
//   }
//   front(){
//     return this.dataStore[0];
//   }
//   back(){
//     return this.dataStore[this.dataStore.length-1]
//   }
//   toString(){//want to display all the elements in the queue
//     let retStr = '';
//     for(let i=0; i<this.dataStore.length; i++){
//         retStr += this.dataStore[i]+"\n";
//     }
//     return retStr;
//   }
//   empty(){
// if(this.dataStore.length == 0){
//     return true
// } else{
//     return false;
// }
//   }
// }
// let q = new Queue();
// q.enqueue("Meridith");
// q.enqueue("Cynthia");
// q.enqueue("Jennifer");
// console.log(q.toString());
// q.dequeue();
// console.log(q.toString());
// console.log("Front queue: " + q.front());
// console.log("Back of queue: " + q.back())