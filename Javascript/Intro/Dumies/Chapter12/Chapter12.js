// function smileyIt(theText) {
//   theText += ":)";
//   return theText;
// }
// console.log(smileyIt("I like to "));

// function whatsTheNumber(){
//     return 3000;
// }
// let theTotal = whatsTheNumber() + 300;
// console.log(theTotal);

/*
todo: Create three global variables:
* trainSpeed (initial value = 250)
* trainPosition (initial value = 0)
* animation (no initial value)
*/
let trainSpeed = 250;
let trainPosition = 0;
let animation;
/*
todo: Listen for click events on the train element and 
call a function named speedUp when they happen.
*/
let train = document.getElementById("train");
train.addEventListener("click", speedUp);
/*
todo: Listen for click events on the stop button element 
and call a function called stopTrain when they 
happen.
*/
let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    /*
  todo: Check whether the train is already going as fast 
as it can. If not, increase the speed.
 */
if(trainSpeed > 10){
    trainSpeed -=10;
}
 /*
 If the train is already moving, stop it and then 
restart with the new speed by calling a 
function called frame.
 */
clearInterval(animation); //stop animation
animation = setInterval(frame,trainSpeed); //start animation
 function frame() {
    trainPosition +=  2;
    train.style.left = trainPosition + 'px';
    checkPosition();
    /*
    todo: Reposition the train and check whether the 
   train is crashed.
    */
    }
   }
   function stopTrain() {
    if (trainPosition < 260) {
        alert("Crashed");
        clearInterval(animation);
    }
    /*
    todo: Test whether the train is already crashed. If 
   not, stop the train.
    */
   }
   function checkPosition(currentPosition){
    if (currentPosition === 260) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    /*
    todo: Check the train's current position and crash it 
   if it's at the end of the line.
    */
   }
}
    