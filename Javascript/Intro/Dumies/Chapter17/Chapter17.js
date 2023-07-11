// for (let counter = 0; counter < 500; counter++) {
//   console.log(counter + ": Hello, JavaScript");
// }

// for (let i=10; i>0; i--){
//     alert(i);
// }
// alert("Blast off!");

// let myFriends = ["Angatha", "Agnes", "Jermaine", "Jack"];
// for (let i=0; i<myFriends.length; i++){
//     alert(myFriends[i] + " is my friend");
// }

//creates a random number between 0 and 1 decimal
//alert(Math.random())
//if you want to create a random number between 0 and 10
// alert(Math.random()*11);
// If you want a random number between 100 and 1,000
// alert(Math.floor(Math.random()*(1000-100)+100));

// let myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// let randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let weather = [
  "Sunny",
  "Partly Sunny",
  "Partly Cloudy",
  "Cloudy",
  "Raining",
  "Snowing",
  "Thunderstorms",
  "Foggy",
];
let minTemp = 0;
let maxTemp = 100;

function generateWeather() {
  for (let i = 0; i < days.length; i++) {
    let weatherToday = weather[Math.floor(Math.random() * weather.length)];
    let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
    document.getElementById("5DayWeather").innerHTML +=
      "<div id='" +
      days[i] +
      "' class='" +
      weatherToday +
      "'><b>Forecast for " +
      days[i] +
      ":</b><br><br>" +
      weatherToday +
      " and " +
      tempToday +
      " degrees.</div>";
  }
}
generateWeather();
