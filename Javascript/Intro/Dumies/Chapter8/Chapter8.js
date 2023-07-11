// let doTheMath = 7 + 8 + 36 + 18 + 12
// console.log(doTheMath);

var dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "brown",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 4500
}
alert("My dream car is " + dreamCar)

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
document.getElementById("body").style.backgroundColor = dreamCar.color;
