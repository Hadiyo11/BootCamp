//Word Scrambler
/*let str = "Advanced";

function scramble(val) {
  let max = val.length;
  let temp = "";
  for (let i = 0; i < max; i++) {
    console.log(val.length);
    let index = Math.floor(Math.random() * val.length);
    temp += val[index];
    console.log(temp);
    val = val.substr(0, index) + val.substr(index + 1);
    console.log(val);
  }
  return temp;
}
console.log(scramble(str));*/

//Countdown timer
// let endDate = "Sept 1 2022";
// function countdown() {
//   const total = Date.parse(endDate) - new Date();
//   const days = Math.floor(total / (1000 * 60 * 60 * 24));
//   const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
//   const mins = Math.floor((total / 1000 / 60) % 60);
//   const secs = Math.floor((total / 1000) % 60);
//   return {
//     days,
//     hrs,
//     mins,
//     secs,
//   };
// }
// function update() {
//   let temp = countdown();
//   let output = "";
//   for (const property in temp) {
//     output += `${property}: ${temp[property]} `;
//   }
//   console.log(output);
//   setTimeout(update, 1000);
// }
// update();
