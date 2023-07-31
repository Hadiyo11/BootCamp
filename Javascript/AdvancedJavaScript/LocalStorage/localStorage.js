// let answer = localStorage.key(1);//key()
// //can be used to retrieve the value of the second item in a localStorage
// //can also be used in a loop statement to retrieve all the items in a local storage

// //setItem()
// //used to store items in a local storage
// window.localStorage.setItem("grade","One");
// //in this case, the `grade` is the key while `One` is the value.
//we must stringy objects before we store them in a local storage

const Car = {
  brand: "Suzuki",
  color: "white",
  price: 10000,
};

window.localStorage.setItem("car", JSON.stringify(Car));

//getItem()
//fuction is used to access orretrieve data in the local storage.
//takes a key as a parameter 
window.localStorage.getItem('car');//"{brand:"Suzuki",color:"white",price:"10000"}"
//can convert it to an object using JSON.parse()
JSON.parse(window.localStorage.getItem('car'));
 
//removeItem()
//used to delete an item from a local storage
//requires the key as a parameter 
window.localStorage.removeItem('brand');
//clear()
//used to clear all the values stored in the local storage
window.localStorage.clear()