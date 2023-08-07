window.onload = function () {
  let controlLinks = document.querySelectorAll("a.control");
  for (let i = 0; i < controlLinks.length; i++) {
    controlLinks[i].onclick = handleControl;
  }
  let effectiveLinks = document.querySelectorAll("a.effect");
  for (let i = 0; i < effectiveLinks.length; i++) {
    effectiveLinks[i].onclick = setEffect;
  }
  let videoLinks = document.querySelectorAll("a.videoSelection");
  for (let i = 0; i < videoLinks.length; i++) {
    videoLinks[i].onclick = setVideo;
  }
  pushUnpushButtons("video1", []);
  pushUnpushButtons("normal", []);
  //helper function to visually depress the video button and normal(no filter) button in the interface
};

function handleControl(e) {
  let id = e.target.getAttribute("id"); //want to see who called us by retrieving the id of the element that invoked the handler
  if (id == "play") {
    pushUnpushButtons("play", ["pause"]);
  } else if (id == "pause") {
    pushUnpushButtons("pause", ["play"]); //if pause button was pushed, play shouldnt be there
  } else if (id == "loop") {//interface reflect pause 
    if (isButtonPushed("loop")) {
      pushUnpushButtons("", ["loop"]);
    } else {
      pushUnpushButtons("loop", []);
    }
  } else if (id == "mute") {
    if (isButtonPushed("mute")) {
      pushUnpushButtons("", ["mute"]);
    } else {
      pushUnpushButtons("mute", []);
    }
  }
}

function setEffect(e) {
  let id = e.target.getAttribute("id");
  if (id == "normal") {
    pushUnpushButtons("normal", ["western", "noir", "scifi"]);
  } else if (id == "western") {
    pushUnpushButtons("western", ["normal", "noir", "scifi"]);
  } else if (id == "noir") {
    pushUnpushButtons("noir", ["normal", "western", "scifi"]);
  } else if (id == "scifi") {
    pushUnpushButtons("scifi", ["normal", "western", "noir"]);
  }
}

function setVideo(e){
    let id = e.target.getAttribute("id");
    if(id == 'video1'){
        pushUnpushButtons("video1", ["video2"]);
    }else if(id== "video2"){
        pushUnpushButtons("video2", ['video1'])
    }
}

function pushUnpushButtons(idToPush, idarrayToUnpush) {
    if (idToPush != "") {
    let anchor = document.getElementById(idToPush);//grab anchor
    let theClass = anchor.getattribute("class");//get class attribute
    if (!theClass.indexOf("selected") >= 0) {
    theClass = theClass + " selected";
    anchor.setattribute("class", theClass);
    let newImage = "url(images/" + idToPush + "pressed.png)";
    anchor.style.backgroundImage = newImage;
    }
    }
    for (var i = 0; i < idarrayToUnpush.length; i++) {
    anchor = document.getElementById(idarrayToUnpush[i]);
    theClass = anchor.getattribute("class");
    if (theClass.indexOf("selected") >= 0) {
    theClass = theClass.replace("selected", "");
    anchor.setattribute("class", theClass);
    anchor.style.backgroundImage = "";
    }
    }
}   
function isButtonPushed(id){
    let anchor = document.getElementById("id");
    let theClass = anchor.getAttribute("class");
    return (theClass.indexOf("selected")>=0);
}