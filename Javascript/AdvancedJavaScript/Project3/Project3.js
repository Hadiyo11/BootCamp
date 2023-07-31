let theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
theList.pop(); 
theList.shift(); 
theList.unshift("FIRST"); 
theList[3] = "hello World"; 
theList[2] = "MIDDLE"; 
theList.push("LAST"); 
console.log(theList);

//Company product catalog
// let inventory = [];
// let item3 = {
//  name: "computer",
//  model: "imac",
//  cost: 1000,
//  qty: 3
// }
// let item2 = {
//  name: "phone",
//  model: "android",
//  cost: 500,
//  qty: 11
// }
// let item1 = {
//  name: "tablet",
//  model: "ipad",
//  cost: 650,
//  qty: 1
// }
// inventory.push(item1, item2, item3);
// console.log(inventory);
// console.log(inventory[2].qty);
