let position = 0; //keep track of which video we are playing
let playlist; //hold video playlist array
let video; //hold a ref to the video element

window.onload = function () {
  playlist = ["video/preroll", "video/areyoupopular", "video/destinationearth"];
  video = document.getElementById("video");
  video.addEventListener("ended", nextVideo, false); //nextVideo is function called when the event happens
  //add eventlistener for the video ended event
  video.src = playlist[position] + getFormatExtension();
  video.load();
  video.play();
  alert("Playing " + video.currentSrc);
};

function nextVideo() {
  position++;
  if (position >= playlist.length) {
    position = 0;
    //if we hit the end of the list, we loop around by setting position to 0
  }
  video.src = playlist[position] + getFormatExtension(); //set the source of the player to thenext video
  video.load();
  video.play();
  alert("Playing " + video.currentSrc);
}

//canPlayType method to check is client can play a video formatt
function getFormatExtension() {
  if (video.canPlayType("video/mp4") != "") {
    return ".mp4";
  } else if (video.canPlayType("video/webm") != "") {
    return ".webm";
  } else if (video.canPlayType("video/ogg") != "") {
    return ".ogv";
  }
}
