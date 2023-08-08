let videos = {
  video1: "video/demovideo1",
  video2: "video/demovideo2",
};
let effectFunction = null;

//object holds two demo videos
window.onload = function () {
  let video = document.getElementById("video");
  video.src = videos.video1 + getFormatExtension();
  //set the first video in the array with a playable extension
  video.load(); //video is ready to load when user clicks play

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
  video.addEventListener("ended", endedHandler, false);//when video ends, endedHandler is called
  video.addEventListener("play", processFrame, false); //when video plays, calls this function
  pushUnpushButtons("video1", []);
  pushUnpushButtons("normal", []);
  //helper function to visually depress the video button and normal(no filter) button in the interface
};

function processFrame() {
  let video = document.getElementById("video");
  if (video.paused || video.ended) {
    return;
  }
  let bufferCanvas = document.getElementById("buffer");
  let displayCanvas = document.getElementById("display");
  let buffer = bufferCanvas.getContext("2d");
  let display = displayCanvas.getContext("2d");

  buffer.drawImage(video, 0, 0, bufferCanvas.width, displayCanvas.height);
  let frame = buffer.getImageData(
    0,
    0,
    bufferCanvas.width,
    displayCanvas.height
  );
  let length = frame.data.length / 4;
  for (let i = 0; i < length; i++) {
    let r = frame.data[i * 4 + 0];
    let g = frame.data[i * 4 + 1];
    let b = frame.data[i * 4 + 2];
    if (effectFunction) {
      effectFunction(i, r, g, b, frame.data);
    }
  }
  display.putImageData(frame, 0, 0);

  setTimeout(processFrame, 0);
}

function noir(pos, r, g, b, data) {
  let brightness = (3*r + 4*g + b) >>> 3;
  if (brightness < 0) brightness = 0;
  data[pos * 4 + 0] = brightness;
  data[pos * 4 + 1] = brightness;
  data[pos * 4 + 2] = brightness;
}

function western(pos, r, g, b, data) {
	let brightness = (3*r + 4*g + b) >>> 3;
	data[pos * 4 + 0] = brightness+40;
	data[pos * 4 + 1] = brightness+20;
	data[pos * 4 + 2] = brightness-20;
	data[pos * 4 + 3] = 255; //220;
}

function scifi(pos, r, g, b, data) {
	let offset = pos * 4;
	data[offset] = Math.round(255 - r) ;
	data[offset+1] = Math.round(255 - g) ;
	data[offset+2] = Math.round(255 - b) ;
}



function endedHandler() {
  pushUnpushButtons("", ["play"]);
}

function getFormatExtension() {
  let video = document.getElementById("video");
  if (video.canPlayType("video/mp4") != "") {
    return ".mp4";
  } else if (video.canPlayType("video/webm") != "") {
    return ".webm";
  } else if (video.canPlayType("video/ogg") != "") {
    return ".ogv";
  }
}

function handleControl(e) {
  let id = e.target.getAttribute("id"); //want to see who called us by retrieving the id of the element that invoked the handler
  let video = document.getElementById("video");
  if (id == "play") {
    pushUnpushButtons("play", ["pause"]);
    if (video.ended) {
      video.load();
      //if user has pressed play, then call the play method to the video object
    }
    video.play();
  } else if (id == "pause") {
    pushUnpushButtons("pause", ["play"]); //if pause button was pushed, play shouldnt be there
    video.pause(); //if vid paused, use video object pause method
  } else if (id == "loop") {
    //interface reflect pause
    if (isButtonPushed("loop")) {
      pushUnpushButtons("", ["loop"]);
    } else {
      pushUnpushButtons("loop", []);
    }
    video.loop = !video.loop;
  } else if (id == "mute") {
    if (isButtonPushed("mute")) {
      pushUnpushButtons("", ["mute"]);
    } else {
      pushUnpushButtons("mute", []);
    }
    video.muted = !video.muted;
  }
}

function setEffect(e) {
  let id = e.target.getAttribute("id");
  if (id == "normal") {
    pushUnpushButtons("normal", ["western", "noir", "scifi"]);
    effectFunction = null;
  } else if (id == "western") {
    pushUnpushButtons("western", ["normal", "noir", "scifi"]);
    effectFunction = western;
  } else if (id == "noir") {
    pushUnpushButtons("noir", ["normal", "western", "scifi"]);
    effectFunction = noir;
  } else if (id == "scifi") {
    pushUnpushButtons("scifi", ["normal", "western", "noir"]);
    effectFunction = scifi;
  }
}

function setVideo(e) {
  let id = e.target.getAttribute("id");
  let video = document.getElementById("video");
  if (id == "video1") {
    pushUnpushButtons("video1", ["video2"]);
  } else if (id == "video2") {
    pushUnpushButtons("video2", ["video1"]);
  }
  video.src = video[id] + getFormatExtension();
  video.load();
  video.play();
  pushUnpushButtons("play", ["pause"]);
}
//pushUnpushButtons take care of button states.
//arguments are the button ids
function pushUnpushButtons(idToPush, idarrayToUnpush) {
  if (idToPush != "") {
    //check if the id of button to push is not empty
    let anchor = document.getElementById(idToPush); //grab anchor
    let theClass = anchor.getAttribute("class"); //get class attribute
    if (!theClass.indexOf("selected") >= 0) {
      //if class attribute doesnt contain te string selected
      theClass = theClass + " selected"; //we press the button by adding the selected class to anchor
      anchor.setAttribute("class", theClass);
      let newImage = "url(images/" + idToPush + "pressed.png)";
      anchor.style.backgroundImage = newImage;
    }
    //If the class attribute does not contain the string "selected",
    //it appends the string " selected" to the class attribute value, sets the modified class attribute back to the element using setAttribute, and
    //changes the background image of the element to "images/" + idToPush + "pressed.png".
  }
  for (var i = 0; i < idarrayToUnpush.length; i++) {
    anchor = document.getElementById(idarrayToUnpush[i]);
    theClass = anchor.getAttribute("class");
    if (theClass.indexOf("selected") >= 0) {
      theClass = theClass.replace("selected", ""); //if contains selected string, removes it using replace
      anchor.setAttribute("class", theClass);
      anchor.style.backgroundImage = "";
    }
  }
}
function isButtonPushed(id) {
  let anchor = document.getElementById("id");
  let theClass = anchor.getAttribute("class");
  return theClass.indexOf("selected") >= 0;
} //returns true if the class attribute contains the string "selected",
