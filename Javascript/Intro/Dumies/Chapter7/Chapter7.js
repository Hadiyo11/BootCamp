// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("head").style.transform = "rotate(15deg)";
// document.getElementById("body").style.border = "2px black solid";
// document.getElementById("mouth").style.borderRadius = "4px";
// document.getElementById("righteye").style.border = "4px yellow dotted"
// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// document.getElementById("body").style.color = "#FF0000";
// document.getElementById("head").style.borderTop = "5px black solid";

let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

let leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);

let leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click",moveRightLeft);

let nNose = document.getElementById("nose");
nNose.addEventListener("click", moveUpDown)

function moveUpDown(e){
    let robotPart = e.target;
    let n = 0;
    let animation = setInterval(frame,50);

    function frame(){
      robotPart.style.top = n + "%" 
      n++;
      if(n==55) {
        clearInterval(animation);
      }
    }
}

function moveRightLeft(e){
    let robotPart = e.target;
    let l = 0;
    let animation = setInterval(frame,10);

    function frame(){
      robotPart.style.left = l + "%" 
      l++;
      if(l==71) {
        clearInterval(animation);
      }
    }
}

function moveUpDown(e){
    let robotPart = e.target;
    let t = 0;
    let animation = setInterval(frame,19);

    function frame(){
      robotPart.style.top = t + "%" 
      t++;
      if(t==20) {
        clearInterval(animation);
      }
    }
}