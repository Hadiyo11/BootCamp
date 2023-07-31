// arr1 = new Array("purple", "green", "yellow");
// arr2 = ["black", "orange", "pink"];
// arr3 = new Array(10);
// arr4 = [10];
// console.log(arr3);
// console.log(arr4);

// const arr = ["hi there"];
// arr[0] = "new value";
// console.log(arr[0]);
// arr =  ["nope, now you are overwriting the array"]; //error since you cant change constant

// cars = ["VW", "BMW", "Toyota"];
// cars[-1] = "Audi";
// console.log(cars[-1]);// get audi
// console.log(cars); //get audi and -1 as key element in objects

//Practice exercise 3.1
// let shoppinglist = ["Milk", "Bread", "Apples"]
// console.log(shoppinglist.length); //3
// shoppinglist[1] = "Bananas"
// console.log(shoppinglist)// milk, bananas, apples

// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2,0,"square","trapezoid");//add after triangle then when splice is 2,2 remove after triangle
// console.log(arrOfShapes);

// let arr5 = [1,2,3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);

// let arr8 = arr7.concat(7, 8, 9);
// console.log(arr8);
// arr8.splice(1,3);
// console.log(arr8);
// delete arr8[0];
// console.log(arr8);

// let arr8 = [2, 4, 6, 7, 8];
// let value1 = arr8.find(function(element) { return element === 6});
// let value2 = arr8.find(function(e) {return e === 10});
// console.log(value1, value2); //finds will give you number if cant find it undefined

// arr8 = [ 2, 6, 7, 8 ];
// let findIndex = arr8.indexOf(6);
// let findIndex2 = arr8.indexOf(10);
// console.log(findIndex, findIndex2); //-1 for the 2nd one

// arr8 = [ 2, 6, 7, 8 ];
// let findIndex3 = arr8.indexOf(6, 2); //the value of findIndex3 will be -1, because 6 cannot be found starting from index 2.

// console.log(findIndex3);

// let animals = ["dog", "horse", "cat", "platypus", "dog"];
// let lastDog = animals.lastIndexOf("dog");
// console.log(lastDog)

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();
// console.log(names); //sort in alphabetical order
// names.reverse();
// console.log(names); //reverses it

//Practice exercise 3.2
// let shoppinglist = [];
// shoppinglist.push("Milk", "Bread", "Apples")
// shoppinglist.splice(1,1, "Bananas", "Eggs");
// // shoppinglist.pop(); //remove last item
// console.log(shoppinglist.pop());
// shoppinglist.sort();
// let index = shoppinglist.indexOf("Bananas");
// index +=1;
// shoppinglist.splice(index,0,"Carrots", "Lettuce");
// let list2 = ["Juice", "Pop"];
// shoppinglist= shoppinglist.concat(list2,list2);
// console.log(shoppinglist.lastIndexOf("Pop"));
// console.log(shoppinglist)

// let arr1 = [1,2,3];
// let arr2 = [arr1, arr1, arr1];
// console.log(arr2[0][1]);
// console.log(typeof arr1)//its an object

//Practice 3.4
// let myCar = {
//     make: "Audi",
//     year: "2021",
// };
//  let property= "color"
//  myCar[property]="red"
// let property1 = "for sale"
// myCar[property1]  = "R5000000"
// console.log(myCar)

// let people = {friends:[]};
// let friend1 = {fname:"Anna", lname:"Miller", id:10};
// let friend2 = {fname:"Missy", lname:"Smith", id:20};
// let friend3 = {fname:"Mpho", lname:"Ray", id:40};
// people.friends.push(friend1, friend2, friend3);
// console.log(people);